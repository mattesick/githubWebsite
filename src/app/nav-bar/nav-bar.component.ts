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

}
