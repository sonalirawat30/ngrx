import { Action } from '@ngrx/store';
import { IUsers } from './users';
import { UsersActions, UsersActionTypes } from './users.actions';


export const userFeatureKey = 'usersState';

export interface State {
  users: IUsers[],
  error: string
}

export const initialState: State = {
  users: [],
  error: ''
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.LoadUserss:
      return {
        ...state
      }
    case UsersActionTypes.LoadUserssSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''
      }
    case UsersActionTypes.LoadUserssFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error

      }

    default:
      return state;
  }
}
