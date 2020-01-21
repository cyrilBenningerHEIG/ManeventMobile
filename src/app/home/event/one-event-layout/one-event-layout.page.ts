import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../../models/event';
import { User } from '../../../models/user';
import { Msg } from '../../../models/msg';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { map } from 'rxjs/operators';
import { personIcon } from '../../../../assets/Person_marker';
import { eventIcon } from '../../../../assets/Event_marker';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { latLng, MapOptions, tileLayer, Map,marker, Marker } from 'leaflet';
import { WampService } from '../../../wamp.service';

@Component({
  selector: 'app-one-event-layout',
  templateUrl: './one-event-layout.page.html',
  styleUrls: ['./one-event-layout.page.scss'],
})

export class OneEventLayoutPage {
  // Dynamic parameters for this component's route: /example-params/:first/:second
  routeParams: Params;
  mapOptions: MapOptions;
  mapMarkers: Marker[];

  // Query parameters found in the URL: /example-params/one/two?query1=one&query2=two
  queryParams: Params;
  events: Event;
  isAdmin: boolean;
  User: User;
  viewMap:Boolean;
  Msg:Msg;
  UserPosition;
  datas:Msg[];
  eventContent: string;


  constructor(private http: HttpClient, private router: Router, private auth: AuthService, private activatedRoute: ActivatedRoute,private geolocation: Geolocation,private wamp: WampService, private wampt: WampService) {
    this.mapOptions = {
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        )
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524),
      maxZoom:19
    }
    this.Msg = new Msg();
  }

  showChat() {
  // Call the remote procedure and log the results
  this.wamp.call('com.herokuapp.manevent.AllPreviousMsg').subscribe(data =>
    {
      let Eventid=this.events['_id'];
      this.datas = data;
      this.datas=this.datas.filter(function(x){return x.event===Eventid});
      this.datas.sort(function(a, b){
        return +new Date(a['createdAt']) - +new Date(b['createdAt'])
      });
      console.log(data);
    });
  this.wamp
    .listen('com.herokuapp.manevent.1')
    .subscribe(event => {
      this.datas.push(event['savedMessage']);
        console.log('message recieved !', event['savedMessage'])
      });
 }

 sendMesg() {
   this.Msg.user=this.User['_id'];
   this.Msg.text=this.eventContent;
   this.Msg.event=this.events['_id'];
   this.wamp.call('com.herokuapp.manevent.createMsg', [],this.Msg).subscribe();

  }


  ionViewWillEnter() {
    this.viewMap=true;
    this.isAdmin = false;
    this.GetData();
  }
  GetMap(){
    this.viewMap=!this.viewMap;
  }
  onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
  }
  // Store parameter values on URL changes
  getRouteParams() {

    // Route parameters
    this.activatedRoute.params.subscribe(params => {
      this.routeParams = params;
    });

    // URL query parameters
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
    });
  }
  GetUser() {
    return this.auth.getUser().subscribe(result => {
      this.User = result;
    });
  }
  CheckMember() {
    this.GetUser();
    if (this.User!=null) {
      return this.isAdmin = this.events['admin'] === this.User['_id']
    }

  }
  delete() {
    this.getRouteParams();
    const AddUserURL = '/api/events/' + this.routeParams['id'];
    return this.http.delete(AddUserURL, { responseType: 'text' }).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      }
    });
  }
  GetPosition(){
    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
      this.UserPosition=[coords.latitude,coords.longitude];
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  GetData() {
    this.getRouteParams();
    this.GetPosition();
    const AddUserURL = '/api/events/' + this.routeParams['id'];
    return this.http.get<Event>(AddUserURL).subscribe(result => {
      this.events = result;
      this.CheckMember();
      this.mapMarkers = [
        marker(this.events['location']['coordinates'].reverse(), { icon: eventIcon }),
        marker(this.UserPosition,{icon: personIcon})
      ];
      this.mapOptions.center=(this.events['location']['coordinates']);



    }, err => { }
    )
  };


}
