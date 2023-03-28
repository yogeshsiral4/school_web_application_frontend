import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Leaves } from './classes/leaves';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  
  token = this.cookie.get("Token"); 

  constructor(private http : HttpClient, private cookie : CookieService) { }

  leave(leaves : Leaves): Observable<any>{
    return this.http.post<any>("http://localhost:9193/leave/apply",leaves);
  }

  public getLeavesData(leaves : Leaves){
    
    return this.http.get("http://localhost:9193/leave/all/leave");
  }

  }
