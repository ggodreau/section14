import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { LogInComponent } from './login.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';
import { routing } from './app.routing';
import { photosRouting } from './photos/photos.routing';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [ 
    BrowserModule,
    MessagesModule,
    PhotosModule,
    // order of route import matters, always
    // import child route tables before root
    photosRouting,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NotFoundComponent
  ],
  providers: [ 
    AuthService,
    AuthGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
