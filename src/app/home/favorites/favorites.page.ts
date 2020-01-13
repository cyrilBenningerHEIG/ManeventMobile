import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  events: Event[];
  User: User;
  NewEvent: Event;
  EventError: boolean;
  constructor(private http: HttpClient, private router: Router,private auth: AuthService) {}

  ngOnInit() {
    this.GetData();
    

  }
  GetUser(){
    return this.auth.getUser().subscribe(result=>{
      this.User=result;
    });
  }
  GetData(){
    const AddUserURL = '/api/events';
    this.GetUser();
    console.log(this.User);
    

    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      let Allevents = result['data'];
      console.log(Allevents);
      this.events= Allevents.filter(function(x){return new Date(x.date)>=new Date()});
      console.log(this.events);
      console.log(this.events['0']['member']);
      this.events=this.events.filter(function(x){
        let member=x['member'];
        member.forEach(element => {
          element===""
        });
      })
      this.events.sort(function(a, b){
        return +new Date(a.date) - +new Date(b.date);
      })
    }, error => {});
  }
}
