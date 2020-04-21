import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { async } from '@angular/core/testing';
import 'rxjs/add/operator/map'

export interface Team {
  name: string,
  desc: string
}


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { 

    
  }
  
  getDepartment(id:string){
    return this.http.get('http://localhost:8000/getDepartmentById/' + id);
  }

}
