import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faChevronDown = faChevronDown;
  ngOnInit(): void {
  }
  dropDown() {
    var y = document.getElementById("container");
    var x = document.getElementById("drop");
    if (x.style.display === "flex") {
      y.style.height = "0px";
      x.style.display = "none";
    } else {
      y.style.height = "30vh";
      x.style.display = "flex";
    }
  }


}
