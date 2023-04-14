import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { ShowApiComponent } from './show-api/show-api.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SplitPipe } from './split.pipe';
import { PlatformsPcComponent } from './platforms-pc/platforms-pc.component';
import { PlatformsBrowserComponent } from './platforms-browser/platforms-browser.component';
import { SortByReleaseDateComponent } from './sort-by-release-date/sort-by-release-date.component';
import { SortByPopularityComponent } from './sort-by-popularity/sort-by-popularity.component';
import { SortByAlphabeticalComponent } from './sort-by-alphabetical/sort-by-alphabetical.component';
import { SortByRelevanceComponent } from './sort-by-relevance/sort-by-relevance.component';
import { CategoriesRacingComponent } from './categories-racing/categories-racing.component';
import { CategoriesSportsComponent } from './categories-sports/categories-sports.component';
import { CategoriesSocialComponent } from './categories-social/categories-social.component';
import { CategoriesShooterComponent } from './categories-shooter/categories-shooter.component';
import { CategoriesOpenWorldComponent } from './categories-open-world/categories-open-world.component';
import { CategoriesZombieComponent } from './categories-zombie/categories-zombie.component';
import { CategoriesFantasyComponent } from './categories-fantasy/categories-fantasy.component';
import { CategoriesActionRpgComponent } from './categories-action-rpg/categories-action-rpg.component';
import { CategoriesActionComponent } from './categories-action/categories-action.component';
import { CategoriesFlightComponent } from './categories-flight/categories-flight.component';
import { CategoriesBattleComponent } from './categories-battle/categories-battle.component';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ShowApiComponent,
    ShowDetailsComponent,
    SplitPipe,
    PlatformsPcComponent,
    PlatformsBrowserComponent,
    SortByReleaseDateComponent,
    SortByPopularityComponent,
    SortByAlphabeticalComponent,
    SortByRelevanceComponent,
    CategoriesRacingComponent,
    CategoriesSportsComponent,
    CategoriesSocialComponent,
    CategoriesShooterComponent,
    CategoriesOpenWorldComponent,
    CategoriesZombieComponent,
    CategoriesFantasyComponent,
    CategoriesActionRpgComponent,
    CategoriesActionComponent,
    CategoriesFlightComponent,
    CategoriesBattleComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
