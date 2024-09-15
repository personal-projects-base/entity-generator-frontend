import { Component, Input, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TableEntityComponent } from '../table-entity/table-entity.component';
import { Entity, EntityField } from '../../interfaces/entity';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [
    AccordionModule,
    TableEntityComponent,
    NgFor
  ],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {

  @Input() entities: Entity[] = [];
}
