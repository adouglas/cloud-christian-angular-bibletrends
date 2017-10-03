import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BibleTrendsComponent } from './bible-trends.component';

const appRoutes: Routes = [
  {
    path: 'bible-trends',
    pathMatch: 'full',
    component: BibleTrendsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BibleTrendsRoutingModule { }
