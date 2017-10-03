import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import * as _ from 'lodash';

import {Bible} from './bible';

@Injectable()
export class BibleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private host = 'http://localhost:9000';
  private url = 'api/bibles'; // URL to web api
  private biblesUrl: string;

  private bibles: Observable < Bible[] > = null;
  private languages: string[] = null;

  private currentBible: Subject<Bible> = new Subject<Bible>();
  private currentLanguage: string = null;

  constructor(private http: Http) {
    this.biblesUrl = this.host + '/' + this.url;
    console.log('constructor');
  }

  private getBibles(): Observable < Bible[] > {
    if (!this.bibles) {
      this.bibles = this
      .http
      .get(this.biblesUrl)
      .map(res => {
        return res.json().map(item => {
          return new Bible(
              item.name,
              item.full_name,
              item.language_code
          );
        });
      })
      .publishReplay(1)
      .refCount();
    }
    return this.bibles;
  }

  getBiblesForLanguage(language: string): Observable < Bible[] > {
    return this.getBibles()
    .map(res => {
      return res.filter(item => item.language_code === language)
    });
  }

  getLanguages(): Observable < string[] > {
    return this.getBibles()
    .map(res => {
      return _.uniq(res.map(item => {
        return item.language_code;
      }));
    });
  }

  setCurrentBible(bible: Bible): Observable<Bible> {
    console.log(bible.full_name);
    return this.http
    .get(this.host + '/api/bibles/' + bible.language_code + '-' + bible.name.toLowerCase() + '/metadata')
    .map(res => {
      const json = res.json();
      const bibleMetadata = new Bible(
        json.name,
        json.full_name,
        json.language_code,
      );
      bibleMetadata.books = json.books;
      this.currentBible.next(bibleMetadata);
      return bibleMetadata;
    });
  }

  getCurrentBible(): Observable<Bible> {
    return this.currentBible.asObservable();
  }
}
