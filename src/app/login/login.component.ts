import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { FormBuilder } from '@angular/forms';
import {environment} from "./../../environments/environment"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private cookieService:CookieService,private formBuilder: FormBuilder, public router: Router) {
    this.loginForm = this.formBuilder.group({
      uname:"",
      psw:""
    });
   }

  ngOnInit(): void {
    this.cookieService.set("Admin", "false");
  }
  login({uname, psw}){
    console.log(uname, psw)
    if(uname == "Admin" && psw == "rockandroll"){
      this.cookieService.set("Admin", "true");
      this.router.navigate(['/']);
    }
  }

}
