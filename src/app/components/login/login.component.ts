import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';
  role : string = '';

  user : User = new User();

  roles : string[];

  constructor(private loginService : LoginService, private route : Router,private cookie:CookieService ) { 
    this.roles = [
      '',
      'Admin',
      'Student',
      'Teacher'
    ]
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.role='';
  }

  login() {
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.role = this.role;

    this.loginService.login(this.user).subscribe(res => {
      if(res.status == 403) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else{
        
        alert("Login Successful !!!");
      

        if(this.cookie.get('Role') === 'Student') {
          this.route.navigate(['/student']);
        } 

        if( this.cookie.get('Role') == 'Admin') {
          this.route.navigate(['/admin']);
        }

        if( this.cookie.get('Role') == 'Teacher') {
          this.route.navigate(['/teacher']);
        }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
