import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  now = moment();
  dias: any[] = [];
  weeknumber: number = 0;
  fecha: string = '';

  @Input() selected: any;
  @Input() not_allowed: any[] = [];
  @Input() dates: any[] = [];
  anno: number = this.now.year();
  month: number = this.now.month();
  day: number = this.now.date();
  @Output() emisor: EventEmitter<any> = new EventEmitter();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.rellenarCalendario();
    this.anno = this.selected.year();
    this.month = this.selected.month();
    this.day = this.selected.date();
  }

  rellenarCalendario() {
    this.dias = [];
    const m = moment(this.anno + '-' + ((this.month + 1) < 10 ? '0' + (this.month + 1) : (this.month + 1)) + '-01');
    const cant = Number(m.daysInMonth());
    // this.dias = Array(cant).fill(0).map((x, i) => {dia: i, });
    for (let i = 1; i <= cant; i++) {
      this.dias.push({ dia: i, detalles: [] })
    }

    this.weeknumber = m.weekday();
    this.fecha = m.toLocaleString();
  }

  cambiarMes(opcion: string) {
    if (opcion == 'mas') {
      if (this.month == 11) this.cambiarAnno('mas');
      this.month = this.month == 11 ? 0 : this.month + 1;
    } else {
      if (this.month == 0) this.cambiarAnno('menos');
      this.month = this.month == 0 ? 11 : this.month - 1;
    }
    this.rellenarCalendario();
  }



  cambiarAnno(opcion: string) {
    if (opcion == 'mas') this.anno++; else this.anno--;
  }

  select(dia: number) {
    this.day = dia;
    const date = {
      day: dia,
      month: this.month,
      anno: this.anno
    }
    this.selected = moment(moment(this.anno + '-' + ((this.month + 1) < 10 ? '0' + (this.month + 1) : (this.month + 1)) + '-' + ((this.day < 10) ? '0' + this.day : this.day)))
    this.emisor.emit(date);
  }

  not_alloweds(day: number) {
    var b = false;
    this.not_allowed.forEach(item => {
      if (item.date() == day && item.month() == this.month) b = true;
    })
    // console.log('returrn ', b);
    return b;
  }

  occupied_partials(day: any) {
    var cont = 0;
    day.detalles = [];
    let entero = false;
    this.dates.forEach(item => {
      if (moment(item.fecha).date() === day.dia && moment(item.fecha).month() === this.month && moment(item.fecha).year() == this.anno && (item.mannana && item.tarde)) {
        entero = true;
        day.detalles.push(`videoconferencia:${item.nombre} \n descripcion: ${item.descripcion} \n horario: ${moment(item.hora_inicio).format('HH:mm a')} - ${moment(item.hora_fin).format('HH:mm a')}`)
      } else if (moment(item.fecha).date() === day.dia && moment(item.fecha).month() === this.month && moment(item.fecha).year() == this.anno && (item.mannana || item.tarde)) {
        day.detalles.push(`videoconferencia:${item.nombre} \n descripcion: ${item.descripcion} \n horario: ${moment(item.hora_inicio).format('HH:mm a')} - ${moment(item.hora_fin).format('HH:mm a')}`)
        cont++;
      }

    });

    return entero ? 'occupied-total' : cont == 1 ? 'occupied-partial' : cont == 2 ? 'occupied-total' : '';
  }
}
