import { Component, OnInit } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})

export class LanguageMenuComponent implements OnInit {

  public constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  public ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sidenavService.close().then(() => { });
        }
      });
  }
}
