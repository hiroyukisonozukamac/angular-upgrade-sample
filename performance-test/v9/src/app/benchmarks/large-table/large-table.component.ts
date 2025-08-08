import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

interface TableRow {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
}

@Component({
  selector: 'app-large-table',
  templateUrl: './large-table.component.html',
  styleUrls: ['./large-table.component.scss']
})
export class LargeTableComponent implements OnInit {

  allData: TableRow[] = [];
  displayedData: TableRow[] = [];

  pageSizeOptions = [0, 50, 30000];
  selectedPageSize = 0;

  renderTime: number | null = null;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // データ生成
    this.allData = Array.from({ length: 30000 }, (_, i) => ({
      id: i + 1,
      col1: `Data ${i + 1}-1`,
      col2: `Data ${i + 1}-2`,
      col3: `Data ${i + 1}-3`,
      col4: `Data ${i + 1}-4`,
      col5: `Data ${i + 1}-5`,
      col6: `Data ${i + 1}-6`,
      col7: `Data ${i + 1}-7`,
      col8: `Data ${i + 1}-8`,
      col9: `Data ${i + 1}-9`,
    }));

    this.updateDisplayedData();
  }

  onPageSizeChange(size: number) {
    this.updateDisplayedData(size);
  }

  updateDisplayedData(size: number = this.selectedPageSize) {
    this.selectedPageSize = size;
    const start = performance.now();
    this.displayedData = this.allData.slice(0, size);

    // ChangeDetection実行後に次タスクで計測
    this.cdr.detectChanges();
    setTimeout(() => {
      this.renderTime = performance.now() - start;
    });
  }
}
