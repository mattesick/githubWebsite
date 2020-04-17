import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

export interface Team {
  name: string,
  desc: string
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  
  getTeam(): Observable<Team> {
    return this.http.get<Team>('http://localhost:3000/getTeamById/1');
  }
}
