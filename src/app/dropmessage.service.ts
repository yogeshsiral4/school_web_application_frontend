import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Messagebox } from './classes/messagebox';

@Injectable({
  providedIn: 'root'
})
export class DropmessageService {
  
  token = this.cookie.get("Token")
  constructor(private http : HttpClient , private cookie : CookieService) { }

  dropmessage(messagebox:Messagebox): Observable<any>{
    return this.http.post<any>("http://localhost:9194/message/send",messagebox);
  }

  getMessageData(messagebox : Messagebox){
    
    return this.http.get("http://localhost:9194/message/allmessage");
  }
}
