import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators,AbstractControl } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private fp:FormBuilder,private _AuthService:AuthService,private _Router:Router) {}
msg: string = '';
isLoading:boolean=false;
register:FormGroup=this.fp.group({
  first_name: ['', [Validators.required, Validators.maxLength(5)]],
    last_name: ['', [Validators.required, Validators.maxLength(10)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/(.com|.net)$/),
      ],
    ],
    password: ['', [Validators.required, Validators.maxLength(5)]],

    age: ['', [Validators.required, Validators.max(80)]],
})
get firstName(): AbstractControl | null {
  return this.register.get('first_name'); // control
}

get lastName(): AbstractControl | null {
  return this.register.get('last_name');
}

get email(): AbstractControl | null {
  return this.register.get('email');
}

get password(): AbstractControl | null {
  return this.register.get('password');
}

get repassword(): AbstractControl | null {
  return this.register.get('repassword');
}

get age(): AbstractControl | null {
  return this.register.get('age');
}
handleRegister(formData: FormGroup):void{
  this.isLoading=true;
  if (formData.valid) {
    this._AuthService.singUp(formData.value).subscribe({
      next:(data)=>{
        this.isLoading=false;
        if(data.message==='success'){
          this._Router.navigate(['/login']);
        }else{
          this.msg=data.errors.email.message;
        }
      }
    })
  }
}
}
