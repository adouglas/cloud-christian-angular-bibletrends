import { NgModule } from '@angular/core';

// import { LayoutRoutingModule } from './layout-routing.module';

import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
   ToolbarModule,
   SidenavModule,
  //  LayoutRoutingModule
  ],
  exports: [
    ToolbarModule,
    SidenavModule
  ]
})

export class LayoutModule { }
