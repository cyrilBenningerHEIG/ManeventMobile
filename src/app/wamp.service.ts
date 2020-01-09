import { Injectable } from '@angular/core';
import { Connection, Session } from 'autobahn-browser';
import { ReplaySubject } from 'rxjs';

const wampUrl = 'wss://wamp.archidep.media/ws ';
const wampRealm = 'manevent';

@Injectable({ providedIn: 'root' })
export class WampService {
  // Keep a reference to the WAMP session once connected
  private session$ = new ReplaySubject<Session>(1);

  constructor() {
    // Create the connection to the WAMP Brocker
    const connection = new Connection({ url: wampUrl, realm: wampRealm });
    // When the connection is open, emit the session through the ReplaySubject
    connection.onopen = session => this.session$.next(session);
    // Initiate the connection
    connection.open();
  }
}