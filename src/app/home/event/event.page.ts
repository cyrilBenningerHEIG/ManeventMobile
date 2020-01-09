import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  events: Event[];
  EventError: boolean;
  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.GetData();
  }

  onSubmit(form: NgForm){
    console.log(form.form.value["cityName"]); //form.location
    console.log(form.form.value["dataValue"]);

     if (form.invalid) {
       return;
      }

     if (cityName){
       return form.form.value["cityName"]
     }

     if (dataValue){
       return form.form.value["dataValue"]
     }
  }
  GetData(){
    const AddUserURL = '/api/events';
    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      this.events = result['data'];
    }, error => {});
  }


}
