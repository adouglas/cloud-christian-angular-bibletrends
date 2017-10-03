import {Component, Input} from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})

export class DetailComponent {
    @Input() book: {};
    @Input() isLast: boolean;

    get bookID(): string {
      return this.book['full_title'].replace(' ', '');
    }
}
