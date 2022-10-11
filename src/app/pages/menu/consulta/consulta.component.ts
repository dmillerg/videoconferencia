import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  selected: any={}
  videoconferencias: any[]=[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getVideoConferencia();
  }

  getVideoConferencia(){
    this.api.getVideoConferencias().subscribe(result=> this.videoconferencias= result)
  }

}
