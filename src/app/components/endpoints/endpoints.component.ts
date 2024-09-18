import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { Endpoint, Output } from '../../interfaces/entity';

@Component({
  selector: 'app-endpoints',
  standalone: true,
  imports: [
    AccordionModule,
    SharedCommonModule
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


  onRemove(endpoint: Endpoint[],index: number) {
    endpoint.splice(index, 1);
  }

  onAddInput(endpoint: Endpoint) {
    endpoint.metadata.input.push(new Input())
  }

  onAddOutput(endpoint: Endpoint) {
    endpoint.metadata.output.push(new Output())
  }

  onRemoveParameter(obj: any[],index: number) {
    obj.splice(index,1);
  }
    
}
