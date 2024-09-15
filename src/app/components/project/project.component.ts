import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { EntityComponent } from "../entity/entity.component";
import { Entity, EntityGenerator } from '../../interfaces/entity';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EntityModalComponent } from '../entity-modal/entity-modal.component';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TabViewModule,
    DropdownModule,
    EntityComponent,
    DynamicDialogModule,
    SharedCommonModule
],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  providers: [DialogService]
})
export class ProjectComponent {
  public languages = [
    { name: 'Java', code: 'JAVA' },
    { name: 'C#', code: 'DOTNET' }
  ];

  public form: EntityGenerator = new EntityGenerator();
  ref: DynamicDialogRef | undefined;

  constructor(public readonly dialogService: DialogService){}

  onAddEntity(){
    this.form.entities.push(new Entity());
  }
}
