import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registerdata } from 'src/app/classes/registerdata';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  email : string = '';
  password : string = '';
  firstName: string=''; 
  lastName: string=''; 
  role !: string;
  subject : string='';

  roles: string[];
  
  userData : Registerdata = new Registerdata();


  constructor( private registerservice : RegisterService,private route : Router){
    this.roles = [
      '',
      'Student',
      'Teacher'
    ]
  }


  ngOnInit() {
    this.email = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.subject='';
  }

  registration(){
    this.userData.email = this.email;
    this.userData.password = this.password;
    this.userData.firstName = this.firstName;
    this.userData.lastName = this.lastName;
    this.userData.role = this.role;
    this.userData.subject = this.subject;

    this.registerservice.register(this.userData).subscribe(
      res =>{
        if(res.status == 403){
          alert("Unable to register data.. please try again!");
        }else{
          alert("Data Registered Successfully");
          this.route.navigate(['/admin']);
        }
    
      }
    )
  }

}
