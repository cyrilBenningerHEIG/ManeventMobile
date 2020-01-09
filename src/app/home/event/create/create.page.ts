import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Event } from '../../../models/event';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  newEvent: Event;
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    this.newEvent = new Event();
  }
  onSubmit(form: NgForm) {
    // Do not do anything if the form is invalid.
    if (form.invalid) {
      console.log("ta race");
    }

    const AddUserURL = '/api/events';
    
    this.http.post(AddUserURL, this.newEvent).subscribe({
      next: () => {
        console.log(this.newEvent);
      },
      error: err => {
        //this.userError = true;
        console.warn(`Authentication failed: ${err.message}`);
      }
    });


  }


}
