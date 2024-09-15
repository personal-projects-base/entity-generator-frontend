import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-entity',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './table-entity.component.html',
  styleUrl: './table-entity.component.scss'
})
export class TableEntityComponent {
  
  @Input() entityFields: any[] = []
}
