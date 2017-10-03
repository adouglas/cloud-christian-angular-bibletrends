import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdIconModule } from '@angular/material';

import { LayoutSidenavRoutingModule } from './sidenav-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { SidenavComponent } from './sidenav.component';
import { LanguageMenuComponent } from './language-menu.component';
import { BibleMenuComponent } from './bible-menu.component';
import { SidenavService } from './sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutSidenavRoutingModule,
    MdIconModule,
    SharedModule
  ],
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
