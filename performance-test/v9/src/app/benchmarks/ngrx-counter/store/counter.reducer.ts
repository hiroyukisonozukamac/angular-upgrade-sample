import { createReducer, on } from '@ngrx/store';
import { loadData, loadDataSuccess } from './counter.actions';
import { CounterState, initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,

  on(loadData, state => ({
    ...state,
    effectCalls: state.effectCalls + 1
  })),

  on(loadDataSuccess, (state, { value, time }) => ({
    ...state,
    items: [
      ...state.items,
      { id: state.items.length, name: `Item ${state.items.length}`, value }
    ],
    effectTimes: [...state.effectTimes, time]
  }))
);
