import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';

@Component({
  selector: 'app-entity-dropdown',
  standalone: true,
  imports: [SharedCommonModule],
  templateUrl: './entity-dropdown.component.html',
  styleUrl: './entity-dropdown.component.scss'
})
export class EntityDropdownComponent implements OnInit {

  @Input() httpMethod: String = "";
  @Output() updateHttpMethod = new EventEmitter<string>();


  methodName: any;
  methodNames = [
    { name: "GET", value: "GET"},
    { name: "POST", value: "POST"}
  ]

  ngOnInit(): void {
    this.methodName = this.methodNames.filter(e => e.name === this.httpMethod)[0];
  }

  onChange(e: any){
    this.httpMethod = e.value.name;
    this.updateHttpMethod.emit(e.value.name);
  }

}
