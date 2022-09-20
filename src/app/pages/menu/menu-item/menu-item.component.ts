import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() imagen: string = ''
  @Input() titulo: string = ''
  @Input() subtitulo: string = ''
  @Input() descripcion: string = ''
  @Input() accion: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
