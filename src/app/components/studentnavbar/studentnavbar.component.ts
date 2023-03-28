import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-studentnavbar',
  templateUrl: './studentnavbar.component.html',
  styleUrls: ['./studentnavbar.component.css']
})
export class StudentnavbarComponent {
 constructor(private cookie : CookieService,private route : Router){}
 logout(){
  this.cookie.delete("Token");
  this.route.navigate(['/login']);
}
}
