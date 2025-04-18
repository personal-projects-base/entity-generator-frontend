import {Component, HostListener} from '@angular/core';
import {Entity, EntityField} from "../../interfaces/entity";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import { TableModule } from 'primeng/table';
import {Button} from "primeng/button";
import {SharedCommonModule} from "../../modules/shared-common/shared-common.module";
import {types} from "../../shared/constants";

@Component({
  selector: 'app-field-batch',
  standalone: true,
  imports: [TableModule, Button, SharedCommonModule],
  templateUrl: './field-batch.component.html',
  styleUrl: './field-batch.component.scss'
})
export class FieldBatchComponent {

  fields: any[] = [];

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


  constructor(
    public readonly ref: DynamicDialogRef,
    public readonly config: DynamicDialogConfig
  ){
    this.fetch = this.fetchType[0];
    this.relati = this.relation[0];
  }



  @HostListener('window:paste', ['$event'])
  onDetectCtrlV(event: ClipboardEvent){
    const pastedText = event.clipboardData?.getData('text') || '';
    var fieldsPasted = pastedText.split('\n');
    fieldsPasted.forEach(field => {
      var f = field.split(';');
      this.fields.push({name: f[0], type: this.onGetTypeNameFromDbType(f[1])});
    })
  }




  onSave() {
    var entityFields: EntityField[] = [];

    this.fields.forEach(field => {
      var entity = new EntityField();
      entity.fieldName = field.name;
      entity.fieldProperties.fieldType = field.type;
      if(entity.relationShips){
        entity.relationShips.fetchType = this.fetch.code;
        entity.relationShips.relationShip = this.relati.code;
      }
      entityFields.push(entity);
    })

    this.ref.close(entityFields);
  }

  onGetTypeNameFromDbType(dbType: string) {
    const match = types.find(mapping =>
      mapping.typesReplace.includes(dbType.toLowerCase())
    );
    return match ? match.name : null;
  }


}
