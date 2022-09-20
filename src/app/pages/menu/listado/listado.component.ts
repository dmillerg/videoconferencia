import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  menu: any[] = [
    {
      imagen: '',
      titulo: 'Consultar',
      subtitulo: 'Consultar el estado de mis peticiones',
      descripcion: 'Las peticiones de las videoconferencias cuentan con tres estados: en espera, aprobado, rechazado.',
      accion: 'consultar',
    },
    {
      imagen: '',
      titulo: 'Pedir',
      subtitulo: 'Citar una videoconferencia',
      descripcion: 'Las videoconferencias pueden ser reservadas desde aqui siempre y cuando el dia este disponible en el calendario.',
      accion: 'citar',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
