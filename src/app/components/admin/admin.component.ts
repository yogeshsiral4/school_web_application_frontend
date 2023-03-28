import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private cookie : CookieService){}

}
