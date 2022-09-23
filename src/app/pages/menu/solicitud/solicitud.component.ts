import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: any = {
    nombre: '',
    descripcion: '',
    citado_por: '',
    mannana: true,
    tarde: false,
    hora_inicio: '',
    hora_fin: '',
    estado: 'en espera',
    not_allowed: 0
  };

  constructor(private api: ApiService,private storage: SessionStorageService, private router: Router) { }

  ngOnInit(): void {

  }

  addVideoConferencia(){
    console.log(this.solicitud);
    const formData = new FormData();
    formData.append('nombre', this.solicitud.nombre);
    formData.append('descripcion', this.solicitud.descripcion);
    formData.append('citado_por', this.solicitud.citado_por);
    formData.append('mannana', this.solicitud.mannana);
    formData.append('tarde', this.solicitud.tarde);
    formData.append('hora_inicio', this.solicitud.hora_inicio);
    formData.append('hora_fin', this.solicitud.hora_fin);
    formData.append('estado', this.solicitud.estado);
    formData.append('not_allowed', this.solicitud.not_allowed);
    this.api.addVideoConferencia(formData).subscribe(result=>{
      console.log(result);
      
    }, error=>{
      console.log(error);
      
    })
  }

}
