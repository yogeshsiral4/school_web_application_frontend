import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Updatedata } from 'src/app/classes/updatedata';
import { FindService } from 'src/app/find.service';
import { UpdateService } from 'src/app/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  updatedata : Updatedata=new Updatedata();
  datap : any;
  show !: boolean;
  email: string;
  role:string;
  password:string;
  firstName:string;
  lastName:string;
  subject:string;
  id!:bigint;

  roles: string[];

  constructor(private findService:FindService,private updateService:UpdateService,private route : Router){}

  ngOnInit() {
    this.roles = [
      '',
      'Student',
      'Teacher'
    ]
  }

  search(){
    this.email=this.email;
    this.findService.getDetails(this.email).subscribe(  
      response => {  
        this.datap = response; 
        if(this.datap!=null){
          this.show = true
          return this.show
        }
        else{
          this.show = false
          return this.show
        }
       
      }
    )
  }
  updateData(){
    this.updatedata.email=this.email;
    this.updatedata.password=this.password;
    this.updatedata.firstName=this.firstName;
    this.updatedata.lastName=this.lastName;
    this.updatedata.role=this.role;
    this.updatedata.subject=this.subject;
    this.updatedata.id=this.id

    this.updateService.update(this.updatedata).subscribe(
      response =>{
        console.log(response.status);
        if(response.status == 403){
          alert("Data has not been updated !");
        }else{
          alert("Data has been updated successfully!!!");
          this.route.navigate(['/admin']);
        }
      }
    )
  }

}



