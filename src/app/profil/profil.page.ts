import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
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
  events: Event[];
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.GetUser();

  }
  GetUser() {
    return this.auth.getUser().subscribe(result => {
      console.log(result);
      this.User = result;
      this.GetData();
    });
  }

  redirectToUpdateForm() {
    console.log("super2");
  }

  deleteUser(id) {
    console.log("Michel Dinars");
    const AddUserURL = '/api/users/'+id;
     return this.http.delete(AddUserURL, { responseType: 'text' }).subscribe({
       next: () => {
         this.logout();
         this.router.navigateByUrl('');
       },
  })
  }

  deleteEvent(id) {
     const AddUserURL = '/api/events/' + id;
     return this.http.delete(AddUserURL, { responseType: 'text' }).subscribe({
       next: () => {
         this.router.navigateByUrl('');
       },
  })
}
  logout(){
    this.auth.logOut();
    this.router.navigateByUrl('/');
  }
  

  // deleteEvent() {
  //   this.getRouteParams();
  //   const AddUserURL = '/api/events/' + this.routeParams['id'];
  //   return this.http.delete(AddUserURL, { responseType: 'text' }).subscribe({
  //     next: () => {
  //       this.router.navigateByUrl('/profil');
  //     }
  //   });
  //

  GetData() {
    const AddUserURL = '/api/events';
    return this.http.get<Event[]>(AddUserURL).subscribe(result => {
      let Allevents = result['data'];
      this.events = Allevents.filter(function (x) { return new Date(x.date) >= new Date() });
      this.events = this.events.filter(x => x['admin'] == this.User['_id']);
      this.events.sort(function (a, b) {
        return +new Date(a.date) - +new Date(b.date);
      })
    }, error => { });
  }

}
