import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import paginate from 'src/app/pagination.utils';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PaginationComponent implements OnInit {

  @Input() items:  any;
  @Input()
  label!: string;
  @Input() pageSize = 10;
  @Input() maxPages = 100;
  @Input() previousLabel = 'Previous';
  @Input() nextLabel = 'Next';
  @Input() screenReaderPaginationLabel = 'Pagination';
  @Input() screenReaderPageLabel = 'page';
  @Input() screenReaderCurrentLabel = `You're on page`;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();

  currentPage = 1;
  pages!: Array<number>;
  startIndex: any;
  endIndex: any;

  ngOnInit() {
    this.calculateIndexes();
  }

  calculateIndexes() {
    const pagination = paginate(
      this.items.length,
      this.currentPage,
      this.pageSize,
      this.maxPages
    );
    this.currentPage = pagination.currentPage;
    this.pages = pagination.pages;
    this.startIndex = pagination.startIndex;
    this.endIndex = pagination.endIndex;
  }

  previous(e: any) {
    e.preventDefault();
    this.currentPage--;
    this.calculateIndexes();
  }

  next(e: any) {
    e.preventDefault();
    this.currentPage++;
    this.calculateIndexes();
  }

  setCurrent(e: any, page: any) {
    e.preventDefault();
    this.currentPage = page;
    this.calculateIndexes();
  }

  getLabel(i: any) {
    return this.items[i][this.label];
  }

  onClick(item: any) {
    this.onItemClick.emit(item);
  }

}
