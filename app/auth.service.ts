import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isLoggedIn = false;

    logIn(username, password){
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }
}
