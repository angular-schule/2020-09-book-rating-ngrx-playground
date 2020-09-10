import { Component } from '@angular/core';

import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { increment, reset, decrement } from '../+state/counter.actions';
import { selectCounter } from '../+state/counter.selectors';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter$ = this.store.pipe(select(selectCounter));

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  plus30() {

  }
}
