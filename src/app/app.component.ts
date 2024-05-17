import { Component } from '@angular/core';
import { GridExampleComponent } from './components/grid-example';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridExampleComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
