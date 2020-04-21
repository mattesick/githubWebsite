import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { 

    
  }
  
  getProjectsByUserId(id:string){
    return this.http.get('http://localhost:8000/getProjectsByUserId/' + id);
  }
  getProjectById(id:string){
    return this.http.get('http://localhost:8000/getProjectById/' + id)
  }

}
