import { Component, OnInit, Query } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {environment} from "./../../environments/environment"
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchForm;
  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.searchForm = this.formBuilder.group({
      query: ''
    });
  }
  //font awesome icons
  faBars = faBars;
  faSearch = faSearch;

  
  ngOnInit(): void {

  }
  
  menu() {
    var y = document.getElementById("nav-bar");
    var x = document.getElementById("myLinks");
    if (x.style.color === "black") {
      y.style.maxHeight = "0px";
      x.style.color = "white";
      y.style.border = "none";

    } else {
      y.style.maxHeight = "2000px";
      x.style.color = "black";
      y.style.borderBottom = "1px solid black";
    }
  }
  search({ query }) {
    this.router.navigate(["Search/" + encodeURIComponent(query)]);
  }
  isShowSearch() {
     return this.route.snapshot["_routerState"].url.includes("Search");
  }
  isLogin() {
    return this.route.snapshot["_routerState"].url.includes("login");
 }
}
