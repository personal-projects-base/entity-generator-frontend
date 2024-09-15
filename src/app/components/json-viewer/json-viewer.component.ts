import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  standalone: true,
  imports: [],
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.scss'
})
export class JsonViewerComponent {
  @Input() jsonText: string = "";
}
