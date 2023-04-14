import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService) {

  }
ngOnInit(): void {
  this._AuthService.decodeUserData();
  this._AuthService.userDate.subscribe({
    next:()=>{
      if(this._AuthService.userDate.getValue()!==null){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }
    }
  })
}
  logOut(){
    this._AuthService.logOut();
  }
}
