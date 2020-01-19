import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../../models/event';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { map } from 'rxjs/operators';

import { WampService } from '../../../wamp.service';



@Component({
  selector: 'app-one-event-layout',
  templateUrl: './one-event-layout.page.html',
  styleUrls: ['./one-event-layout.page.scss'],
})

export class OneEventLayoutPage implements OnInit {
  // Dynamic parameters for this component's route: /example-params/:first/:second
  routeParams: Params;

  // Query parameters found in the URL: /example-params/one/two?query1=one&query2=two
  queryParams: Params;
  events:Event;


  constructor(private http: HttpClient, private router: Router,private auth: AuthService,private activatedRoute: ActivatedRoute,private wamp: WampService) { }

  ngOnInit() {
    this.GetData();

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
  GetData(){
    this.getRouteParams();
    const AddUserURL = '/api/events/'+this.routeParams['id'];
    return this.http.get<Event>(AddUserURL).subscribe(result => {
      this.events=result;
      console.log(this.events)

  },err=>{}
  )};


}
