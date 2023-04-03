import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminroleGuard implements CanActivate {
  constructor(private cookie : CookieService,private route :Router){}
  canActivate() {
    let role = this.cookie.get("Role");
    if(role =="Admin"){
      return true;
    }
    alert("You are not authorized to this Page!!!");
    if(role =="Student"){
      this.route.navigate(['/student']);
    }
    else if(role == "Teacher"){
      this.route.navigate(['/teacher']);
    }
    return false;
  }
  
}
