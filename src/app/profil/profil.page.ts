import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { User } from '../models/';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  User: User;
  events:Event[];
  constructor(private http: HttpClient, private router: Router,private auth: AuthService) { }

  ngOnInit() {
    this.GetUser();
  }
  GetUser(){
    return this.auth.getUser().subscribe(result=>{
      console.log(result);
      this.User=result;
    });
  }
  GetData(){
    const AddUserURL = '/api/events';
    this.GetUser();    
    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      let Allevents = result['data'];
      this.events= Allevents.filter(function(x){return new Date(x.date)>=new Date()});
      let id = this.User['_id'];
      this.events=this.events.filter(x=>x['admin']==User['_id']);      
      this.events.sort(function(a, b){
        return +new Date(a.date) - +new Date(b.date);
      })
    }, error => {});
  }

}
