import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateFieldsComponent } from './create-fields/create-fields.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateFieldsComponent, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-drag-drop';
}
