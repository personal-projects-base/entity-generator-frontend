import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { EntityComponent } from "../entity/entity.component";
import { Entity, EntityGenerator } from '../../interfaces/entity';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EntityModalComponent } from '../entity-modal/entity-modal.component';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TabViewModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    DropdownModule,
    EntityComponent,
    ButtonModule,
    DynamicDialogModule
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

  onShowModal(): void {
    this.ref = this.dialogService.open(EntityModalComponent, 
      { header: 'Select a Product',
        width: '50vw',
        modal:true,
        maximizable: true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
      });

      this.ref.onClose.subscribe((entity: Entity) => {
        if (entity) {
            this.form.entities.push(entity);
        }
      });
  }
}
