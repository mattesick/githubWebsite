import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/projects.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { TechnologyService } from '../service/technology.service';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private employeeService: EmployeeService, private route: ActivatedRoute, private pageScrollService: PageScrollService,@Inject(DOCUMENT) private document: Document) { }

  project: Project = new Project({});
  employees: Employee[] = [];

  ngOnInit(): void {
    this.getProject();
    
  }
  async getProject(){
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = new Project(await this.projectService.getProjectById(projectId));

    let persons = await this.employeeService.getPersonsByProjectId(projectId);
    persons.forEach(employee => {
      this.employees.push(new Employee(employee));

    });
    
  }
  scroll(to): void{
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: to,
      duration: 500
    });
  }
}
