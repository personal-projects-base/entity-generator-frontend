import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EntityField, RelationShips } from '../../interfaces/entity';
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
export class EntityModalComponent implements OnInit {

  entityFields: EntityField = new EntityField();

  constructor(
    public readonly ref: DynamicDialogRef,
    public readonly config: DynamicDialogConfig
  ){}

  ngOnInit(): void {

    if(this.config.data){
      this.entityFields = this.config.data;
      if(!this.entityFields.relationShips){
        this.entityFields.relationShips = new RelationShips();
        this.fetch = this.fetchType[0];
        this.relati = this.relation[0];
      } else {
        this.fetch = this.fetchType.filter(e => e.code === this.entityFields.relationShips.fetchType)[0]
        this.relati = this.relation.filter(e => e.code === this.entityFields.relationShips.relationShip)[0]
      }
    }else {
      this.fetch = this.fetchType[0];
      this.relati = this.relation[0];
    }
  }

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
    { name: 'ManyToOne', code: 'ManyToOne' },
    { name: 'ManyToMany', code: 'ManyToMany' }
  ];

  onSave() {
    if(this.entityFields.relationShips){
      this.entityFields.relationShips.fetchType = this.fetch.code;
      this.entityFields.relationShips.relationShip = this.relati.code;
    }

    this.ref.close(this.entityFields);
  }


  
}
