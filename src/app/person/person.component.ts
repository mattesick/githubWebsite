import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  team:any = {};

  ngOnInit(): void {
    //this.teamService.getTeam("1").subscribe(data => { this.team = new Team(data) });
    this.teamService.getTeam("1").subscribe(data => { this.team = data });
  }

}
