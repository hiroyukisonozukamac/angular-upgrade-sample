import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators-length',
  templateUrl: './validators-length.component.html',
  styleUrls: ['./validators-length.component.scss']
})
export class ValidatorsLengthComponent {
  form = new FormGroup({
    // 文字列（length:number）→ 常に判定対象
    strMin3: new FormControl('ab', [Validators.minLength(3)]),

    // 配列（length:number）→ 常に判定対象
    arrMax3: new FormControl([1, 2, 3, 4], [Validators.maxLength(3)]),

    // { length: number } → v9/v10 ともに判定対象
    objLenNumMin3: new FormControl({ length: 2 }, [Validators.minLength(3)]),

    // { length: string } → v9 は判定されがち、v10 は「数値型のみ」で非判定（= 有効）
    objLenStrMin3: new FormControl({ length: '2' }, [Validators.minLength(3)]),

    // length を持たないオブジェクト → 判定対象外（= 有効）
    objNoLenMin3: new FormControl({ foo: 1 }, [Validators.minLength(1)])
  });

  // 表示用ヘルパ（v9向けに get を使用）
  status(name: string) {
    return this.form.get(name)?.status;
  }
  errors(name: string) {
    const e = this.form.get(name)?.errors;
    return e ? JSON.stringify(e) : '-';
  }

  // 値操作（v9互換の書き方）
  toggleStr() {
    const c = this.form.get('strMin3') as FormControl;
    const v: string = c.value || '';
    c.setValue(v.length >= 3 ? 'ab' : 'abcd');
  }
  pushArray() {
    const c = this.form.get('arrMax3') as FormControl;
    const v: any[] = c.value || [];
    c.setValue([...v, v.length + 1]);
  }
  popArray() {
    const c = this.form.get('arrMax3') as FormControl;
    const v: any[] = c.value || [];
    c.setValue(v.slice(0, Math.max(0, v.length - 1)));
  }
  setObjLenNum(val: number) {
    const c = this.form.get('objLenNumMin3') as FormControl;
    c.setValue({ length: val });
  }
  setObjLenStr(val: string) {
    const c = this.form.get('objLenStrMin3') as FormControl;
    c.setValue({ length: val });
  }
  toggleNoLen() {
    const c = this.form.get('objNoLenMin3') as FormControl;
    const cur: any = c.value;
    c.setValue(cur && cur.foo ? {} : { foo: 1 });
  }
}
