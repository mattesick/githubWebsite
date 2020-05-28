import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { DepartmentService } from "../service/department.service";
import { Team } from '../models/team.model';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService, private route: ActivatedRoute) {

  }
  team: Team = new Team({});
  employee: Employee;

  employeesWithSkills: Employee[] = [];
  //team:any = {};

  ngOnInit(): void {
   this.getTeam();
  }
  async getTeam(){
    const teamId = this.route.snapshot.paramMap.get('id');
    this.team = new Team(await this.teamService.getTeamById(teamId));
  }
}
