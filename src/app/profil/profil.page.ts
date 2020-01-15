import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Event } from '../models/event';
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
  Event: Event;
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

}
