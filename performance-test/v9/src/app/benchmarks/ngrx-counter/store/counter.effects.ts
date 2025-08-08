import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess } from './counter.actions';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      map(() => performance.now()), // 開始時刻を取得
      delay(10), // 疑似遅延（副作用）
      map(startTime => {
        const duration = performance.now() - startTime; // 所要時間を計算
        return loadDataSuccess({ value: 1, time: duration }); // 所要時間を渡す
      })
    )
  );

  constructor(private actions$: Actions) {}
}
