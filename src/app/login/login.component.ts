import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fp:FormBuilder,private _AuthService:AuthService,private _Router:Router) {}
  msg: string = '';
  isLoading:boolean=false;
  register:FormGroup=this.fp.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/(.com|.net)$/),
        ],
      ],
      password: ['', [Validators.required, Validators.maxLength(5)]],
  })
  get email(): AbstractControl | null {
    return this.register.get('email');
  }

  get password(): AbstractControl | null {
    return this.register.get('password');
  }
  handleRegister(formData: FormGroup):void{
    this.isLoading=true;
    if (formData.valid) {
      this._AuthService.login(formData.value).subscribe({
        next:(data)=>{
          this.isLoading=false;
          if(data.message==='success'){

            console.log(data);
            localStorage.setItem('usertoken',`${data.token}`)
            this._AuthService.decodeUserData();
            this._Router.navigate(['/home']);

          }else{
            this.msg=data.message
          }
        }
      })
      console.log(formData.value);

    }
  }
  forgotPassword(){
    alert('ههه اعمل اكونت جديد')
  }
  }
