import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { 

    
  }
  
  getPersonById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getPersonById/' + id).subscribe(data => resolve(data)));
  }
  getPersonsBySkill(skill:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getPersonsBySkill/' + skill).subscribe(data => resolve(data)));
  }
  getPersonsWithArrayOfIds(ids:string[]):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getPersonsWithArrayOfIds/' + JSON.stringify(ids)).subscribe(data => resolve(data)));
  }
  getPersonsByProjectId(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getPersonsByProjectId/' + id).subscribe(data => resolve(data)))
  }
  getPersonTechnologiesByPersonId(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getPersonTechnologiesByPersonId/' + id).subscribe(data => resolve(data)));
  }

}
