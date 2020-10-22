import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { FillformComponent } from './profile/fillform/fillform.component';
import { UpdateformComponent } from './profile/updateform/updateform.component';
import { HeaderComponent } from './header/header.component';
import { Form1Component } from './profile/fillform/form1/form1.component';
import { Form2Component } from './profile/fillform/form2/form2.component';
import { Form3Component } from './profile/fillform/form3/form3.component';
import { Form4Component } from './profile/fillform/form4/form4.component';
import {CustomValidators} from './CustomValidators/CustomValidators';
import { FormhandlerService } from './profile/fillform/formhandler.service';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { AuthGuard } from './Guards/auth.guard';
import { UploadsComponent } from './profile/uploads/uploads.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AdmincontrolService } from './controller/admincontrol.service';
import { AlertComponent } from './profile/alert/alert.component';
import { MainformGuard } from './Guards/mainform.guard';
import { UpdatesGuard } from './Guards/updates.guard';
import { ProheaderComponent } from './profile/proheader/proheader.component';
import { ErrorlogService } from './errorlog.service';
import { ErrorsComponent } from './errors/errors.component';
import { PrintformComponent } from './profile/printform/printform.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    DashboardComponent,
    FillformComponent,
    UpdateformComponent,
    HeaderComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    VerifyemailComponent,
    UploadsComponent,
    AlertComponent,
    ProheaderComponent,
    ErrorsComponent,
    PrintformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [CustomValidators,
              FormhandlerService,
              AuthGuard,
              AdmincontrolService,
              MainformGuard,
              UpdatesGuard,
              ErrorlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
