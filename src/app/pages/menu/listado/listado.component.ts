import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  menu: any[] = [
    {
      icono: 'bi-clipboard-check',
      imagen: 'assets/icons/consulta.png',
      imagen_hover: 'assets/icons/consultahover.apng',
      titulo: 'Consultar',
      subtitulo: 'Consultar el estado de mis peticiones',
      descripcion: 'Las peticiones de las videoconferencias cuentan con tres estados: en espera, aprobado, rechazado.',
      accion: 'menu/consultar',
      rol: 'usuario'
    },
    {
      icono: 'bi-journal-text',
      imagen: 'assets/icons/video.png',
      imagen_hover: 'assets/icons/videohover.apng',
      titulo: 'Solicitud',
      subtitulo: 'Solicitar una videoconferencia',
      descripcion: 'Las videoconferencias pueden ser reservadas desde aqui siempre y cuando el dia este disponible en el calendario.',
      accion: 'menu/solicitud',
      rol: 'usuario'
    },
    {
      icono: 'bi-kanban-fill',
      imagen: 'assets/icons/solicitud.png',
      imagen_hover: 'assets/icons/solicitudhover.apng',
      titulo: 'Solicitudes',
      subtitulo: 'Administrar las solicitudes',
      descripcion: 'Administra las solicitudes cambiando el estado, tecnico, tecnico de respaldo y salon de se realizará la videoconferencia, a esta sección solo tendrá acceso el administrador del sitio.',
      accion: 'menu/admin-solicitud',
      rol: 'admin'
    },
    {
      icono: 'bi-person-fill',
      imagen: 'assets/icons/usuarios.png',
      imagen_hover: 'assets/icons/usuarioshover.apng',
      titulo: 'Usuarios',
      subtitulo: 'Administrar los usuarios',
      descripcion: 'Administra todos los usuarios del sistema pudiendo editar cada aspectos de estos.',
      accion: 'menu/admin-usuarios',
      rol: 'admin'
    },
    {
      icono: 'bi-building',
      imagen: 'assets/icons/piso.png',
      imagen_hover: 'assets/icons/pisohover.apng',
      titulo: 'Pisos y Sindicatos',
      subtitulo: 'Administrar los pisos y sindicatos de la ctc',
      descripcion: 'Permite gestionar los pisos y sindicatos correspondientes a esos pisos.',
      accion: 'menu/admin-sindicato-piso',
      rol: 'admin'
    },
  ]
  constructor(public storage: SessionStorageService) { }

  ngOnInit(): void {
  }

}
