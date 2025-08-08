import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeTableComponent } from './benchmarks/large-table/large-table.component';
import { MaterialGridComponent } from './benchmarks/material-grid/material-grid.component';
import { NgrxCounterComponent } from './benchmarks/ngrx-counter/ngrx-counter.component';
import { ReactiveValuechangesComponent } from './demos/reactive-valuechanges/reactive-valuechanges.component';
import { ValidatorsLengthComponent } from './demos/validators-length/validators-length.component';
import { TransplantedViewDemoComponent } from './demos/transplanted-view/transplanted-view-demo.component';


const routes: Routes = [
  { path: '', redirectTo: 'large-table', pathMatch: 'full' },
  { path: 'benchmarks/large-table', component: LargeTableComponent },
  { path: 'benchmarks/material-grid', component: MaterialGridComponent },
  { path: 'benchmarks/ngrx-counter', component: NgrxCounterComponent },
  { path: 'demos/reactive-valuechanges', component: ReactiveValuechangesComponent },
  { path: 'demos/validators-length', component: ValidatorsLengthComponent },
  { path: 'demos/transplanted-view', component: TransplantedViewDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
