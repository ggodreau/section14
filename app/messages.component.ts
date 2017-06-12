import { Component } from '@angular/core';
// note you still need to import the service in Ang2
import { MessagesService } from './messages.service';

@Component({
    selector: 'messages',
    template: `
        <h1>Messages</h1>
        <input type="text" [(ngModel)]="title" />
        <ul>
            <li *ngFor="let m of messages">{{ m }}</li>
        </ul>
    `

})
export class MessagesComponent {
    messages;
    title = "Hello, world!";


    constructor(service: MessagesService){
        this.messages = service.getMessages();
    }


}
