import { NgModule }      from '@angular/core';
//CommonModule needed for *ngFor in messages component
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        MessagesComponent
    ],
    // exports defines components exposed via public API for module
    // only make the components whose elements you USE available here
    // to minimize API surface area
    exports: [
        MessagesComponent
    ],
    providers: [
        MessagesService
    ]
})
export class MessagesModule { }
