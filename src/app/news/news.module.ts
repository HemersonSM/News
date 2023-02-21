import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { GeneralComponent } from './general/general.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TechnologyComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    GeneralComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
