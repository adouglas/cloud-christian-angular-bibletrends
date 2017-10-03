import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {Observable} from 'rxjs/Rx';

import * as _ from 'lodash';

import {BibleService} from '../../services/bible.service';
import {SearchService} from '../../services/search.service';

import {Bible} from '../../services/bible';

@Component({
    moduleId: module.id,
    selector: 'app-results',
    templateUrl: 'results.component.html',
    styleUrls: ['results.component.css']
})

export class ResultsComponent implements OnInit {

    public results: any[] = [];
    constructor(private bibleService: BibleService, private searchService: SearchService) {}

    ngOnInit(): void {

        Observable.combineLatest(this.bibleService.getCurrentBible(), this.searchService.results()).subscribe(results => {
            const books = [];
            results[0]
                .books
                .forEach(book => {
                    books[book.osis_title] = book;
                    books[book.osis_title].results = [];
                });

            results[1]
                .hits
                .hits
                .forEach(hit => {
                    books[hit._source.book]
                        .results
                        .push(hit._source);
                });

            let books_arr = _.values(books);

            books_arr = books_arr.filter(element => {
                return (element.results.length > 0);
            });

            books_arr.forEach(element => {
                element
                    .results
                    .sort(function (a, b) {
                        if (a.chapter_number === b.chapter_number) {
                            return (a.verse_number - b.verse_number)
                        } else {
                            return (a.chapter_number - b.chapter_number)
                        }
                    });
            });

            books_arr.sort(function (a, b) {
                return (a.order_no - b.order_no);
            });

            console.log(books_arr);
            this.results = books_arr;
        });
    }

}
