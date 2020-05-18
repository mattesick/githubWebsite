import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { Team } from '../models/team.model';
import { DepartmentService } from "../service/department.service";
import { Department } from '../models/department.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

  constructor(private teamService: TeamService, private route: ActivatedRoute) {

  }
  allTeams: Team[] = [];

  ngOnInit(): void {
    this.getTeams();
  }
  async getTeams(){
    let teams = await this.teamService.getAllTeams()
      teams.forEach(team => {
        this.allTeams.push(new Team(team))
      });
  }

}
