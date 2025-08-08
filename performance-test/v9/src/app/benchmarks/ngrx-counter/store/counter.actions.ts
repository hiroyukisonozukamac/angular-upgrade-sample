import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Counter] Load Data');
export const loadDataSuccess = createAction(
  '[Counter] Load Data Success',
  props<{ value: number; time: number }>()
);
