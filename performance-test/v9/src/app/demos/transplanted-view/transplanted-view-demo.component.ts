import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { InsertionHostComponent } from './insertion-host.component';

@Component({
    selector: 'app-transplanted-view-demo',
    templateUrl: './transplanted-view-demo.component.html',
    styleUrls: ['./transplanted-view-demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransplantedViewDemoComponent {
    @ViewChild(InsertionHostComponent, { static: true })
    private host!: InsertionHostComponent; // 表示側

    count = 0;

    // 可視化（直近で変更検知が走った側を点滅）
    declarationBlink = false;
    displayBlink = false;

    logs: string[] = [];
    private readonly maxLogs = 200;

    constructor(private readonly cdr: ChangeDetectorRef) { }

    /** 宣言側トリガー：count++ → 宣言側だけで変更検知 */
    runDeclarationOnly(): void {
        this.count++;
        this.log('宣言側トリガー（count++ → 宣言側で変更検知）');
        this.cdr.detectChanges(); // 親の変更検知を手動で走らせる
        // 可視化（宣言側）
        this.flash('declaration');
    }

    /** 表示側トリガー：count++ → 表示側だけで変更検知 */
    runDisplayOnly(): void {
        this.count++;
        this.log('表示側トリガー（count++ → 表示側で変更検知）');
        this.host.forceCheck(); // 挿入先(InsertionHostComponent)の変更検知を手動で走らせる
        // 可視化（表示側）
        this.flash('display');
    }

    reset(): void {
        this.count = 0;
        this.logs = [];
        this.cdr.markForCheck();
    }

    // 変更検知サイクルの実検出（任意）：イベントで来たら点滅
    onDeclarationChecked(): void { this.flash('declaration'); }
    onDisplayChecked(): void { this.flash('display'); }

    // ---- util ----
    private log(msg: string): void {
        const ts = new Date().toLocaleTimeString();
        this.logs = [`${ts}  ${msg}`, ...this.logs].slice(0, this.maxLogs);
    }
    private flash(side: 'declaration' | 'display'): void {
        if (side === 'declaration') {
            this.declarationBlink = true; setTimeout(() => (this.declarationBlink = false), 450);
        } else {
            this.displayBlink = true; setTimeout(() => (this.displayBlink = false), 450);
        }
    }
}
