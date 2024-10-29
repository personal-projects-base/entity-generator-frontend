import { Component, Input, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { Endpoint, Output, Input as InputEnd } from '../../interfaces/entity';
import { EntityDropdownComponent } from '../../shared/entity-dropdown/entity-dropdown.component';

@Component({
  selector: 'app-endpoints',
  standalone: true,
  imports: [
    AccordionModule,
    SharedCommonModule,
    EntityDropdownComponent
  ],
  templateUrl: './endpoints.component.html',
  styleUrl: './endpoints.component.scss'
})
export class EndpointsComponent {


  @Input() endpoints: Endpoint[] = [];

  methodName = "";
  methodNames = [
    { name: "GET", value: "GET"},
    { name: "POST", value: "POST"}
  ]


  onSetHttpMethod(value: any){
    return this.methodNames.filter(e => e.name === value)[0];
  }

  onRemove(endpoint: Endpoint[],index: number) {
    endpoint.splice(index, 1);
  }

  onAddInput(endpoint: Endpoint) {
    endpoint.metadata.input.push(new InputEnd())
  }

  onAddOutput(endpoint: Endpoint) {
    endpoint.metadata.output.push(new Output())
  }

  onRemoveParameter(obj: any[],index: number) {
    obj.splice(index,1);
  }

  updateValueHttpMethod(value: any, endpoint: Endpoint){
    endpoint.httpMethod = value;
  }
    
}
