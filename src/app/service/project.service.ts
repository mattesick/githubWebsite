import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {environment} from "./../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {


  }

  getProjectsByPersonId(id: string):Promise<any> {
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getProjectsByPersonId/' + id).subscribe(data => resolve(data)));
  }
  getProjectById(id: string):Promise<any> {
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getProjectById/' + id).subscribe(data => resolve(data)));
  }
  getAllProjects():Promise<any> {
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getAllProjects').subscribe(data => resolve(data)));
  }
  getFirstXProjects(x:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getFirstXProjects/' + x).subscribe(data => resolve(data)))
  }
  getRoleById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getRoleById/' + id).subscribe(data => resolve(data)));
  }
}
