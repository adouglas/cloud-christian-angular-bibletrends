import { Component, OnInit } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  public constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  public ngOnInit(): void {
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

  public openLanguageMenu() {
    this.router.navigate([{ outlets: { sidenav: [ 'language-menu' ] }}], { skipLocationChange: true });
  }

  public openBibleMenu() {
    this.router.navigate([{ outlets: { sidenav: [ 'bible-menu' ] }}], { skipLocationChange: true });
  }
}
