import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminroleGuard } from './adminrole.guard';
import { AuthGuard } from './auth.guard';
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
import { StudentroleGuard } from './studentrole.guard';
import { TeacherroleGuard } from './teacherrole.guard';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
    
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'student',
    component : StudentComponent,
    canActivate:[AuthGuard,StudentroleGuard]
  },
  {
    path : 'admin',
    component : AdminComponent,
    canActivate:[AuthGuard,AdminroleGuard]
  },
  {
    path : 'teacher',
    component : TeacherComponent,
    canActivate:[AuthGuard,TeacherroleGuard]
  },
  {
    path : 'admin/registration',
    component : RegistrationComponent,
    canActivate:[AuthGuard,AdminroleGuard]
  },
  {
    path : 'navbar',
    component : NavbarComponent,
    canActivate:[AuthGuard,AdminroleGuard]
  },
  {
    path :'admin/update',
    component : UpdateComponent,
    canActivate:[AuthGuard,AdminroleGuard]
  },
  {
    path :'studentnavbar',
    component : StudentnavbarComponent,
    canActivate:[AuthGuard,StudentroleGuard],
  },
  {
    path :'student/leave',
    component : LeaveComponent,
    canActivate:[AuthGuard,StudentroleGuard]
  },
  {
    path :'student/dropmessage',
    component : DropmessageComponent,
    canActivate:[AuthGuard,StudentroleGuard]
  },
  {
    path :'student/teacherdetails',
    component : TeacherdetailsComponent,
    canActivate:[AuthGuard,StudentroleGuard]
  },
  {
    path :'student/payfees',
    component : FeesComponent,
    canActivate:[AuthGuard,StudentroleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
