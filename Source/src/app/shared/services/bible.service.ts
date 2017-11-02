import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import * as _ from 'lodash';

import { Bible } from './bible';

@Injectable()
export class BibleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private host = 'http://localhost:9000';
  private url = 'api/bibles'; // URL to web api
  private biblesUrl: string;

  private bibles: Observable < Bible[] > = null;
  private languages: string[] = null;

  private currentBible: ReplaySubject<Bible> = new ReplaySubject<Bible>(1);
  private currentLanguage: ReplaySubject<string> = new ReplaySubject<string>(1);

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
              item.language_code,
              item.default_for_language
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

  getDefaultBibleForLanguage(language: string): Observable < Bible > {
    return this.getBibles()
    .map(res => {
      console.log(res);
      const defaultBibles = res.filter(item => ((item.language_code === language) && (item.default_for_language === true)));
      if (defaultBibles && (defaultBibles.length > 0)) {
        return defaultBibles[0];
      }
      return null;
    }).first();
  }

  getLanguages(): Observable < string[] > {
    return this.getBibles()
    .map(res => {
      return _.sortBy(
        _.uniq(res.map(item => {
        return item.language_code;
      }))
      ,
      function(o){return o; });
    });
  }

  setCurrentLanguage(language: string ) {
    console.log('Language set to: ' + language);
    this.currentLanguage.next(language);
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }



  setCurrentBible(bible: Bible): Observable<Bible> {
    console.log('Set current bible: ' + bible.full_name);

    return this.http
    .get(this.host + '/api/bibles/' + bible.language_code + '-' + bible.name.toLowerCase() + '/metadata')
    .map(res => {
      const json = res.json();
      const bibleMetadata = new Bible(
        json.name,
        json.full_name,
        json.language_code,
        json.default_for_language
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
