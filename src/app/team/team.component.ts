import { Component, OnInit } from '@angular/core';
import {TeamService} from "../service/team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService:TeamService) {
     
  }

  ngOnInit(): void {
    console.log("consloing", this.teamService.getTeam());
  }

}
