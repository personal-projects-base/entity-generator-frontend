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

  fetch: any;
  relati: any;

  public fetchType = [
    { name: 'None', code: 'None' },
    { name: 'Eager', code: 'EAGER' },
    { name: 'Lazy', code: 'LAZY' },
  ];

  public relation = [
    { name: 'None', code: 'None' },
    { name: 'OneToOne', code: 'OneToOne' },
    { name: 'OneToMany', code: 'OneToMany' },
  ];

  onSave() {
    this.entityFields.relationShips.fetchType = this.fetch.code;
    this.entityFields.relationShips.relationShip = this.fetch.relati;
    this.ref.close(this.entityFields);
  }
  
}
