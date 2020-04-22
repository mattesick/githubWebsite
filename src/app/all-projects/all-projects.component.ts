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
    this.projectService.getAllProjects().subscribe((data:any) => {
      data.forEach(project => {
        this.allProjects.push(new Project(project))
      });
      console.log(this.allProjects);
    });
  }
  
}
