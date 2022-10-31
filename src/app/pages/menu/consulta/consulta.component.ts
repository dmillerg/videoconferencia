import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  now = moment();
  selected: any = {}
  videoconferencias: any[] = [];
  search: string = ''
  constructor(private api: ApiService, public storage: SessionStorageService) { }

  ngOnInit(): void {
    this.getVideoConferencia();
    this.storage.store('page', "consultar");
    this.storage.observe('search').subscribe(result=>{
      this.search = result;
    })
  }

  getVideoConferencia() {
    this.api.getVideoConferencias().subscribe(result => this.videoconferencias = result)
  }

  comprobarFecha(item: any) {
    console.log(item);
    
  }
}
