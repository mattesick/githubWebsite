import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/projects.model';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }
  allProjects: Project[] = [];
  ngOnInit(): void {
    this.getProjects();
  }
  async getProjects(){
    let projects = await this.projectService.getAllProjects();
      projects.forEach(project => {
        this.allProjects.push(new Project(project))
    });
  }
  
}
