import { Component,OnInit } from '@angular/core';
import { TeachersdataService } from 'src/app/teachersdata.service';
import { Teachers } from 'src/app/classes/Teachers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
