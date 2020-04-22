import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { DepartmentService } from "../service/department.service";
import { Team } from '../models/team.model';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private teamService: TeamService, private employeeService:EmployeeService, private location: Location, private route: ActivatedRoute) { }
  team: Team = new Team({});
  employee:Employee = new Employee({});
  skills: String[];

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
    const employeeId = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeamByEmployeeId(employeeId).subscribe(data => { this.team = new Team(data);});
    this.employeeService.getEmployeeById(employeeId).subscribe(data => { 
      this.employee = new Employee(data);
      console.log(this.route.snapshot.paramMap);
      this.skills = this.employee.skills.split(",");
    });
  }
}
