import { Component, signal } from '@angular/core';
import { SecondComponent } from './components/second-component/second-component';
import { ThirdComponent } from './components/third-component/third-component';
import { FourthComponent } from './components/fourth-component/fourth-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ SecondComponent, ThirdComponent, FourthComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Kevin = "app";
  protected readonly title = signal('Cheng-Kevin-Fila-B');

  public showName() {
    return "Kevin";
  }

  public showSurn() {
    return "Cheng";
  }

  public show(): void {
    alert("Salve, " + this.showName() + " " + this.showSurn() + "!");
  }

  public show2(): void {
    alert("Arrivederci, " + this.showName() + " " + this.showSurn() + "!");
  }

  showText = false;

  show_hide(): void {
    this.showText = !this.showText;
  }
}
