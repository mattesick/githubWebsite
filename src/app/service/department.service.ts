import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {environment} from "./../../environments/environment"
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { 

    
  }
  
  getDepartment(id:string):Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.API_URL + 'getDepartmentById/' + id).subscribe((data) => resolve(data));
    })    
  }

}
