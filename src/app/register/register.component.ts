import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,NgForm, Form, FormGroup, AbstractControl } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted:boolean =false;
   registrationForm:FormGroup;
  constructor(private fb:FormBuilder)
  {}
  
  
   ngOnInit(){this.registrationForm =this.fb.group({
   firstName: ['',Validators.required],
   lastName: ['',Validators.required],
   Enrollment: ['',Validators.required],
   Branch: ['',Validators.required],
   gradYear: ['',Validators.required],
   Email: ['',[Validators.required,Validators.email]],
   Contact:['',Validators.required],
   Password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
   confirmPassword: ['',[Validators.required]]
  });
}
 
/*MatchPassword(Password:string,confirmPassword:string) {
  const condition =
    Password!==confirmPassword;

  return condition ? { passwordMismatch: true } : null;
}*/

  get firstName()
  {
    return this.registrationForm.get('firstName');
  }

  get lastName()
  {
    return this.registrationForm.get('lastName');
  }
  get Enrollment()
  {
    return this.registrationForm.get('Enrollment');
  }
  get Branch()
  {
    return this.registrationForm.get('Branch');
  }
  get gradYear()
  {
    return this.registrationForm.get('gradYear');
  }
  get  Email()
  {
    return this.registrationForm.get('Email');
  }
  get Contact()
  {
    return this.registrationForm.get('Contact');
  }
  get Password()
  {
    return this.registrationForm.get('Password');
  }
  get confirmPassword()
  {
    return this.registrationForm.get('confirmPassword');
  }
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registrationForm.value);
    }
  }

  
   
  


  

  
}
