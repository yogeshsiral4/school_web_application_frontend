import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 

 constructor(private cookie : CookieService,private route : Router){

 }
 logout(){
    this.cookie.delete("Token");
    this.route.navigate(['/login']);
 }

ngOnInit() {
  }
}
