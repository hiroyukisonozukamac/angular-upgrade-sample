import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-insertion-host',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsertionHostComponent implements AfterViewInit {
    @ContentChild(TemplateRef, { static: true }) tpl!: TemplateRef<any>;
    constructor(private vcr: ViewContainerRef, private cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {
        // 宣言側の <ng-template> をここ（挿入先）に移植
        this.vcr.createEmbeddedView(this.tpl);
        // 初回描画のトリガ
        this.cdr.markForCheck();
    }

    /** 観察用: 挿入先から明示的にCD */
    forceCheck() {
        this.cdr.detectChanges();
    }
}
