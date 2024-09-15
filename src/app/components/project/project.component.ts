import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { EntityComponent } from "../entity/entity.component";
import { EntityGenerator } from '../../interfaces/entity';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TabViewModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    DropdownModule,
    EntityComponent
],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  public languages = [
    { name: 'Java', code: 'JAVA' },
    { name: 'C#', code: 'DOTNET' }
  ];

  public form: EntityGenerator = new EntityGenerator();
}
