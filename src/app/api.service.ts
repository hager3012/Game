import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Games } from './games';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _HttpClient:HttpClient) { }
  getAll():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getPc():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {platform: 'pc'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getBrowser():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {platform: 'browser'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getDetails(id:number):Observable<Games>{
    return this._HttpClient.get<Games>(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getSortReleaseDate():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {'sort-by': 'release-date'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getSortPopularity():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {'sort-by': 'popularity'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getSortAlphabetical():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {'sort-by': 'alphabetical'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getRelevance():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {'sort-by': 'relevance'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getRacing():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'racing'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getSports():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'sports'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getShooter():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'shooter'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getSocial():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'social'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getOpenWorld():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'open-world'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getZombie():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'zombie'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getFantasy():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'fantasy'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getActionRpg():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'action-rpg'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getAction():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'action'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getFlight():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'flight'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
  getBattleRoyale():Observable<Games[]>{
    return this._HttpClient.get<Games[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      params: {category: 'battle-royale'},
      headers: {
        'X-RapidAPI-Key': '7fa5d5d556mshfab6bac45796142p19f4e6jsn1fa1a0907415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
}
