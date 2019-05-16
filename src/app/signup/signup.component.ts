import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IRegister } from '../interfaces/IRegister';
import { DataProcessingServiceService } from '../data-processing-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm :FormGroup;

  constructor(private fb: FormBuilder, private dps: DataProcessingServiceService) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required , Validators.minLength(6)]],
      validatePassword:['']
    });
  }

  public validateEmail():boolean {
    return (this.registerForm.controls["email"].dirty)? this.registerForm.controls["email"].valid : true;
  }
  
  public validatePassword(): boolean{
    return true;
  }
  
  public postRegister(): void {
    let registerData : IRegister = {
      firstName : this.registerForm.controls["firstName"].value,
      lastName : this.registerForm.controls["lastName"].value ,
      email : this.registerForm.controls["email"].value,
      password : this.registerForm.controls["password"].value,
      validatePassword : this.registerForm.controls["validatePassword"].value,
    }
    this.dps.postRegisterData(registerData);
  }
  

  
}
