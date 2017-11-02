import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationStart, ParamMap , Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { SidenavService } from './sidenav.service';
import { BibleService } from '../../shared/services/bible.service';
import { Bible } from '../../shared/services/bible';


@Component({
  templateUrl: './bible-menu.component.html',
  styleUrls: ['./bible-menu.component.css']
})

export class BibleMenuComponent implements OnInit, OnDestroy {

  private previousRoute: string;
  private queryParamSubscription: Subscription;
  private langageSubscription: Subscription;

  public bibles: Observable<Bible[]>;

  public constructor(
    private bibleService: BibleService,
    private router: Router,
    private route: ActivatedRoute,
    private sidenavService: SidenavService
  ) { }

  public ngOnInit(): void {
    console.log('ngOnInit');
      // this.route.paramMap
      // .map((params: ParamMap) => {
      //   console.log(params);
      //   this.previousRoute = params.get('previousRoute');
      // });
      this.queryParamSubscription = this.route
      .queryParams
      .subscribe(params => {
        console.log(params);
        if (params.hasOwnProperty('previousRoute')) {
          console.log('found param: ' + params.previousRoute);
          this.previousRoute = params.previousRoute || 0;
        }
      });

      this.langageSubscription = this.bibleService
      .getCurrentLanguage()
      .subscribe(language => {
        this.bibles = this.bibleService.getBiblesForLanguage(language);
      });
  }

  public ngOnDestroy(): void {
    this.queryParamSubscription.unsubscribe();
  }

  public closeMenu() {
    this.sidenavService.close();
  }

  public backMenu() {
    let route = [];
    if (this.previousRoute && (this.previousRoute !== '')) {
      route = [ this.previousRoute ];
    }

    this.router.navigate([{ outlets: { sidenav: route }}], { skipLocationChange: true });
  }

  public selectBible(bible) {
    this.bibleService.setCurrentBible(bible).subscribe();
    this.sidenavService.close();
  }
}
