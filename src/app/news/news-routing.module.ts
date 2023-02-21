import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TechnologyComponent} from "./technology/technology.component";
import {BusinessComponent} from "./business/business.component";
import {EntertainmentComponent} from "./entertainment/entertainment.component";
import {HealthComponent} from "./health/health.component";
import {ScienceComponent} from "./science/science.component";
import {SportsComponent} from "./sports/sports.component";

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'technology',component:TechnologyComponent},
  {path:'business',component:BusinessComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'sports',component:SportsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
