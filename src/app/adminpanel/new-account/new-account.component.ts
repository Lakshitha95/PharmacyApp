import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';


interface Role {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent {
  hide = true;

  position: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'employee', viewValue: 'Employee'}
  ];

  constructor(public authService: AuthService) { }

  ngonInit() {}

  onSignup(form: NgForm) {
    if (form.invalid){
      return;
    }
    this.authService.createUser(form.value.email, form.value.name, form.value.address, form.value.telephone, form.value.position, form.value.password);
  }

}