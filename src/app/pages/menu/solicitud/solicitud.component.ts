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
    estado: 0,
    not_allowed: 0,
    cant_personas: '',
    sindicato: -1,
  };
  horario: number = -1;
  now = moment();

  disable_all: boolean = false;
  disable: boolean = false;

  not_allowed: any[] = [];
  selected: any = this.now.add(4, 'days');
  dates: any[] = [];

  horas_inicio: number[] = []
  minutos_inicio: number[] = [];
  horas_fin: number[] = []
  minutos_fin: number[] = [];

  sindicatos: any[] = [];
  usuarios: any[] = [];

  constructor(private api: ApiService, private storage: SessionStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getDates()
    this.getSindicatos();
    this.getUsuarios();
    this.rellenarHorasMin();
  }

  getDates() {
    this.api.getVideoConferencias().subscribe(result => {
      this.dates = result;
      result.forEach((e:any)=>{
        if( e.not_allowed) this.not_allowed.push(moment(e.fecha));
      })
    })
  }

  getSindicatos() {
    this.api.getSindicato().subscribe(result => {
      this.sindicatos = result;
    })
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe(result => {
      this.usuarios = result.filter(e=>e.rol=='usuario');
    })
  }

  addVideoConferencia() {
    // console.log(this.solicitud);
    // console.log(moment(this.selected.year()+'-'+this.selected.month()+'-'+this.selected.date()+' '+this.solicitud.hora_inicio+':'+this.solicitud.minuto_inicio));
    // console.log(moment(this.selected.year()+'-'+this.selected.month()+'-'+this.selected.date()+' '+this.solicitud.hora_fin+':'+this.solicitud.minuto_fin));
    const hi = moment(this.selected.year() + '-' + this.selected.month() + '-' + this.selected.date() + ' ' + this.solicitud.hora_inicio + ':' + this.solicitud.minuto_inicio)
    const hf = moment(this.selected.year() + '-' + this.selected.month() + '-' + this.selected.date() + ' ' + this.solicitud.hora_fin + ':' + this.solicitud.minuto_fin)
    const formData = new FormData();
    formData.append('nombre', this.solicitud.nombre);
    formData.append('descripcion', this.solicitud.descripcion);
    formData.append('citado_por', this.solicitud.citado_por);
    formData.append('mannana', this.horario == 0 ? '1' : '0');
    formData.append('tarde', this.horario == 0 ? '0' : '1');
    formData.append('fecha', this.selected.toString());
    formData.append('hora_inicio', hi.toString());
    formData.append('hora_fin', hf.toString());
    formData.append('estado', this.solicitud.estado);
    formData.append('not_allowed', this.solicitud.not_allowed);
    formData.append('cant_personas', this.solicitud.cant_personas);
    formData.append('encargado', '1');
    formData.append('tecnico_respaldo', '1');
    formData.append('salon', '-1');
    formData.append('sindicato', this.solicitud.sindicato);

    this.api.addVideoConferencia(formData).subscribe(result => {
      this.router.navigate(['menu/listado']);

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
      this.horario = this.solicitud.mannana && this.solicitud.tarde ? 2 : this.solicitud.tarde ? 0 : 1
      this.disable = true
    } else {
      this.solicitud.mannana = 0
      this.solicitud.tarde = 0
      this.horario = this.solicitud.mannana && this.solicitud.tarde ? 2 : this.solicitud.tarde ? 1 : 0
      this.disable = false
    }
    this.rellenarHorasMin()
  }

  rellenarHorasMin() {
    this.solicitud.hora_fin = -1
    this.solicitud.hora_inicio = -1
    this.solicitud.minuto_fin = -1
    this.solicitud.minuto_inicio = -1
    this.minutos_fin = Array(6).fill(0).map((x, i) => i * 10);

    if (this.horario == 0) {
      this.horas_inicio = Array(5).fill(8).map((x, i) => x + i);
      this.minutos_inicio = Array(6).fill(0).map((x, i) => i * 10);
      this.horas_fin = Array(5).fill(8).map((x, i) => x + i);
    }
    else if (this.horario == 1) {
      this.horas_inicio = Array(5).fill(1).map((x, i) => x + i);
      this.minutos_inicio = Array(6).fill(0).map((x, i) => i * 10);
      this.horas_fin = Array(5).fill(1).map((x, i) => x + i);
    } else {
      this.horas_inicio = Array(10).fill(8).map((x, i) => x + i);
      this.minutos_inicio = Array(6).fill(0).map((x, i) => i * 10);
      this.horas_fin = Array(10).fill(8).map((x, i) => x + i);
    }
    this.error();
  }

  error() {
    console.log('hora fin', Number(this.solicitud.hora_fin), ' hora inicio ', Number(this.solicitud.hora_inicio));
    console.log('minuto fin', Number(this.solicitud.minuto_fin), ' minuto_inicio ', Number(this.solicitud.minuto_inicio));

    console.log('condicion', (Number(this.solicitud.hora_fin) * 60 + Number(this.solicitud.minuto_fin)) - (Number(this.solicitud.hora_inicio) * 60 + Number(this.solicitud.minuto_inicio)));
    console.log('inicio', Number(this.solicitud.hora_inicio * 60 + this.solicitud.minuto_inicio));
    console.log('fin', Number(this.solicitud.hora_fin * 60 + Number(this.solicitud.minuto_fin)));
    console.log('====================================');

    return (Number(this.solicitud.hora_fin) * 60 + Number(this.solicitud.minuto_fin)) - (Number(this.solicitud.hora_inicio) * 60 + Number(this.solicitud.minuto_inicio)) < 60;
  }
}
