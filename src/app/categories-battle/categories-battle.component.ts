import { Component } from '@angular/core';
import { Games } from '../games';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-battle',
  templateUrl: './categories-battle.component.html',
  styleUrls: ['./categories-battle.component.css']
})
export class CategoriesBattleComponent {
  Game:Games[]=[];
  count:number=1;
constructor(private _ApiService:ApiService,private _Router:Router) {
}
ngOnInit(): void {
this._ApiService.getBattleRoyale().subscribe(data=>{
  this.Game=data;
  console.log(this.Game);

})
}
getId(id:number):void{
  this._Router.navigate(['detailsGame',id]);
  }
}
