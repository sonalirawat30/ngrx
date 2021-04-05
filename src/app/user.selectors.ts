import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';

const getUserFeatuersSate = createFeatureSelector<State>('usersState');

export const getUsers= createSelector(
    getUserFeatuersSate,
    state => state.users
)
export const getError = createSelector(
    getUserFeatuersSate,
    state => state.error
)

