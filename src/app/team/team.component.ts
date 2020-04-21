import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { DepartmentService } from "../service/department.service";
import { Team } from '../models/team.model';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService, private employeeService: EmployeeService) {

  }
  team: Team = new Team({});
  employee: Employee;

  employeesWithSkills: Employee[] = [];
  //team:any = {};

  ngOnInit(): void {
    this.teamService.getTeam("1").subscribe(data => { this.team = new Team(data); console.log(this.team) });
    this.employeeService.getEmployeeById("1").subscribe(data => {
    this.employee = new Employee(data); console.log(this.employee)
    });
  }

}
