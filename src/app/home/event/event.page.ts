import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

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
    let params = new HttpParams()
    .set("date",form.form.value["dataValue"])
    .set("adress",form.form.value["cityName"])
    this.GetData(params);
    params.delete("date");
    params.delete("adress");
  }
  member(id){
    const MemberURL='/api/events/'+id+'/member'
    return this.http.post(MemberURL,'').subscribe();
  }
  
  authenticated(){
    return this.auth.isAuthenticated().subscribe(isAuthenticated => {
      this.isAuth=isAuthenticated;
    });    
  }
  GetData(params=new HttpParams()){
    const AddUserURL = '/api/events';
    return this.http.get<Event[]>(AddUserURL,{params}).subscribe(result => {
      let Allevents = result['data'];
      this.events= Allevents.filter(function(x){return new Date(x.date)>=new Date()});
      this.events.sort(function(a, b){
        return +new Date(a.date) - +new Date(b.date);
      })
  },err=>{}
  )};
  


}
