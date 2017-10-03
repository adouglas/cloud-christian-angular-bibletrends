import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { BibleService } from '../../shared/services/bible.service';
import { SidenavService } from '../../layout/sidenav/sidenav.service';

import { Bible } from '../../shared/services/bible';



@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css']
})

export class SettingsComponent implements OnInit {
    public languages: Observable<string[]>;
    public bibles: Observable<Bible[]>;

    public selectedLanguage: string;
    public selectedBible: Bible = new Bible('', '', '');

  constructor(private bibleService: BibleService, private sidenavService: SidenavService) {
    this.selectLanguage('en');
  }

  ngOnInit(): void {
    this.languages = this.bibleService.getLanguages();
    this.languages.subscribe(res => console.log(res));

    this.selectLanguage('en');
  }

  public openSideMenu() {
    this.sidenavService.open();
  }

  public selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.bibles = this.bibleService.getBiblesForLanguage(language).map((item, index) => {
      if (index === 0) {
        this.selectBible(item[0]);
      }
      return item;
    });
  }

  public selectBible(bible: Bible) {
    this.selectedBible = bible;
    this.bibleService.setCurrentBible(bible)
    .subscribe(result => console.log(result));
  }

}
