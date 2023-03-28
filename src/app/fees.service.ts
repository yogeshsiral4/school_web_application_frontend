import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fees } from './classes/fees';
import { Setemailfees } from './classes/setemailfees';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

  constructor(private http : HttpClient) { }

  setEmailId(emailfees : Setemailfees): Observable<any> {
    return this.http.post<any>("http://localhost:9195/fees/add",emailfees);
  }
  payFees(fees : Fees): Observable<any>{
    return this.http.post<any>("http://localhost:9195/fees/status",fees,{responseType:'text' as 'json'});
  }

}
