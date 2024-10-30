import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TableEntityComponent } from '../table-entity/table-entity.component';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { Enums } from '../../interfaces/entity';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-enumerations',
  standalone: true,
  imports: [
    AccordionModule,
    TableEntityComponent,
    SharedCommonModule
  ],
  providers: [DialogService],
  templateUrl: './enumerations.component.html',
  styleUrl: './enumerations.component.scss'
})
export class EnumerationsComponent {
  
  @Input() enums: Enums[] = [];


  ref: DynamicDialogRef | undefined;

  constructor(
    public readonly dialogService: DialogService
  ){}


  onAddEnum(obj: Enums){
    obj.values.push("");
  }

  onRemove(entities: Enums[],index: number) {
    entities.splice(index, 1);
  }

  onClone(obj: Enums){
    var clone = structuredClone(obj);
    clone.enumName += 'Clone';
    this.enums.push(clone);
  }

  onRemoveParameter(values: string[],index: number) {
    values.splice(index,1);
  }

  trackByIndex(index: number, _: any): number {
    return index;
  }
}
