import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DropmessageComponent } from './components/dropmessage/dropmessage.component';
import { FeesComponent } from './components/fees/fees.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentComponent } from './components/student/student.component';
import { StudentnavbarComponent } from './components/studentnavbar/studentnavbar.component';

import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherdetailsComponent } from './components/teacherdetails/teacherdetails.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'student',
    component : StudentComponent,
    pathMatch : 'full'
  },
  {
    path : 'admin',
    component : AdminComponent,
    pathMatch : 'full'
  },
  {
    path : 'teacher',
    component : TeacherComponent,
    pathMatch : 'full'
  },
  {
    path : 'admin/registration',
    component : RegistrationComponent,
    pathMatch : 'full'
  },
  {
    path : 'navbar',
    component : NavbarComponent,
    pathMatch : 'full'
  },
  {
    path :'admin/update',
    component : UpdateComponent,
    pathMatch : 'full'
  },
  {
    path :'studentnavbar',
    component : StudentnavbarComponent,
    pathMatch : 'full'
  },
  {
    path :'student/leave',
    component : LeaveComponent,
    pathMatch : 'full'
  },
  {
    path :'student/dropmessage',
    component : DropmessageComponent,
    pathMatch : 'full'
  },
  {
    path :'student/teacherdetails',
    component : TeacherdetailsComponent,
    pathMatch : 'full'
  },
  {
    path :'student/payfees',
    component : FeesComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
