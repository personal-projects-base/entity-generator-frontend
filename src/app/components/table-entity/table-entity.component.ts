import { Component } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-table-entity',
  standalone: true,
  imports: [
    TreeTableModule
  ],
  templateUrl: './table-entity.component.html',
  styleUrl: './table-entity.component.scss'
})
export class TableEntityComponent {
  
}
