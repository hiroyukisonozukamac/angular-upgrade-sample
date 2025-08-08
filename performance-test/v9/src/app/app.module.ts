import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LargeTableComponent } from './benchmarks/large-table/large-table.component';
import { MaterialGridComponent } from './benchmarks/material-grid/material-grid.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './benchmarks/ngrx-counter/store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgrxCounterModule } from './benchmarks/ngrx-counter/ngrx-counter.module';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// Performance Test Modules
import { ReactiveValuechangesComponent } from './demos/reactive-valuechanges/reactive-valuechanges.component';
import { ValidatorsLengthComponent } from './demos/validators-length/validators-length.component';
import { TransplantedViewDemoComponent } from './demos/transplanted-view/transplanted-view-demo.component';

import { HttpClientModule } from '@angular/common/http';
import { InsertionHostComponent } from './demos/transplanted-view/insertion-host.component';


@NgModule({
  declarations: [
    AppComponent,
    LargeTableComponent,
    MaterialGridComponent,
    ReactiveValuechangesComponent,
    ValidatorsLengthComponent,
    TransplantedViewDemoComponent,
    InsertionHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    // NgRx
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    // Material
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,

    // 専用モジュールでコンポーネント管理
    NgrxCounterModule,

    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
