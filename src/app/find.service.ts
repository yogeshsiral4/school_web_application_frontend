import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  getDetails(email: string){
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    return this.http.get("http://localhost:9192/home/"+email,{headers,responseType:'text' as 'json'});
  }
}
