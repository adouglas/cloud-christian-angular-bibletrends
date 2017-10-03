import { NgModule } from '@angular/core';

import { LanguageNamePipe } from './language-name.pipe';

@NgModule({
    declarations: [
        LanguageNamePipe
      ],
  exports: [
    PipesModule,
  ],
})

export class PipesModule { }
