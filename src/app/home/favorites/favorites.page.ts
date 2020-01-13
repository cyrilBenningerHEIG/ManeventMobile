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
  CheckMember(event){
    console.log(this.User);
    return event['member']==this.User['name']
  }
  GetData(){
    const AddUserURL = '/api/events';
    this.GetUser();
    
    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      let Allevents = result['data'];
      this.events= Allevents.filter(function(x){return new Date(x.date)>=new Date()});
      let id = this.User['_id'];
      this.events=this.events.filter(x=>x['member'].includes(id));      
      this.events.sort(function(a, b){
        return +new Date(a.date) - +new Date(b.date);
      })
    }, error => {});
  }
}
