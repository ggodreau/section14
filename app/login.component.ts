import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    template: 
        `<h1>Login Page</h1>
        <button (click)="onClick()">Log In</button>
        <div *ngIf="isLoggedIn">
            <span>You are now logged in<br></span>
            <span>go to <a routerLink="../messages">messages</a></span>
        </div>
        `
    })

export class LogInComponent { 
    isLoggedIn = false;

    constructor(private _authService: AuthService){
    //        authService.logIn("dummyUser", "dummyPass");    
    //    console.log("after = ", authService.isLoggedIn);
    }

    onClick(){
        console.log("before = ", this._authService.isLoggedIn);
        this._authService.logIn("dummyUser", "dummyPass");    
        console.log("after = ", this._authService.isLoggedIn);
        this.isLoggedIn = this._authService.isLoggedIn;
    }
}

