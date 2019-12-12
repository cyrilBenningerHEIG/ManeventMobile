import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { NotInValidatorDirective } from '../../not-in.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage, NotInValidatorDirective]
})
export class SignupPageModule {
  greeting: string;
  displayedGreeting: string;
    displayGreeting(form: NgForm) {
      if (form.valid) {
        this.displayedGreeting = this.greeting;
    console.log('Greeting displayed');
      }
  }
}
