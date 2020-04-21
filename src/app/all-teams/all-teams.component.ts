import { Component, OnInit } from '@angular/core';
import { TeamService } from "../service/team.service";
import { DepartmentService } from "../service/department.service";
import { Team } from '../models/team.model';
import { Department } from '../models/department.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

  constructor(private teamService: TeamService, private route: ActivatedRoute) {

  }
  team: Team = new Team({});
  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(teamId).subscribe(data => { this.team = new Team(data); console.log(this.team) });
  }

}
