import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadBooks } from '../+state/book.actions';
import { selectAllBooks, selectBooksLoading } from '../+state/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(selectAllBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  constructor(private bs: BookStoreService, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }

  rateUp(book: Book) {
    const ratedBook = { ...book, rating: Math.min(5, book.rating + 1) };
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = { ...book, rating: Math.max(1, book.rating - 1) };
    this.updateList(ratedBook);
  }

  updateList(ratedBook: Book) {
    /* this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b); */
  }

  trackBook(index: number, item: Book) {
    return item.isbn;
  }
}
