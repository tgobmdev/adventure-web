import { Component, Input } from '@angular/core';
import { Columns } from './models/columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() cols!: Columns[];
  @Input() values!: any[];
}
