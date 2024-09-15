import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    NgFor,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    CheckboxModule,
    DropdownModule
  ]
})
export class SharedCommonModule { }
