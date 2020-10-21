import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from './Guards/auth.guard';
import { MainformGuard } from './Guards/mainform.guard';
import { UpdatesGuard } from './Guards/updates.guard';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './profile/alert/alert.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { FillformComponent } from './profile/fillform/fillform.component';
import { Form1Component } from './profile/fillform/form1/form1.component';
import { Form2Component } from './profile/fillform/form2/form2.component';
import { Form3Component } from './profile/fillform/form3/form3.component';
import { Form4Component } from './profile/fillform/form4/form4.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateformComponent } from './profile/updateform/updateform.component';
import { UploadsComponent } from './profile/uploads/uploads.component';
import { RegisterComponent } from './register/register.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'verifyemail',
    component: VerifyemailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivateChild:[AuthGuard],
    children : [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'alert',
        component: AlertComponent
      },
      {
        path: 'uploads',
        component: UploadsComponent,
        canActivate:[MainformGuard]
      },
      {
        path: 'fillform',
        component: FillformComponent,
        canActivate:[MainformGuard],
        canActivateChild:[MainformGuard],
        children:[
          {
            path:'form1',
            component: Form1Component
          },
          {
            path:'form2',
            component: Form2Component
          },
          {
            path: 'form3',
            component: Form3Component
          },
          {
            path: 'form4',
            component: Form4Component
          },
          {
            path: '**',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'updateform',
        component: UpdateformComponent,
        canActivate:[UpdatesGuard]
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  },
  {
      path: 'errors',
      component:ErrorsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo : 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
