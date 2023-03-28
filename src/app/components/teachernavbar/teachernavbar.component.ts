import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-teachernavbar',
  templateUrl: './teachernavbar.component.html',
  styleUrls: ['./teachernavbar.component.css']
})
export class TeachernavbarComponent {
  constructor(private cookie : CookieService,private route : Router){}
  logout(){
    this.cookie.delete("Token");
    this.route.navigate(['/login']);
  }
}
