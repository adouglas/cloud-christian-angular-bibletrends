import { Component, OnInit } from '@angular/core';
import { PingerService } from '../../core/pinger.service'

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {
  public pingResult: string;

  constructor(private pinger: PingerService) {}

  ngOnInit() {
    let that = this;
    this.pinger.pingGoogle().then(function(delta) {
      that.pingResult = String(delta) + ' ms';
    }).catch(function(err) {
      console.error('Could not ping remote URL', err);
    });
  }

}
