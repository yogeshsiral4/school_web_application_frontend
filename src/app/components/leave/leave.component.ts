import { Component } from '@angular/core';
import { Leaves } from 'src/app/classes/leaves';
import { LeaveService } from 'src/app/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  email:string;
  fromDate : Date;
  toDate:Date;
  leaveType:string;

  leaves : Leaves = new Leaves();
 
  constructor(private leaveservice: LeaveService){}

  leave(){
    
    this.leaves.email = this.email;
    this.leaves.toDate = this.toDate;
    this.leaves.fromDate = this.fromDate;
    this.leaves.leaveType = this.leaveType;
    console.log(this.leaves)
    console.log(this.leaves.fromDate)

     
    this.leaveservice.leave(this.leaves).subscribe()  

  }
}
