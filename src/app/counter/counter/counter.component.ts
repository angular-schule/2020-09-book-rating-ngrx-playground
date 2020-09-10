import { Component } from '@angular/core';

import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter$ = this.service.state$.pipe(map(state => state.counter));

  constructor(private service: StateService) {
    this.service.state$.subscribe(console.log);
  }

  increment() {
    this.service.dispatch('INCREMENT');
  }

  decrement() {
    this.service.dispatch('DECREMENT');
  }

  plus30() {
    this.service.dispatch('INC30');
  }

  reset() {
    this.service.dispatch('RESET');
  }

}
