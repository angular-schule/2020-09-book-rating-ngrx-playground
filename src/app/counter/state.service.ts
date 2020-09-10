import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { Book } from '../books/shared/book';

interface MyState {
  counter: number;
  loading: boolean;
  books: Book[];
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private input$ = new Subject<string>();
  initialState: MyState = {
    counter: 0,
    loading: false,
    books: []
  };

  state$ = this.input$.pipe(
    startWith('INIT'),
    scan(this.reducer, this.initialState)
  );

  private reducer(state: MyState, message: string): MyState {
    switch (message) {
      case 'INCREMENT': return { ...state, counter: state.counter + 1 };
      case 'DECREMENT': return { ...state, counter: state.counter - 1 };
      case 'INC30': return { ...state, counter: state.counter + 30 };
      case 'RESET': return { ...state, counter: 0 };
      case 'LOADING_FINISHED': return { ...state, loading: false };
      case 'LOADING_START': return { ...state, loading: true };
      default: return state;
    }
  }

  dispatch(input: string) {
    this.input$.next(input);
  }
}
