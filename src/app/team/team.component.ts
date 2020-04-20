import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
class Employee {
  id:string;
  name: string;
  lastName: string;
  skills: string;
  role: string;
  projects: string;
  constructor(data:any){
    this.name = data.name;
    this.lastName = data.lastName;
    this.skills = data.skills;
    this.role = data.role;
    this.projects = data.projects;
    this.id = data.id;
  }

  fullName() {
    return this.name + " " + this.lastName;
  }
}
class Team {
  initEmployees: Function
  name: string;
  desc: string;
  id: string;
  employees: Employee[];
  constructor(data: any) {
    this.name = data.name;
    this.initEmployees = () => {
      this.employees = [];
      if(data.employees){
        data.employees.forEach(employee => {
          this.employees.push(new Employee(employee))
        });
      }
    }
    this.initEmployees();
   

  }

  fullName() {
    return this.name;
  }
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService) {

  }
  //team: Team = new Team({});
  team:any = {};

  ngOnInit(): void {
    //this.teamService.getTeam("1").subscribe(data => { this.team = new Team(data) });
    this.teamService.getTeam("1").subscribe(data => { this.team = data });
  }

}
