import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

import { data } from './datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  public data: Object[] = data;

  public pageSettings: PageSettingsModel | undefined;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 6, pageSizes: true };
  }
}
