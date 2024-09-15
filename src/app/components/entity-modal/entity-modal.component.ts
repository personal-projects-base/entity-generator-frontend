import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Entity } from '../../interfaces/entity';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-entity-modal',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ButtonModule,
    FloatLabelModule
  ],
  templateUrl: './entity-modal.component.html',
  styleUrl: './entity-modal.component.scss'
})
export class EntityModalComponent {

  entity: Entity = new Entity();

  constructor(public ref: DynamicDialogRef){}

  onSave() {
    this.ref.close(this.entity);
  }
  
}
