import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>App</h1>
    <messages></messages>
    <ul>
        <li><a routerLink="">Home</a></li>
        <li><a routerLink="login">Login</a></li>
        <li><a routerLink="messages">Messages</a></li>
        <li><a routerLink="photos">Photos</a></li>
        <!-- this passes a parameter string -->
        <li><a [routerLink]="['photos', 1]">Photo Details</a></li>
    </ul>
    <!-- this is an example of imperative routing -->
    <button (click)="onClick()">Click Me!</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 

    constructor(private _router: Router){
    }

    onClick(){
        console.log("clicked!");
        this._router.navigate(['photos', 2]);
    }


}
