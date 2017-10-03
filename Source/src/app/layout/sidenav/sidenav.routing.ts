import { Routes } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { LanguageMenuComponent } from './language-menu.component';
import { BibleMenuComponent } from './bible-menu.component';

export const LayoutSidenavRoutes: Routes = [
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
