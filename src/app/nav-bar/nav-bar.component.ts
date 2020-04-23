import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
   faEllipsis =  faEllipsisH;
  ngOnInit(): void {
  }
  menu() {
    var y = document.getElementById("nav-bar");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }

}
