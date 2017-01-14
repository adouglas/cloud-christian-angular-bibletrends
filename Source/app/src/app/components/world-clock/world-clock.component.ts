import { Component, OnInit } from '@angular/core';

declare var moment: any;

@Component({
  selector: 'app-world-clock',
  templateUrl: './world-clock.component.html',
  styleUrls: ['./world-clock.component.css']
})
export class WorldClockComponent implements OnInit {
  public london: string;
  public sydney: string;
  public atlanta: string;
  public toronto: string;

  constructor() { }

  ngOnInit() {
    this.london =  moment().tz('Europe/London').format('HH:ss z');
    this.sydney =  moment().tz('Australia/Sydney').format('HH:ss z');
    this.atlanta =  moment().tz('America/Kentucky/Monticello').format('HH:ss z');
    this.toronto =  moment().tz('America/Toronto').format('HH:ss z');
  }

}
