import { Component } from '@angular/core';
import { Games } from '../games';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-action',
  templateUrl: './categories-action.component.html',
  styleUrls: ['./categories-action.component.css']
})
export class CategoriesActionComponent {
  Game:Games[]=[];
  count:number=1;
constructor(private _ApiService:ApiService,private _Router:Router) {
}
ngOnInit(): void {
this._ApiService.getAction().subscribe(data=>{
  this.Game=data;
  console.log(this.Game);

})
}
getId(id:number):void{
  this._Router.navigate(['detailsGame',id]);
  }
}
