import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  menu: any[] = [
    {
      icono: 'bi-clipboard-check',
      imagen: '',
      titulo: 'Consultar',
      subtitulo: 'Consultar el estado de mis peticiones',
      descripcion: 'Las peticiones de las videoconferencias cuentan con tres estados: en espera, aprobado, rechazado.',
      accion: 'menu/consultar',
    },
    {
      icono: 'bi-journal-text',
      imagen: '',
      titulo: 'Solicitud',
      subtitulo: 'Solicitar una videoconferencia',
      descripcion: 'Las videoconferencias pueden ser reservadas desde aqui siempre y cuando el dia este disponible en el calendario.',
      accion: 'menu/solicitud',
    },
    {
      icono: 'bi-kanban-fill',
      imagen: '',
      titulo: 'Solicitudes',
      subtitulo: 'Administrar las solicitudes',
      descripcion: 'Administra las solicitudes cambiando el estado, tecnico, tecnico de respaldo y salon de se realizará la videoconferencia, a esta sección solo tendrá acceso el administrador del sitio.',
      accion: 'menu/admin-solicitud',
    },
    {
      icono: 'bi-person-fill',
      imagen: '',
      titulo: 'Usuarios',
      subtitulo: 'Administrar los usuarios',
      descripcion: 'Administra todos los usuarios del sistema pudiendo editar cada aspectos de estos.',
      accion: 'menu/admin-solicitud',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
