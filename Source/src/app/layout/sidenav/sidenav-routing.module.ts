import { SidenavComponent } from './sidenav.component';
import { LanguageMenuComponent } from './language-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BibleMenuComponent } from './bible-menu.component';

export const layoutSidenavRoutes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    outlet: 'sidenav',
  },
  {
    path: 'language-menu',
    component: LanguageMenuComponent,
    outlet: 'sidenav',
  },
  {
    path: 'bible-menu',
    component: BibleMenuComponent,
    outlet: 'sidenav',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(layoutSidenavRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class LayoutSidenavRoutingModule { }
