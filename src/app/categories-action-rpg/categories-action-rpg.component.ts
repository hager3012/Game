import { Component } from '@angular/core';
import { Games } from '../games';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-action-rpg',
  templateUrl: './categories-action-rpg.component.html',
  styleUrls: ['./categories-action-rpg.component.css']
})
export class CategoriesActionRpgComponent {
  Game:Games[]=[];
  count:number=1;
constructor(private _ApiService:ApiService,private _Router:Router) {
}
ngOnInit(): void {
this._ApiService.getActionRpg().subscribe(data=>{
  this.Game=data;
  console.log(this.Game);

})
}
getId(id:number):void{
  this._Router.navigate(['detailsGame',id]);
  }
}
