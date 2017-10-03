import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { BibleService } from '../../shared/services/bible.service';

import { Bible } from '../../shared/services/bible';

@Component({
  moduleId: module.id,
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['help.component.css']
})

export class HelpComponent implements OnInit {

  constructor(private bibleService: BibleService) { }

  ngOnInit(): void {

    this.bibleService.getCurrentBible()
    .subscribe(results => {
      console.log(results);
    });
  }
}
