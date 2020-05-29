import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private cookieService:CookieService,public router: Router, private route: ActivatedRoute){
   
  }
  ngOnInit(): void {
    this.router.events.subscribe((UrlData:any) => {
      if(this.cookieService.get("Admin") != "true" && !UrlData.url.includes("login")){
        this.router.navigate(['/login']);
        //window.location.href = "http://localhost:4200/login";
      }
    })

  }
  title = 'githubWebsite';
}
