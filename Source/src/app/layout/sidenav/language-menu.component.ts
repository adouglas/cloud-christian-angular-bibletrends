import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

import { BibleService } from '../../shared/services/bible.service';

@Component({
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})

export class LanguageMenuComponent implements OnInit {
  public languages: Observable<string[]>;

  public constructor(
    private bibleService: BibleService,
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  public ngOnInit(): void {
    this.languages = this.bibleService.getLanguages();
    // this.router.events
    //   .subscribe(event => {
    //     if (event instanceof NavigationStart) {
    //       this.sidenavService.close().then(() => { });
    //     }
    //   });
  }

  public closeMenu() {
    this.sidenavService.close();
  }

  public backMenu() {
    this.router.navigate([{ outlets: { sidenav: [ ] }}], { skipLocationChange: true });
  }

  public selectLanguage(language) {
    console.log(language);
    this.sidenavService.close();
  }
}
