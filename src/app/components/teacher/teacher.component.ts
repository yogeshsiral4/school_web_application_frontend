import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Leaves } from 'src/app/classes/leaves';
import { Messagebox } from 'src/app/classes/messagebox';
import { DropmessageService } from 'src/app/dropmessage.service';
import { LeaveService } from 'src/app/leave.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  private leaves = new Leaves();
  private messagebox = new Messagebox();

  public datal: any;
  public datam: any;
  constructor (private leaveservice: LeaveService ,private messageservice:DropmessageService){}
  ngOnInit() {
   this.getLeaves(this.leaves);
   this.getMessages(this.messagebox);
  }
   
  getLeaves(leaves : Leaves){
    this.leaveservice.getLeavesData(leaves).subscribe(  
      response => {  
        this.datal = response;  
      },  
      error => {  
        console.log("error while getting user Details");  
      }  
    );
  }

  getMessages(messagebox : Messagebox){
    this.messageservice.getMessageData(messagebox).subscribe(  
      response => {  
        this.datam = response;  
      },  
      error => {  
        console.log("error while getting user Details");  
      }  
    );
  }



  
  
 

}
