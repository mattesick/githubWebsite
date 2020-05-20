import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  drop = faCaretDown;
  exit = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  show(form): void {
    var x = document.getElementById(form);

    if (x.querySelector('form').style.maxHeight == "1000px") {
      x.querySelector('form').style.maxHeight = "0px";
      x.querySelector('.exit').classList.add("hidden");
      x.querySelector('.drop').classList.remove("hidden");
    } else {
      x.querySelector('form').style.maxHeight = "1000px";
      x.querySelector('.exit').classList.remove("hidden");
      x.querySelector('.drop').classList.add("hidden");
    }
  }


}
