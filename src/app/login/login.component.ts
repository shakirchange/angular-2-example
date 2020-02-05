import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'myApp';

  username: string  = "";
  password: string = "";
  constructor(private router: Router){

  }
  loginForm() : void {
    console.log("inside the fun")
    let a:string = this.username;
    let b:string = this.password;

    if((a && b) && a == b){
      this.router.navigateByUrl("/home")
    }else{
      alert("Username & Password Mismatch");
    }
  }
}



