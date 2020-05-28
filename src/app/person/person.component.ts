import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { DepartmentService } from "../service/department.service";
import { Team } from '../models/team.model';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/projects.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private teamService: TeamService, private employeeService: EmployeeService, private projectService: ProjectService, private location: Location, private route: ActivatedRoute) { }
  team: Team = new Team({});
  employee: Employee = new Employee({});
  technologies: String[];
  employeeProjects: Project[] = [];

  ngOnInit(): void {
    this.getEmployee();
  }
  async getEmployee() {
    const employeeId = this.route.snapshot.paramMap.get('id');
    this.employee = new Employee(await this.employeeService.getPersonById(employeeId));
    this.technologies = await this.employeeService.getPersonTechnologiesByPersonId(this.employee.id);

    let projects = await this.projectService.getProjectsByPersonId(this.employee.id);
    projects.forEach(project => {
      this.employeeProjects.push(new Project(project));
    });
  }
}
