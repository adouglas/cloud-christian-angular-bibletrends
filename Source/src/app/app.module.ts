import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './layout/layout.module';
import { BibleTrendsModule } from './apps/bible-trends/bible-trends.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BibleTrendsModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    MdSidenavModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
