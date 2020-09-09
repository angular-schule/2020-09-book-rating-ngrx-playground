import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { of } from 'rxjs';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
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
