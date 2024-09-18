import {  Component, EventEmitter, Input, Output} from '@angular/core';
import { Entity, EntityField } from '../../interfaces/entity';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';


@Component({
  selector: 'app-table-entity',
  standalone: true,
  imports: [
    SharedCommonModule
  ],
  //providers: [DialogService],
  templateUrl: './table-entity.component.html',
  styleUrl: './table-entity.component.scss'
})
export class TableEntityComponent{
  
  @Input() entityFields: EntityField[] = [];
  @Input() entity: Entity = new Entity();

  @Output() dataEmitter: EventEmitter<EntityField> = new EventEmitter();

  //ref: DynamicDialogRef | undefined;

  constructor(
    //public readonly dialogService: DialogService
  ){

  }

  onEditing(entityField: EntityField){
    this.dataEmitter.emit(entityField);
    // this.ref = this.dialogService.open(EntityModalComponent, 
    //   { header: 'Create Field',
    //     width: '90vw',
    //     modal:true,
    //     maximizable: false,
    //     data: entityField
    //   });
  }

  onDuplicate(entity: Entity, entityField: EntityField){
    const data = {
      entity: entity,
      entityField: entityField 
    };
    entity.entityFields.push(structuredClone(entityField));
  }

  onDelete(entity: any, index: number){
    entity.entityFields.splice(index,1);
  }
}
