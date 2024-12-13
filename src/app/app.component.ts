import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateFieldsComponent } from './create-fields/create-fields.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateFieldsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-drag-drop';
}
