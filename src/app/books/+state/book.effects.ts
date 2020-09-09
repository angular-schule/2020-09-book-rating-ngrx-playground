import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as BookActions from './book.actions';


@Injectable()
export class BookEffects {




  constructor(private actions$: Actions) {}

}
