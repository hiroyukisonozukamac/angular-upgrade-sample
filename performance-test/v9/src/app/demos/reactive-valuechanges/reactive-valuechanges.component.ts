import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-valuechanges',
  templateUrl: './reactive-valuechanges.component.html',
  styleUrls: ['./reactive-valuechanges.component.scss']
})
export class ReactiveValuechangesComponent implements OnInit, OnDestroy {
  form: FormGroup;
  log: string[] = [];
  count = 0;

  private sub?: Subscription;

  constructor() {
    this.form = new FormGroup({
      numberInput: new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.sub = this.form.get('numberInput')!.valueChanges.subscribe(value => {
      const timestamp = new Date().toLocaleTimeString();
      this.count++;
      this.log.unshift(`${this.count}回目: 値=${value} (${timestamp})`);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  resetLog(): void {
    this.count = 0;
    this.log = [];
  }

  setValueProgrammatically() {
  this.form.get('numberInput')?.setValue(123);
}
}
