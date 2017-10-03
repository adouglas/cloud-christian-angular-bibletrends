import { NgModule } from '@angular/core';
import { MdIconModule, MdInputModule, MdMenuModule } from '@angular/material';

import { SharedModule } from '../../shared/shared.module';

import { HelpComponent } from './help.component';
import { SettingsComponent } from './settings.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    SharedModule
  ],
  declarations: [
    HelpComponent,
    SettingsComponent,
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})

export class ToolbarModule { }
