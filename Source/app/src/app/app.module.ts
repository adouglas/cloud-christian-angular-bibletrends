import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MomentModule } from 'angular2-moment';
import { Ng2TwitterModule } from 'ng2-twitter';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RatingCountComponent } from './components/rating-count/rating-count.component';
import { WorldClockComponent } from './components/world-clock/world-clock.component';
import { SocialComponent } from './components/social/social.component';
import { PingComponent } from './components/ping/ping.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TflComponent } from './components/tfl/tfl.component';

import { PingerService } from './core/pinger.service';
import { TwitterService } from './core/twitter.service'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RatingCountComponent,
    WorldClockComponent,
    SocialComponent,
    PingComponent,
    WeatherComponent,
    TflComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    MomentModule,
    Ng2TwitterModule
  ],
  providers: [
    D3Service,
    PingerService,
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
