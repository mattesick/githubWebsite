import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {environment} from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { 

    
  }
  
  getTeamById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getTeamById/' + id).subscribe(data => resolve(data)));
  }
  getPersonsWithSkill(skill:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getPersonsBySkill/' + skill).subscribe(data => resolve(data)));
  }
  getTeamByPersonId(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getTeamByPersonId/' + id).subscribe(data => resolve(data)));
  }
  getAllTeams():Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getAllTeams/').subscribe(data => resolve(data)));
  }
}
 