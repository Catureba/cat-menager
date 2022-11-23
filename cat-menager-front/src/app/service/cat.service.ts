import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CatService {
  apiUrl = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll(){
   return this.httpClient.get(`${this.apiUrl}/list`);
  }


}
