import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registerdata } from './classes/registerdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  register(userData : Registerdata):Observable<any>{
    return(this.http.post<any>("http://localhost:9192/home/add",userData,{responseType:'text' as 'json'}));  
  }
}
