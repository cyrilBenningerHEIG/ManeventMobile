import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  newUser: User;
  userError: boolean;
  constructor(private http: HttpClient,private router: Router) {
    this.newUser = new User();
  }
  
  onSubmit(form: NgForm) {
    // Do not do anything if the form is invalid.
    if (form.invalid) {
      return;
    }

    const AddUserURL = '/api/users';
    this.http.post(AddUserURL, this.newUser).subscribe({
      next: () => {
      this.router.navigateByUrl('/login');
    },
    error: err => {
      this.userError = true;
      console.warn(`Authentication failed: ${err.message}`);
    }
  });
      
    
  }
}


