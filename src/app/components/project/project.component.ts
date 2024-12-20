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
    this.jsonViewer = JSON.stringify(obj,null, 2);
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
