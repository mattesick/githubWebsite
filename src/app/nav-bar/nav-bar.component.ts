import { Component, OnInit, Query } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {environment} from "./../../environments/environment"

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
  faEllipsis = faEllipsisH;
  faSearch = faSearch;
  
  ngOnInit(): void {
  }
  
  menu() {
    var y = document.getElementById("nav-bar");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      y.style.width = "0%";
      x.style.display = "none";
      x.style.color = "white";
      y.style.border = "none";

    } else {
      y.style.width = "15%";
      x.style.display = "block";
      x.style.color = "black";
      y.style.borderRight = "1px solid black";
      y.style.borderBottom = "1px solid black";
    }
  }
  search({ query }) {
    console.log(query)
    window.location.href = environment.WEBSITE_URL + "Search/" + encodeURIComponent(query);
  }
  isShowSearch() {
     return this.route.snapshot["_routerState"].url.includes("Search");
  }
}
