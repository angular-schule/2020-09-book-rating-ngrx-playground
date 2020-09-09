import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private input$ = new Subject<number>();

  dispatch(input: number) {
    this.input$.next(input);
  }
}
