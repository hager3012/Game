import { Component, OnInit } from '@angular/core';
import { Games } from '../games';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platforms-pc',
  templateUrl: './platforms-pc.component.html',
  styleUrls: ['./platforms-pc.component.css']
})
export class PlatformsPcComponent implements OnInit{
  Game:Games[]=[];
  count:number=1;
constructor(private _ApiService:ApiService,private _Router:Router) {
}
ngOnInit(): void {
this._ApiService.getPc().subscribe(data=>{
  this.Game=data;
  console.log(this.Game);

})
}
getId(id:number):void{
  this._Router.navigate(['detailsGame',id]);
  }
}
