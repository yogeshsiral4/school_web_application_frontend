import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/classes/Teachers';
import { TeachersdataService } from 'src/app/teachersdata.service';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent implements OnInit{
  private teacher = new Teachers();  
  public data : any;
  constructor (private service:TeachersdataService){}

  ngOnInit(){
    this.getTeacherData(this.teacher);
  }


  public getTeacherData(teacher: Teachers){
    this.service.getTeacherData(teacher).subscribe(  
      response => {  
        this.data = response;  
      },  
      error => {  
        console.log("error while getting user Details");  
      }  
    );  
  }
}
