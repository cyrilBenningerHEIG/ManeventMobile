import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { User } from '../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage {
  newUser: User;
  userError: boolean;
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    this.newUser = new User();
   }
   ngOnInit() {
    this.GetUser();

  }
  GetUser() {
    return this.auth.getUser().subscribe(result => {
      console.log(result);
      this.newUser = result;
      
    });
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
