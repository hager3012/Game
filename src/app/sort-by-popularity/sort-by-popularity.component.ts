import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Games } from '../games';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sort-by-popularity',
  templateUrl: './sort-by-popularity.component.html',
  styleUrls: ['./sort-by-popularity.component.css']
})
export class SortByPopularityComponent {
  Game:Games[]=[];
  count:number=1;
constructor(private _ApiService:ApiService,private _Router:Router) {
}
ngOnInit(): void {
this._ApiService.getSortPopularity().subscribe(data=>{
  this.Game=data;
  console.log(this.Game);

})
}
getId(id:number):void{
  this._Router.navigate(['detailsGame',id]);
  }
}
