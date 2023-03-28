import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateComponent } from './components/update/update.component';
import { StudentnavbarComponent } from './components/studentnavbar/studentnavbar.component';
import { LeaveComponent } from './components/leave/leave.component';
import { DropmessageComponent } from './components/dropmessage/dropmessage.component';
import { TeacherdetailsComponent } from './components/teacherdetails/teacherdetails.component';
import { TeachernavbarComponent } from './components/teachernavbar/teachernavbar.component';
import { FeesComponent } from './components/fees/fees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    RegistrationComponent,
    NavbarComponent,
    UpdateComponent,
    StudentnavbarComponent,
    LeaveComponent,
    DropmessageComponent,
    TeacherdetailsComponent,
    TeachernavbarComponent,
    FeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
