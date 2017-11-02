import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MdSidenav } from '@angular/material';

import { SidenavService } from './layout/sidenav/sidenav.service';
import { BibleService } from './shared/services/bible.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  @ViewChild('sideMenu') public sideMenu: MdSidenav;
  constructor(private bibleService: BibleService, private sidenavService: SidenavService, private translateService: TranslateService) {}

  ngOnInit() {
    this.sidenavService.setSidenav(this.sideMenu);
    const browserLang = this.translateService.getBrowserLang().toLowerCase();

    this.bibleService.getLanguages().takeLast(1).subscribe(languages => {
      let lang = 'en';
      if (languages.includes(browserLang)) {
        this.bibleService.setCurrentLanguage(browserLang);
        lang = browserLang;
      }

      this.bibleService.getDefaultBibleForLanguage(lang).takeLast(1).subscribe(
        bible => {
          this.bibleService.setCurrentBible(bible).subscribe(info => {console.log(info)});
        });
    });

  }
}
