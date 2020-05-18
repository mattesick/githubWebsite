import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/projects.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { TechnologyService } from '../service/technology.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private technologyService: TechnologyService, private projectService: ProjectService, private employeeService: EmployeeService, private route: ActivatedRoute) { }

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

}
