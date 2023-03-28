import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './classes/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor(private http : HttpClient, private cookie : CookieService) {
   
  }


  login(user : User) : Observable<any> {
    let resp = this.http.post<any>("http://localhost:9192/home/login",user,{responseType:'text' as 'json'});
    resp.subscribe(data =>this.cookie.set('Token',data));
    return this.http.post<any>("http://localhost:9192/home/login",user,{responseType:'text' as 'json'});
  }
}
