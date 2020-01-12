import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  events: Event[];
  isAuth: boolean;
  EventError: boolean;
  constructor(private http: HttpClient, private router: Router,private auth: AuthService) {
    
  }

  ngOnInit() {
    this.GetData();    
    this.authenticated();
  }

  onSubmit(form: NgForm){
    console.log(); //form.location
    let params = new HttpParams()
    .set("date",form.form.value["dataValue"])
    .set("adress",form.form.value["cityName"])
    this.GetData(params);
    params.delete("date");
    params.delete("adress");

  }
  
  authenticated(){
    return this.auth.isAuthenticated().subscribe(isAuthenticated => {
      this.isAuth=isAuthenticated;
    });
    
  }
  GetData(params=new HttpParams()){
    const AddUserURL = '/api/events';
    return this.http.get<Event[]>(AddUserURL,{params}).subscribe(result => {
      this.events = result['data'];
    }, error => {});
  }


}
