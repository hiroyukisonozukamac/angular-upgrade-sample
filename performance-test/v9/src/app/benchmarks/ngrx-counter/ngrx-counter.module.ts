import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxCounterComponent } from './ngrx-counter.component';
import { counterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NgrxCounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([CounterEffects]),
    RouterModule.forChild([{ path: '', component: NgrxCounterComponent }])
  ]
})
export class NgrxCounterModule {}
