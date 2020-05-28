
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {environment} from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http: HttpClient) { 

    
  }
  
  getTechnologyById(id:string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get(environment.API_URL + 'getTechnologyById/' + id).subscribe(data => resolve(data)));
  }

}
