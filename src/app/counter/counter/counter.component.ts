import { Component } from '@angular/core';

import { StateService } from '../state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(private service: StateService) { }

  increment() {
    // TODO
  }

  decrement() {
    // TODO
  }

  reset() {
    // TODO
  }

}
