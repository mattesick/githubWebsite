import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {


  }

  getProjectsByPersonId(id: string):Promise<any> {
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getProjectsByPersonId/' + id).subscribe(data => resolve(data)));
  }
  getProjectById(id: string):Promise<any> {
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getProjectById/' + id).subscribe(data => resolve(data)));
  }
  getAllProjects():Promise<any> {
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getAllProjects').subscribe(data => resolve(data)));
  }
  getFirstXProjects(x:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getFirstXProjects/' + x).subscribe(data => resolve(data)))
  }
  getRoleById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getRoleById/' + id).subscribe(data => resolve(data)));
  }
}
