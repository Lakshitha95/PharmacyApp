import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }

}
