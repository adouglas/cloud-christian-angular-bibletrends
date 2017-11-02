import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import * as _ from 'lodash';

import { BibleService } from './bible.service';

import {Bible} from './bible';


@Injectable()
export class SearchService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private host = 'http://localhost:9000';
  private url = 'api/search'; // URL to web api
  private searchUrl: string;

  private resultStream: Subject<string> = new Subject<string>();

  constructor(private http: Http, private bibleService: BibleService) {
    this.searchUrl = this.host + '/' + this.url;
  }

  public searchBible(terms: Observable<string>) {
    return Observable.combineLatest(terms, this.bibleService.getCurrentBible())
    .debounceTime(400)
      .distinctUntilChanged()
      .switchMap((search, idx) => {
        console.log('Searching for: ' + search);
        return this.search(search[0], 'bibledata-' + search[1].language_code + '-' + search[1].name.toLowerCase())
      }).subscribe(res => this.resultStream.next(res));
  }

  public results(): Observable<any> {
    return this.resultStream.asObservable();
  }

  private search(term, index) {
    return this.http
        .get(this.searchUrl + '?idx=' + index + '&q=' + term)
        .map(res => res.json());
  }

}
