import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { EntityComponent } from "../entity/entity.component";
import { Endpoint, Entity, EntityGenerator } from '../../interfaces/entity';

import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { JsonViewerComponent } from "../json-viewer/json-viewer.component";
import { EndpointsComponent } from "../endpoints/endpoints.component";


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

    this.form.entities.forEach(e => [
      e.entityFields.forEach(field => {
        if(field.relationShips){
          if(field.relationShips.fetchType === 'None'){
            delete (field as any).relationShips;
          }
        }
      })
    ])
    this.jsonViewer = JSON.stringify(this.form,null, 2);
  }

  onAddEndpoint() {
    this.form.endpoints.push(new Endpoint());
  }
}
