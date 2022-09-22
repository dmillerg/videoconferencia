import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

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

  }

  

}
