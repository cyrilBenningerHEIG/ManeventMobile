import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  events: Event[];
  NewEvent: Event;
  EventError: boolean;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.GetData();
    

  }
  GetData(){
    const AddUserURL = '/api/events';
    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      this.events = result['data'];
    }, error => {});
  }
}
