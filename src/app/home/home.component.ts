import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/projects.model';
import { FormBuilder } from '@angular/forms';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  expanded = false;
  faChevronDown = faChevronDown;
  showProjects: Project[] = [];
  mailForm;
  constructor(private messageService:MessageService, private formBuilder: FormBuilder,private projectService: ProjectService) {
    this.mailForm = this.formBuilder.group({
      mail:"",
      name:"",
      phone:""
    });
   }

  ngOnInit(): void {
    this.loadProjects();
  }
  async loadProjects() {
    let projects = await this.projectService.getFirstXProjects("5");
    projects.forEach(project => {
      this.showProjects.push(new Project(project));
    });

  }
  sendMessage(body){
    this.messageService.sendMessage(body)
  }
  dropDown() {
    let y = document.getElementById("container");
    let x = document.getElementById("drop");
    if (x.style.display === "flex") {
      y.style.height = "auto";
      x.style.display = "none";
    } else {
      y.style.height = "30vh";
      x.style.display = "flex";
    }
  }
  popUp() {
    let overlay = document.getElementById("visit");
    let box = document.getElementById("pop");
    if (!this.expanded) {
      box.style.maxHeight = "500px";
      overlay.style.display = "flex";
      this.expanded = true;
    } else {
      box.style.maxHeight = "0px";
      overlay.style.display = "none";
      this.expanded = false;
    }
  }
}
