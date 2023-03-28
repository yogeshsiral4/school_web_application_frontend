import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Messagebox } from 'src/app/classes/messagebox';
import { DropmessageService } from 'src/app/dropmessage.service';

@Component({
  selector: 'app-dropmessage',
  templateUrl: './dropmessage.component.html',
  styleUrls: ['./dropmessage.component.css']
})
export class DropmessageComponent implements OnInit  {

  email:string;
  message:string;

  messagebox : Messagebox = new Messagebox();

  ngOnInit() {
    this.email;
    this.message;
  }

  constructor(private messageservice : DropmessageService,private route : Router){}

  dropmessage(){
    this.messagebox.email=this.email;
    this.messagebox.message=this.message;

    this.messageservice.dropmessage(this.messagebox).subscribe(res => {
      if(res.status == 403) {
        alert("Message not send");
        this.ngOnInit();
      }else{
        alert("Mesasge send Successfully")
         this.route.navigate(['/student']);
      }
    }   
    )
  }
  

}
