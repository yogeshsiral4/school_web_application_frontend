import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teachers } from './classes/Teachers';
@Injectable({
  providedIn: 'root'
})
export class TeachersdataService {
  private bsaeUrl = "http://localhost:9192/home";
  constructor(private httpClient:HttpClient) { }

  public getTeacherData(teachers : Teachers){
    return this.httpClient.get("http://localhost:9192/home/teachers");
  }
}
