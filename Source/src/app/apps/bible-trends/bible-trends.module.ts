import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { BibleTrendsRoutingModule } from './bible-trends-routing.module';
import { ServicesModule } from '../../shared/services/services.module';

import { BibleTrendsComponent } from './bible-trends.component';

import { ChartComponent } from './chart.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    ChartsModule,
    Ng2PageScrollModule,
    ServicesModule,
    BibleTrendsRoutingModule
  ],
  declarations: [
    BibleTrendsComponent,
    ChartComponent,
    HeaderComponent
  ],
  providers: [],
})

export class BibleTrendsModule { }
