import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() icono: string = '';
  @Input() imagen: string = ''
  @Input() titulo: string = ''
  @Input() subtitulo: string = ''
  @Input() descripcion: string = ''
  @Input() accion: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigatedTo() {
    this.router.navigate([this.accion])
  }
}
