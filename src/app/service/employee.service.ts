import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {environment} from "./../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { 

    
  }
  
  getPersonById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getPersonById/' + id).subscribe(data => resolve(data)));
  }
  getPersonsBySkill(skill:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getPersonsBySkill/' + skill).subscribe(data => resolve(data)));
  }
  getPersonsWithArrayOfIds(ids:string[]):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getPersonsWithArrayOfIds/' + JSON.stringify(ids)).subscribe(data => resolve(data)));
  }
  getPersonsByProjectId(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getPersonsByProjectId/' + id).subscribe(data => resolve(data)))
  }
  getPersonTechnologiesByPersonId(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getPersonTechnologiesByPersonId/' + id).subscribe(data => resolve(data)));
  }

}
