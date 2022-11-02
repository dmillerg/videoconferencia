import { Component } from '@angular/core';
import { photoShape } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [photoShape]
})
export class AppComponent {
  title = 'videoconferencia';
  action: string = 'move';

  cambiarAction(actionNew: string){
    this.action = actionNew;
  }
}
