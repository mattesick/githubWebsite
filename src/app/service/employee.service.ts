import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { 

    
  }
  
  getEmployeeById(id:string){
    return this.http.get('http://localhost:8000/getEmployeeById/' + id);
  }
  getEmployeesBySkill(skill:string){
    return this.http.get('http://localhost:8000/getEmployeesBySkill/' + skill)
  }
  getEmployeesWithArrayOfIds(ids:string[]){
    return this.http.get('http://localhost:8000/getEmployeesWithArrayOfIds/' + ids);
  }

}
