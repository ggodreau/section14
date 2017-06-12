import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <messages></messages>
    <ul>
        <li><a routerLink="">Home</a></li>
        <li><a routerLink="messages">Messages</a></li>
        <li><a routerLink="photos">Photos</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
