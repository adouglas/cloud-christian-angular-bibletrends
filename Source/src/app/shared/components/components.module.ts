import {NgModule} from '@angular/core';

import {DetailComponent} from './detail/detail.component';
import {ResultsComponent} from './results/results.component';

@NgModule({
  imports: [],
  declarations: [
    DetailComponent, ResultsComponent
  ],
  exports: [DetailComponent, ResultsComponent]
})

export class ComponentsModule {}
