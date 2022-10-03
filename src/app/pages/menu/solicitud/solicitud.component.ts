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
    hora_inicio: 8,
    minuto_inicio: 0,
    hora_fin: 8,
    minuto_fin: 0,
    estado: 'en espera',
    not_allowed: 0,
    cant_personas: '',
  };
  horario: number = 0;
  now = moment();

  disable_all: boolean = false;
  disable: boolean = false;

  not_allowed: any[] = [moment('2022-10-23')];
  selected: any = this.now;
  dates: any[] = [];

  horas_inicio: number[] = []
  minutos_inicio: number[] = [];
  horas_fin: number[] = []
  minutos_fin: number[] = [];

  constructor(private api: ApiService, private storage: SessionStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getDates()
this.rellenarHorasMin();
  }

  getDates() {
    this.api.getVideoConferencias().subscribe(result => {
      this.dates = result;
      console.log(result);
    })
  }

  addVideoConferencia() {
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
    this.api.addVideoConferencia(formData).subscribe(result => {
      console.log(result);

    }, error => {
      console.log(error);
    })
  }

  select(date: any) {
    this.selected = moment(moment(date.anno + '-' + ((date.month + 1) < 10 ? '0' + (date.month + 1) : (date.month + 1)) + '-' + ((date.day < 10) ? '0' + date.day : date.day)))

    const l = this.dates.filter(e => {
      return moment(e.fecha).format('yyyy-MM-DD') == this.selected.format('yyyy-MM-DD')
    });

    // console.log(l[0]);
    if (l.length > 0) {
      this.solicitud.mannana = l[0].mannana
      this.solicitud.tarde = l[0].tarde
      this.horario = this.solicitud.mannana && this.solicitud.tarde ? 2 : this.solicitud.tarde ? 1 : 0
      this.disable = true
    } else {
      this.solicitud.mannana = 0
      this.solicitud.tarde = 0
      this.horario = 0
      this.disable = false
    }
  }

  rellenarHorasMin() {
    console.log(this.solicitud.hora_inicio);
    
    if (this.horario == 0) {
      this.horas_inicio = Array(5).fill(8).map((x, i) => x + i);
      this.minutos_inicio = Array(7).fill(0).map((x, i) => i*10);
      this.horas_fin = Array(13-Number(this.solicitud.hora_inicio)).fill(Number(this.solicitud.hora_inicio)).map((x, i) => x + i);
      this.minutos_fin = Array(7-(Number(this.solicitud.minuto_inicio)/10)).fill(Number(this.solicitud.minuto_inicio)).map((x, i) => (x/10+i)*10);
    }
    else if(this.horario == 1){
      this.horas_inicio = Array(5).fill(1).map((x, i) => x + i);
      this.minutos_inicio = Array(7).fill(0).map((x, i) => i*10);
      this.horas_fin = Array(6-Number(this.solicitud.hora_inicio)).fill(Number(this.solicitud.hora_inicio)).map((x, i) => x + i);
      this.minutos_fin = Array(7-(Number(this.solicitud.minuto_inicio)/10)).fill(Number(this.solicitud.minuto_inicio)).map((x, i) => (x/10+i)*10);
    }else{
      this.horas_inicio = Array(10).fill(8).map((x, i) => x + i);
      this.minutos_inicio = Array(7).fill(0).map((x, i) => i*10);
      this.horas_fin = Array(18-Number(this.solicitud.hora_inicio)).fill(Number(this.solicitud.hora_inicio)).map((x, i) => x + i);
      this.minutos_fin = Array(7-(Number(this.solicitud.minuto_inicio)/10)).fill(Number(this.solicitud.minuto_inicio)).map((x, i) => (x/10+i)*10);
    }
  }
}
