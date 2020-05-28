import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/projects.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  faChevronDown = faChevronDown;
  showProjects: Project[] = [];
  ngOnInit(): void {
    this.loadProjects();
  }
  async loadProjects() {
    let projects = await this.projectService.getFirstXProjects("5");
    projects.forEach(project => {
      this.showProjects.push(new Project(project));
    });

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


}
