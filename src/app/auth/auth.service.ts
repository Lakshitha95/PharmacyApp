import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { bodyparser } from "express";
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from "./auth-data.model";



@Injectable({ providedIn: "root"})
export class AuthService {
    private isAuthenticated = false;
    private token: string;
    private authStatusListner = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) {}

    getToken() {
       return this.token; 
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getAuthStatusListner() {
        return this.authStatusListner.asObservable();
    }
    
    createUser(email: string, name: string, address: string, telephone: number, position: string, password: string) {
        const authData: AuthData = { email: email, name: name, address: address, telephone: telephone, position: position, password: password};
        this.http.post("http://localhost:3000/api/user/signup", authData)
         .subscribe(response  => {
             console.log(response);
         })

    }

    login(email: string, name: string, address: string, telephone: number, position: string, password: string) {
        const authData: AuthData = { email: email, name: name, address: address, telephone: telephone, position: position, password: password};
        this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
          .subscribe(response =>{
              const token = response.token;
              this.token = token;
              if (token) {
                this.isAuthenticated = true;
                this.authStatusListner.next(true);
                this.router.navigate(['/']);
              }  
          }); 
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListner.next(false);
        this.router.navigate(['/']);
    }
    
} 