import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  search(query: string):Promise<any>{
    return new Promise((resolve, reject) => this.http.get('http://localhost:8000/Search/' + query).subscribe(data => resolve(data)));
  }
}
