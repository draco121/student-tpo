import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocComponent } from './coc/coc.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { FillformComponent } from './profile/fillform/fillform.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateformComponent } from './profile/updateform/updateform.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
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
    path: 'codeofconduct',
    component: CocComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
        path: 'fillform',
        component: FillformComponent
      },
      {
        path: 'updateform',
        component: UpdateformComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
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
