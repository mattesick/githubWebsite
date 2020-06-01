import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {environment} from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {


  }

  sendMessage(body){
    console.log(body)
    console.log(this.http.post(environment.API_URL + "sendMail", body).subscribe((asd) => {
      console.log(asd)
    }))
  }
}
