import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Entity, EntityField } from '../../interfaces/entity';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';

@Component({
  selector: 'app-entity-modal',
  standalone: true,
  imports: [
    SharedCommonModule
  ],
  templateUrl: './entity-modal.component.html',
  styleUrl: './entity-modal.component.scss'
})
export class EntityModalComponent {

  entityFields: EntityField = new EntityField();

  constructor(public ref: DynamicDialogRef){}

  public fetchType = [
    { name: 'None', code: 'None' },
    { name: 'Eager', code: 'EAGER' },
    { name: 'Lazy', code: 'LAZY' },
  ];

  onSave() {
    this.ref.close(this.entityFields);
  }
  
}
