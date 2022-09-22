import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  now = moment();
  dias: number[] = [];
  weeknumber: number = 0;
  fecha: string = '';
  anno: number = this.now.year();
  month: number = this.now.month();
  day: number = this.now.date();
  selected: any;
  not_allowed: any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.rellenarCalendario();
  }

  rellenarCalendario() {
    const m = moment(this.anno + '-' + ((this.month + 1) < 10 ? '0' + (this.month + 1) : (this.month + 1)) + '-01');
    const cant = Number(m.daysInMonth());
    this.dias = Array(cant).fill(0).map((x, i) => i);
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
    this.selected = moment(moment(this.anno + '-' + ((this.month + 1) < 10 ? '0' + (this.month + 1) : (this.month + 1)) + '-' + ((this.day < 10) ? '0' + this.day : this.day)))
  console.log(this.selected);
  
  }
}
