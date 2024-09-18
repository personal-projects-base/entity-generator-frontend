import { AfterViewInit, Component, Input, input, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TableEntityComponent } from '../table-entity/table-entity.component';
import { Entity, EntityField } from '../../interfaces/entity';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EntityModalComponent } from '../entity-modal/entity-modal.component';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [
    AccordionModule,
    TableEntityComponent,
    SharedCommonModule,
  ],
  providers: [DialogService],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {

  @Input() entities: Entity[] = [];

  _entity?: Entity;


  ref: DynamicDialogRef | undefined;

  constructor(
    public readonly dialogService: DialogService
  ){}


  onAddField(entity: Entity){
    this.ref = this.dialogService.open(EntityModalComponent, 
      { header: 'Create Field',
        width: '90vw',
        modal:true,
        maximizable: false
      });

      this.ref.onClose.subscribe((entityFields: EntityField) => {
        if (entityFields) {
            entity.entityFields.push(entityFields);
        }
      });
  }

}
