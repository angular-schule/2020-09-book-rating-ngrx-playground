import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as BookActions from './book.actions';
import { Book } from '../shared/book';

export const bookFeatureKey = 'book';

export interface State extends EntityState<Book> {
  loading: boolean;
}

const bookAdapter = createEntityAdapter<Book>({
  selectId: book => book.isbn
});

export const initialState: State = bookAdapter.getInitialState({
  loading: false
});


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => {
    return { ...state, loading: true };
  }),

  on(BookActions.loadBooksSuccess, (state, action) => {
    return bookAdapter.setAll(action.books, { ...state, loading: false })
  }),

  on(BookActions.loadBooksFailure, state => {
    return { ...state, loading: false };
  }),

);

