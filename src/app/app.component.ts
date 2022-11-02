import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'videoconferencia';
  action: string = 'move';

  cambiarAction(actionNew: string){
    this.action = actionNew;
  }
}
