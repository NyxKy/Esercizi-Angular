import { Component, signal } from '@angular/core';
import { SecondComponent } from './components/second-component/second-component';
import { ThirdComponent } from './components/third-component/third-component';
import { FourthComponent } from './components/fourth-component/fourth-component';

@Component({
  selector: 'app-root',
  imports: [ SecondComponent, ThirdComponent, FourthComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cheng-Kevin-Fila-B');
}
