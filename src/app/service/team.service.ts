import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { 

    
  }
  
  getTeam(id:string){
    return this.http.get('http://localhost:8000/getTeamById/' + id);
  }
  getEmployeesWithSkill(skill:string){
    return this.http.get('http://localhost:8000/getEmployeesBySkill/' + skill)
  }
  getTeamByEmployeeId(id:string){
    return this.http.get('http://localhost:8000/getTeamByEmployeeId/' + id);
  }
  getAllTeams(){
    return this.http.get('http://localhost:8000/getAllTeams/');
  }
}
