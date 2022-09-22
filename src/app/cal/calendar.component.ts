import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  //month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  constructor() { }

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  monthSelect: any[] = [];
  dateSelect: any;
  daySelect: number = parseInt(moment().format("DD"))
  mes: any = moment().format("MM")
  now = moment();

  ngOnInit(): void {
    this.getDaysFromDate(this.now.month(), this.now.year())
  }

  getDaysFromDate(month: number, year: number) {
    const startDate = moment.utc(`${year}/${month+1}/01`)
    console.log('este es el mes',month);
    
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays)
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1
      console.log('este es A',a);
      const dayObject = moment(`${year}-${month}-${a}`);
      console.log('bbbbbb:', month);
      
      return { name: dayObject.format("dddd"), value: a, indexWeek: dayObject.isoWeekday() }
    })
    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const nextDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
    else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDate(day: any) {
    const monthYear = this.dateSelect.format("YYYY-MM")
    const parse = `${monthYear}-${day.value}`
    console.log(parse)
  }
}
