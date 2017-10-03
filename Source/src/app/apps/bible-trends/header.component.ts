import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { BibleService } from '../../shared/services/bible.service';
import { SearchService } from '../../shared/services/search.service';

import { Bible } from '../../shared/services/bible';



@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {

  public resultCount = 0;
  public language: string;
  public bible: string;

  constructor(private bibleService: BibleService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.bibleService.getCurrentBible()
    .subscribe(results => {
      this.language = results.language_code;
      this.bible = results.full_name;
    });

    this.searchService.results()
    .subscribe(results => {
      this.resultCount = results.hits.total;
    });
  }
}
