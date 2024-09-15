import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entity-generator-frontend';


}
