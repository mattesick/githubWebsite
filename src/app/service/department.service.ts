import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { 

    
  }
  
  getDepartment(id:string):Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8000/getDepartmentById/' + id).subscribe((data) => resolve(data));
    })    
  }

}
