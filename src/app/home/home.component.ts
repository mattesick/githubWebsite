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
  showProjects:Project[] = [];
  ngOnInit(): void {
    this.loadProjects();
  }
  loadProjects(){
    this.projectService.getFristXProjects("5").subscribe((data:any) => {
      data.forEach(project => {
        this.showProjects.push(new Project(project));
      });
      console.log(data)
    })
  }
  dropDown() {
    let y = document.getElementById("container");
    let x = document.getElementById("drop");
    if (x.style.display === "flex") {
      y.style.height = "0px";
      x.style.display = "none";
    } else {
      y.style.height = "30vh";
      x.style.display = "flex";
    }
  }


}
