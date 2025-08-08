import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from './store/counter.actions';
import { CounterState } from './store/counter.state';

@Component({
  selector: 'app-ngrx-counter',
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.scss']
})
export class NgrxCounterComponent {
  effectCalls$: Observable<number>;
  effectTimes$: Observable<number[]>;

  effectTotalTime: number | null = null;

  constructor(private store: Store<{ counter: CounterState }>) {
    this.effectCalls$ = this.store.select(s => s.counter.effectCalls);
    this.effectTimes$ = this.store.select(s => s.counter.effectTimes);
  }

  testEffect() {
    const start = performance.now();
    for (let i = 0; i < 100; i++) {
      this.store.dispatch(loadData());
    }
    setTimeout(() => {
      const end = performance.now();
      this.effectTotalTime = end - start;
    }, 1500);
  }
}
