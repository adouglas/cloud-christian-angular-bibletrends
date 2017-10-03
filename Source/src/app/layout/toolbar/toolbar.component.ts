import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { BibleService } from '../../shared/services/bible.service';
import { SearchService } from '../../shared/services/search.service';

import { Bible } from '../../shared/services/bible';


@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  public searchTerm$ = new Subject<string>();

  constructor(private bibleService: BibleService, private searchService: SearchService) { }

  ngOnInit(): void {
   this.searchService.searchBible(this.searchTerm$);
  }
}
