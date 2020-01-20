import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router){}

    canActivate(){
      let loggedIn = Math.random() < 0.5;

      if (!loggedIn){
        alert("You didn't login... Back to the Login page for you");
        this.router.navigate(["/login"]);
      }

      return loggedIn;
    }

}
