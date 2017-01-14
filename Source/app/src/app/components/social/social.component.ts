import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../../core/twitter.service'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  tweets: Object;

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.getTruRatingTimeline().subscribe(
                               tweets => {
                                 this.tweets = tweets
                                 console.log(tweets);
                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

}
