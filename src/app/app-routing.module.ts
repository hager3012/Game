import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ShowApiComponent } from './show-api/show-api.component';
import { PlatformsPcComponent } from './platforms-pc/platforms-pc.component';
import { PlatformsBrowserComponent } from './platforms-browser/platforms-browser.component';
import { SortByReleaseDateComponent } from './sort-by-release-date/sort-by-release-date.component';
import { SortByPopularityComponent } from './sort-by-popularity/sort-by-popularity.component';
import { SortByAlphabeticalComponent } from './sort-by-alphabetical/sort-by-alphabetical.component';
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
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'all',component:ShowApiComponent},
  {path:'Platforms',children: [
    { path: 'pc', component: PlatformsPcComponent },
    { path: 'browser', component: PlatformsBrowserComponent }
  ]},
  {path:'sort-by',children: [
    { path: 'release-date', component: SortByReleaseDateComponent },
    { path: 'popularity', component: SortByPopularityComponent },
    { path: 'alphabetical', component: SortByAlphabeticalComponent },
    { path: 'relevance', component: SortByReleaseDateComponent }
  ]},
  {path:'categories',children: [
    { path: 'racing', component: CategoriesRacingComponent },
    { path: 'sports', component: CategoriesSportsComponent },
    { path: 'social', component: CategoriesSocialComponent },
    { path: 'shooter', component: CategoriesShooterComponent },
    { path: 'open-world', component: CategoriesOpenWorldComponent },
    { path: 'zombie', component: CategoriesZombieComponent },
    { path: 'fantasy', component: CategoriesFantasyComponent },
    { path: 'action-rpg', component: CategoriesActionRpgComponent },
    { path: 'action', component: CategoriesActionComponent },
    { path: 'flight', component: CategoriesFlightComponent },
    { path: 'battle-royale', component: CategoriesBattleComponent }
  ]},
  {path:'detailsGame/:id',component:ShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
