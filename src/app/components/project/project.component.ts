import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import {DropdownChangeEvent, DropdownModule} from 'primeng/dropdown';
import { EntityComponent } from "../entity/entity.component";
import { Endpoint, Entity, EntityGenerator, Enums } from '../../interfaces/entity';

import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { JsonViewerComponent } from "../json-viewer/json-viewer.component";
import { EndpointsComponent } from "../endpoints/endpoints.component";
import { EnumerationsComponent } from "../enumerations/enumerations.component";
import { JsonToFormcontrolComponent } from "../json-to-formcontrol/json-to-formcontrol.component";


interface FieldData {
  fieldName: string;
  required: boolean;
  hidden: boolean;
  type: string;
  fields: any[];
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TabViewModule,
    EntityComponent,
    SharedCommonModule,
    JsonViewerComponent,
    EndpointsComponent,
    EnumerationsComponent,
    EnumerationsComponent,
    JsonToFormcontrolComponent
],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',

})
export class ProjectComponent {

  language: any;
  public languages = [
    { name: 'Java', code: 'JAVA' },
    { name: 'C#', code: 'DOTNET' }
  ];

  public form: EntityGenerator = new EntityGenerator();

  _entities: Entity[] = [];
  jsonViewer: string = "";
  formViewer: string = "";



  constructor(){}

  onAddEntity(){
    this.form.entities.push(new Entity());
  }

  onAddEnum(){
    this.form.enums.push(new Enums());
  }

  onGenerate(): void {
    this.form.language = this.language?.code;
    console.log(this.form.language);
    console.log(this.language?.code);
    let obj = structuredClone(this.form);
    obj.entities.forEach(e => [
      e.entityFields.forEach(field => {
        if(field.relationShips){
          if(field.relationShips.fetchType === 'None' || field.relationShips.fetchType === ''){
            delete (field as any).relationShips;
          }
        }
      })
    ])

    this.onGenerateForm(structuredClone(obj));
    this.jsonViewer = JSON.stringify(obj,null, 2);
  }

  onGenerateForm(obj: EntityGenerator): void {
    var types: string[] = [];
    obj.entities.forEach(entity => {
      types.push(entity.entityName);
    });

    var forms = this.onTransformJsonToPersonFields(types, obj.entities);
    this.formViewer = JSON.stringify(forms,null, 4);

  }

  private onTransform(types: string[], entity: Entity, obj: Entity[]): any[] {
    const personFields: any = [];
    const entityName = entity.entityName;
    entity.entityFields.forEach((field) => {
      const fieldData: FieldData = {
        fieldName: field.fieldName,
        required: field.fieldProperties.required,
        hidden: field.frontendProperties.hidden,
        type: this.onGetFieldType(types, field.fieldProperties.fieldType),
        fields: []
      };

      if (fieldData.type === 'object') {
        const locEntity = obj.filter(e => e.entityName === field.fieldProperties.fieldType)[0];
        locEntity.entityFields = locEntity.entityFields.filter(fi => fi.fieldProperties.fieldType !== entityName);
        fieldData.fields = this.onTransform(types, locEntity, obj);
      }

      personFields.push(fieldData);
    });

    return personFields;
  }

  onTransformJsonToPersonFields(types: string[], obj: Entity[]) {
    const personFields: any = [];
    obj.forEach(entity => {
      personFields.push({entityName: entity.entityName, fields: this.onTransform(types,entity,obj)});
    });

    return personFields;
  }

  onGetFieldType(types: string[], fieldType: string) {
    var type = types.filter(e => e === fieldType);
    if (type.length > 0) {
      return 'object';
    }
    return 'string';
  }

  onAddEndpoint() {
    this.form.endpoints.push(new Endpoint());
  }

  onUpload(e: any) {
    const file: File = e.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        try {
          const json = JSON.parse(e.target.result);
          if(json.mainPackage){
            this.form = json;
            this.form.entities.forEach(e => {
              if(!e.handlerAbstract){
                e.handlerAbstract = false;
              }
            });
            this.language = this.languages.filter(e => e.code = this.form.language)[0];
          }
        } catch (error) {
          console.error('Erro ao ler o JSON:', error);
        }
      };

      reader.readAsText(file);
    }
  }

  onChangeLanguage($event: DropdownChangeEvent) {
    console.log(this.language?.code);
    console.log($event);
  }


}
