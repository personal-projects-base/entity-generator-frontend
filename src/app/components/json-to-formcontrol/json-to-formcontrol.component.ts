import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { SharedCommonModule } from '../../modules/shared-common/shared-common.module';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-json-to-formcontrol',
  standalone: true,
  imports: [
    SharedCommonModule,
    SplitterModule,
    MonacoEditorModule
  ],
  providers: [
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        baseUrl: 'assets',
      },
    },
  ],
  templateUrl: './json-to-formcontrol.component.html',
  styleUrl: './json-to-formcontrol.component.scss'
})
export class JsonToFormcontrolComponent implements OnInit {
 
  
  editorOptions = {theme: 'vs-dark', language: 'json'};

  input: string = "";

  ngOnInit(): void {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    setTimeout(() => {
      const editor = (window as any).monaco.editor.getModels()[0];
      if (editor) {
        editor.layout();
      }
    }, 0);
  }


}
