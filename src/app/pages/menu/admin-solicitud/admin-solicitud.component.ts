import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-solicitud',
  templateUrl: './admin-solicitud.component.html',
  styleUrls: ['./admin-solicitud.component.css']
})
export class AdminSolicitudComponent implements OnInit {

  videoconferencias: any[] = [];
  tecnicos: any[] = [];
  cambios: any[] = [];
  loading: boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getVideoConferencias();
    this.getTecnicos();
  }

  getVideoConferencias() {
    this.loading = true;
    this.api.getVideoConferencias().subscribe(result => {
      this.videoconferencias = result;
      this.loading = false;
    });
  }

  getTecnicos() {
    this.api.getUsuarios().subscribe(result => {
      this.tecnicos = result.filter(e => e.rol == 'técnico');
    });
  }

  addRow(row: any) {
    this.cambios.push(row);
  }

  comprobar(id: any) {
    return this.cambios.filter(e => e.id == id).length > 0
  }

  aplicar() {
    this.cambios.forEach((e, i) => {
      const formData = new FormData();
      formData.append('nombre', e.nombre);
      formData.append('descripcion', e.descripcion);
      formData.append('citado_por', e.citado_por);
      formData.append('mannana', e.mannana);
      formData.append('tarde', e.tarde);
      formData.append('fecha', e.fecha);
      formData.append('hora_inicio', e.hora_inicio);
      formData.append('hora_fin', e.hora_fin);
      formData.append('estado', e.estado);
      formData.append('not_allowed', e.not_allowed);
      formData.append('cant_personas', e.cant_personas);
      formData.append('encargado', e.encargado.id);
      formData.append('tecnico_respaldo', e.tecnico_respaldo.id);
      formData.append('salon', e.salon);
      this.api.updatVideoConferencia(e.id, formData).subscribe(result => {
        if (i == this.cambios.length - 1) {
          this.getVideoConferencias();
          this.getTecnicos();
          this.cambios = [];
        }
      }, error => {
        if (i == this.cambios.length - 1) {
          this.getVideoConferencias();
          this.getTecnicos();
          this.cambios = [];
        }
      });
    });
  }
}
