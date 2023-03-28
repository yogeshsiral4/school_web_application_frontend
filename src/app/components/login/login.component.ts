import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
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

  constructor(private loginService : LoginService, private route : Router ) { 
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
      

        if(this.role == 'Student') {
          this.route.navigate(['/student']);
        } 

        if( this.role == 'Admin') {
          this.route.navigate(['/admin']);
        }

        if( this.role == 'Teacher') {
          this.route.navigate(['/teacher']);
        }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
