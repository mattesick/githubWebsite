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
  allTeams: Team[] = [];

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((data:any) => {
      data.forEach(team => {
        this.allTeams.push(new Team(team))
      });
      console.log(this.allTeams)
    });
  }

}
