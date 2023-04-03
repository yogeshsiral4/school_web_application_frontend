import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private cookie : CookieService) { }
  IsLoggedIn(){
    return !!this.cookie.get('Token');
  }
}
