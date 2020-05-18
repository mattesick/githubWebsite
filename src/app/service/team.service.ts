import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { 

    
  }
  
  getTeamById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getTeamById/' + id).subscribe(data => resolve(data)));
  }
  getPersonsWithSkill(skill:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getPersonsBySkill/' + skill).subscribe(data => resolve(data)));
  }
  getTeamByPersonId(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getTeamByPersonId/' + id).subscribe(data => resolve(data)));
  }
  getAllTeams():Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getAllTeams/').subscribe(data => resolve(data)));
  }
}
 