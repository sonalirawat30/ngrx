import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from './users.service';
import { Action } from '@ngrx/store';
import * as UserActions from './users.actions';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
    private userService: UsersService) { }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.UsersActionTypes.LoadUserss),
    mergeMap(
      action => this.userService.getUsers()
        .pipe(
          map(users => new UserActions.LoadUserssSuccess({ data: users })))
    )
  ))
}
