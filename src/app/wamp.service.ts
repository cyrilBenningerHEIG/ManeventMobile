import { Injectable } from '@angular/core';
import { Connection, Session } from 'autobahn-browser';
import { Observable, Observer, ReplaySubject} from 'rxjs';
import { switchMap } from 'rxjs/operators';

const secret = 'diagram-despite-joint-oxygen';

@Injectable({ providedIn: 'root' })
export class WampService {
  // Keep a reference to the WAMP session once connected
  private session$ = new ReplaySubject<Session>(1);

  constructor() {
    // Create the connection to the WAMP Brocker
    const connection = new Connection({ url: 'wss://wamp.archidep.media/ws', realm: 'manevent', authid: 'manevent', authmethods: ['ticket'], onchallenge: function () {
      return secret }});
    // When the connection is open, emit the session through the ReplaySubject
    connection.onopen = session => this.session$.next(session);
    // Initiate the connection
    connection.open();
  }

  public call(procUri: string, arr?: any[], obj?: object, options?: object): Observable<any> {
    // Retrieve the WAMP session
    return this.session$.pipe(
      switchMap(session => {
        // Convert the RPC promise to an Observable equivalent
        return new Observable((subscriber: Observer<any>) => {
         session
            // Make the call
          .call(procUri, arr, obj, options)
            // If the call succeeds, emit the returned value
           .then(subscriber.next.bind(subscriber))
            // If the call fails, emit the error
           .catch(subscriber.error.bind(subscriber))
            // Whatever happens, unsubscribe from the Observable at the end
           .finally(subscriber.complete.bind(subscriber));
        });
      })
    );
  }

  public listen(topicUri: string): Observable<any> {
   return this.session$.pipe(
     switchMap(session => {
       return new Observable((subscriber: Observer<any>) => {
         // Subscribe to the topic and make the observable emit a value
         // each time a new event is published to this topic
         session.subscribe(topicUri, event => subscriber.next(event));
       });
     })
   );
 }

}
