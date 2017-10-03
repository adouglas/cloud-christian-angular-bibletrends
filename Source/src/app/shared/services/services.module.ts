import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { BibleService } from './bible.service';
import { SearchService } from './search.service';

@NgModule({
    imports: [
      HttpModule
    ],
      providers: [
        BibleService,
        SearchService
      ]
})

export class ServicesModule { }
