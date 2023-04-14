import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Games } from '../games';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  Game:Games[]=[]
constructor(private _ApiService:ApiService,private _AuthService:AuthService,private _Router:Router) {
}
getAll():void{
this._Router.navigate(['all']);
}
getId(id:number):void{
  this._Router.navigate(['detailsGame',id]);
  }
}
