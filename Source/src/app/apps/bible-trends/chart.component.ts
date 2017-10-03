import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT} from '@angular/common';

import { BibleService } from '../../shared/services/bible.service';
import { SearchService } from '../../shared/services/search.service';

import { Bible } from '../../shared/services/bible';



@Component({
  moduleId: module.id,
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css']
})

export class ChartComponent implements OnInit {
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              },
              gridLines: {
                display: false
            }
          }],
          xAxes: [{
            ticks: {
                stepSize: 1,
                min: 0,
                autoSkip: true
            },
            gridLines: {
              display: false
          }
        }]
      }
      };
      public barChartLabels: string[] = [];
      public barChartType = 'bar';
      public barChartLegend = false;
      public barChartColors: any[] = [
        { // grey
          backgroundColor: '#00ADB5',
          borderColor: '#00ADB5',
          pointBackgroundColor: '#00ADB5',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00ADB5'
        }];

      public barChartData: any[] = [
        {data: [], label: 'Occurences'}
      ];

  constructor(
    private bibleService: BibleService,
    private searchService: SearchService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) {
    PageScrollConfig.defaultScrollOffset = 65;
  }

  ngOnInit(): void {
    this.bibleService.getCurrentBible()
    .subscribe(result => {
      this.barChartLabels = []
      for (const key in result.books) {
        if (result.books[key].full_title) {
          this.barChartLabels.push(result.books[key].full_title);
        }
      }
    });

    Observable.combineLatest(this.bibleService.getCurrentBible(), this.searchService.results())
    .subscribe(results => {
      const data: number[] = [];
      for (let index = 0; index < results[0].books.length; index++) {
        data.push(0);
      }

      for (const key in results[0].books) {
        if (results[0].books[key].osis_title) {
          results[1].aggregations.agg_terms_book.buckets.forEach(element => {
            if (element.key === results[0].books[key].osis_title) {
              data[key] = element.doc_count;
            }
          });
        }
      };

      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      // clone[0].label = ;
      this.barChartData = clone;
    });
  }

  public chartClicked(e: any): void {
    if (e.active && (e.active.length > 0)) {
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(
        this.document,
        '#' + this.barChartLabels[e.active[0]._index].replace(' ', ''));
      this.pageScrollService.start(pageScrollInstance);
    }
  }
}
