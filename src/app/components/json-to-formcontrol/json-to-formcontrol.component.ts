import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';

@Component({
  selector: 'app-json-to-formcontrol',
  standalone: true,
  imports: [
    SharedCommonModule,
    SplitterModule
  ],
  templateUrl: './json-to-formcontrol.component.html',
  styleUrl: './json-to-formcontrol.component.scss'
})
export class JsonToFormcontrolComponent {

}
