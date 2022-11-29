import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.model';


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
  
  postCat(cat: Cat){
    return this.httpClient.post(`${this.apiUrl}/post`, cat)
  }
  // create$ = (cat: Cat) => <Observable<any>>
  //   this.httpClient.post(`${this.apiUrl}/post`, cat)
      
      

}
