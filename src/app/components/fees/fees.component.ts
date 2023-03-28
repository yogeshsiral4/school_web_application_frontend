import { Component, OnInit } from '@angular/core';
import { Fees } from 'src/app/classes/fees';
import { Setemailfees } from 'src/app/classes/setemailfees';
import { FeesService } from 'src/app/fees.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  
  fees :Fees= new Fees();
  emailfees:Setemailfees=new Setemailfees();

  email:string;
  upiId:string;
  upiPin:bigint;

  constructor(private feesservice : FeesService){}

  ngOnInit(){
  
  }

  setEmailId(){
    this.emailfees.email=this.email;
    console.log(this.emailfees)
    this.feesservice.setEmailId(this.emailfees).subscribe()
  }
  payfees(){
    this.fees.email=this.email;
    this.fees.upiID=this.upiId;
    this.fees.upiPin=this.upiPin;
    this.feesservice.payFees(this.fees).subscribe(res => {
      if(res.status == 403) {
        alert("Unable to pay");

      }else{
        alert("Payment Successfully");
      }

      })

    }
  };


