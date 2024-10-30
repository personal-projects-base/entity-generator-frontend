import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { EntityComponent } from "../entity/entity.component";
import { Endpoint, Entity, EntityGenerator } from '../../interfaces/entity';

import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { JsonViewerComponent } from "../json-viewer/json-viewer.component";
import { EndpointsComponent } from "../endpoints/endpoints.component";
import { FileUploadEvent } from 'primeng/fileupload';
import { HttpClient, HttpHandler } from '@angular/common/http';



@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TabViewModule,
    EntityComponent,
    SharedCommonModule,
    JsonViewerComponent,
    EndpointsComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',

})
export class ProjectComponent {



  public languages = [
    { name: 'Java', code: 'JAVA' },
    { name: 'C#', code: 'DOTNET' }
  ];

  public form: EntityGenerator = new EntityGenerator();

  _entities: Entity[] = [];


  jsonViewer: string = "";

  language: any;

  constructor(){}

  onAddEntity(){
    this.form.entities.push(new Entity());
    //this._entities.push(new Entity());
  }

  onGenerate(): void {
    this.form.language = this.language?.code;
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
            this.language = this.languages.filter(e => e.code = this.form.language)[0];
          }
        } catch (error) {
          console.error('Erro ao ler o JSON:', error);
        }
      };
      
      reader.readAsText(file);
    }
  }

}
