import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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
  selector: 'app-material-grid',
  templateUrl: './material-grid.component.html',
  styleUrls: ['./material-grid.component.scss']
})
export class MaterialGridComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id', 'col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7', 'col8', 'col9'
  ];
  dataSource = new MatTableDataSource<TableRow>();

  pageSizeOptions = [0, 50, 30000];
  selectedPageSize = 0;

  tableReadyTime: number | null = null;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.setData(this.selectedPageSize);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.measureRenderTime();
  }

  setData(count: number) {
    const data: TableRow[] = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      col1: `Data ${i + 1}-1`,
      col2: `Data ${i + 1}-2`,
      col3: `Data ${i + 1}-3`,
      col4: `Data ${i + 1}-4`,
      col5: `Data ${i + 1}-5`,
      col6: `Data ${i + 1}-6`,
      col7: `Data ${i + 1}-7`,
      col8: `Data ${i + 1}-8`,
      col9: `Data ${i + 1}-9`
    }));

    this.dataSource.data = data;
  }

  onPageSizeChange(size: string) {
    const count = Number(size);
    this.selectedPageSize = count;
    this.setData(count);
    this.measureRenderTime();
  }

  private measureRenderTime() {
    const start = performance.now();
    this.cdr.detectChanges();
    setTimeout(() => {
      this.tableReadyTime = performance.now() - start;
    });
  }
}
