import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { BibleTrendsRoutingModule } from './bible-trends-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { BibleTrendsComponent } from './bible-trends.component';

import { ChartComponent } from './chart.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    Ng2PageScrollModule,
    SharedModule,
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
