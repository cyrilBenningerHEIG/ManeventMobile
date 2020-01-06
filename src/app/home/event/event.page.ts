import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';
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
    console.log("salut");
  }
  GetData(){
    const AddUserURL = '/api/events';
    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      this.events = result['data'];
    }, error => {});
  }

}
