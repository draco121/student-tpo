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
import { CocComponent } from './coc/coc.component';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { FillformComponent } from './profile/fillform/fillform.component';
import { UpdateformComponent } from './profile/updateform/updateform.component';
import { HeaderComponent } from './header/header.component';
import { Form1Component } from './profile/fillform/form1/form1.component';
import { Form2Component } from './profile/fillform/form2/form2.component';
import { Form3Component } from './profile/fillform/form3/form3.component';
import { Form4Component } from './profile/fillform/form4/form4.component';
import { Form5Component } from './profile/fillform/form5/form5.component';
import {CustomValidators} from './CustomValidators/CustomValidators';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    CocComponent,
    HelpComponent,
    ProfileComponent,
    DashboardComponent,
    FillformComponent,
    UpdateformComponent,
    HeaderComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [CustomValidators],
  bootstrap: [AppComponent]
})
export class AppModule { }
