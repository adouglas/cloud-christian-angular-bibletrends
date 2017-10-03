import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail/detail.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DetailComponent,
    ResultsComponent
  ],
  exports: [
    DetailComponent,
    ResultsComponent
  ]
})

export class ComponentsModule {}
