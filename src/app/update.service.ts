import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Updatedata } from './classes/updatedata';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  update(update : Updatedata): Observable<any>{
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    return this.http.put<any>("http://localhost:9192/home/update",update,{headers,responseType:'text' as 'json'});
  }
}
