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
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:ShowApiComponent},
  {path:'Platforms',canActivate:[AuthGuard],children: [
    { path: 'pc',canActivate:[AuthGuard], component: PlatformsPcComponent },
    { path: 'browser',canActivate:[AuthGuard], component: PlatformsBrowserComponent }
  ]},
  {path:'sort-by',canActivate:[AuthGuard],children: [
    { path: 'release-date',canActivate:[AuthGuard], component: SortByReleaseDateComponent },
    { path: 'popularity',canActivate:[AuthGuard], component: SortByPopularityComponent },
    { path: 'alphabetical',canActivate:[AuthGuard], component: SortByAlphabeticalComponent },
    { path: 'relevance',canActivate:[AuthGuard], component: SortByReleaseDateComponent }
  ]},
  {path:'categories',canActivate:[AuthGuard],children: [
    { path: 'racing',canActivate:[AuthGuard], component: CategoriesRacingComponent },
    { path: 'sports',canActivate:[AuthGuard], component: CategoriesSportsComponent },
    { path: 'social',canActivate:[AuthGuard], component: CategoriesSocialComponent },
    { path: 'shooter',canActivate:[AuthGuard], component: CategoriesShooterComponent },
    { path: 'open-world',canActivate:[AuthGuard], component: CategoriesOpenWorldComponent },
    { path: 'zombie',canActivate:[AuthGuard], component: CategoriesZombieComponent },
    { path: 'fantasy',canActivate:[AuthGuard], component: CategoriesFantasyComponent },
    { path: 'action-rpg',canActivate:[AuthGuard], component: CategoriesActionRpgComponent },
    { path: 'action',canActivate:[AuthGuard], component: CategoriesActionComponent },
    { path: 'flight',canActivate:[AuthGuard], component: CategoriesFlightComponent },
    { path: 'battle-royale',canActivate:[AuthGuard], component: CategoriesBattleComponent }
  ]},
  {path:'detailsGame/:id',canActivate:[AuthGuard],component:ShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
