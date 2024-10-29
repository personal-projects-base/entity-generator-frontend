import { Component, Input } from '@angular/core';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';

@Component({
  selector: 'app-json-viewer',
  standalone: true,
  imports: [SharedCommonModule],
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.scss'
})
export class JsonViewerComponent {
  @Input() jsonText: string = "";

  onCopy(): void {
    navigator.clipboard.writeText(this.jsonText).then(() => {
      alert('Codigo disponivel na area de transferencia');
    }).catch(err => {

    })
  }
}
