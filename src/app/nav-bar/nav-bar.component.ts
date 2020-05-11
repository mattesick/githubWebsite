import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchForm;
  constructor(private formBuilder: FormBuilder,) { 
    this.searchForm = this.formBuilder.group({
      query: ''
    });
  }
   faEllipsis =  faEllipsisH;
   faSearch = faSearch;
  ngOnInit(): void {
  }
  menu() {
    var y = document.getElementById("nav-bar");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      y.style.width = "0px";
      x.style.display = "none";
      x.style.color = "white";
    } else {
      y.style.width = "15%";
      x.style.display = "block";
      x.style.color = "black";
    }
  }
  search({query}){
    console.log(query)
    window.location.href = "https://localhost:4200/Search/" + query;
  }

}
