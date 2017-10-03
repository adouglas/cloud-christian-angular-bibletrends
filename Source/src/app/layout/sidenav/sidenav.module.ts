import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav.component';
import { LanguageMenuComponent } from './language-menu.component';
import { BibleMenuComponent } from './bible-menu.component';
import { SidenavService } from './sidenav.service';

@NgModule({
  declarations: [
    SidenavComponent,
    LanguageMenuComponent,
    BibleMenuComponent
  ],
  providers: [
    SidenavService
  ]
})

export class SidenavModule { }
