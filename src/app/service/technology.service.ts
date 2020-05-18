
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http: HttpClient) { 

    
  }
  
  getTechnologyById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/getTechnologyById/' + id).subscribe(data => resolve(data)));
  }

}
