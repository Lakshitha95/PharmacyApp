import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoading = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(public authService: AuthService) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
  }
  this.isLoading = true;
  this.authService.login(form.value.email, form.value.password);
    
  
 }
}
