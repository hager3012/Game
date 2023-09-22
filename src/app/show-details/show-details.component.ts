import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})

export class ShowDetailsComponent implements OnInit{
  @ViewChild('load', { static: true }) load!: ElementRef;
  customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:1000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
  srcVideo:string='';
  srcImageBackground:string='';
  GameURL:string='';
  GameId:any;
  Game:any;
constructor(private renderer: Renderer2,private _ApiService: ApiService,private _ActivatedRoute:ActivatedRoute) {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.GameId=params.get('id')
  })
  this.srcVideo=`https://www.freetogame.com/g/${this.GameId}/videoplayback.webm`
  this.srcImageBackground=`https://www.freetogame.com/g/${this.GameId}/thumbnail.jpg`
}
ngOnInit(): void {
setTimeout(()=>{
  this._ApiService.getDetails(this.GameId).subscribe((data)=>{
    this.renderer.removeClass(this.load.nativeElement,'d-flex')
  this.renderer.addClass(this.load.nativeElement,'d-none');
  this.Game=data;
  this.GameURL=data.game_url;
  console.log(this.Game);

  })
},500);


}
}
