import { Injectable } from '@angular/core';

import { AuthorizedRequestService } from 'ng2-twitter';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TwitterService {

  constructor(private twitter: AuthorizedRequestService) { }

  getTruRatingTimeline() {
    return this.queryTwitter("https://api.twitter.com/1.1/statuses/user_timeline.json");
  }

  private queryTwitter(url: string) {
    return this.twitter.get(
      url,
      {
        user_id: 1727904870,
        count: 50,
        trim_user: 1,
        include_rts: 1,
        contributor_details: 0
      },
      {
        consumerKey: 'UHNs0novSDAyF1GxOJQzcdum5',
        consumerSecret: 'rvvIkQlixbFluJa4S5JM7uuVf06JCOuCqY3P31zo9lrxE4iqXf'
      },
      {
        token: '14677182-KL0Rpk0uQuO1qxU4EUXGwmlQDxRP7NfQm60rYLAXn',
        tokenSecret: 'su8gMZKCFCen1t84A5lt0EwdQvc46ICzmC4DUPCyqxz7T'
      }
  )
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(value) {
    let body = value.json();
    return body.data || { };
  }

  private handleError (error) {
    let errMsg: string;
      errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
