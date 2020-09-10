import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/book-store.service';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.loadBooks),
    concatMap(() => this.bs.getAll().pipe(
      map(books => BookActions.loadBooksSuccess({ books })),
      catchError(error => of(BookActions.loadBooksFailure({ error })))
    ))
  ));

  loadBooksLogging$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.loadBooks, BookActions.loadBooksSuccess),
    tap(e => console.log('ACTION', e))
  ), { dispatch: false });

  constructor(private actions$: Actions, private bs: BookStoreService) {}

}
