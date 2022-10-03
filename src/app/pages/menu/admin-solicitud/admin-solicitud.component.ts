import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-solicitud',
  templateUrl: './admin-solicitud.component.html',
  styleUrls: ['./admin-solicitud.component.css']
})
export class AdminSolicitudComponent implements OnInit {

  videoconferencias: any[] = [];
  tecnicos: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getVideoConferencias();
    this.getTecnicos();
  }

  getVideoConferencias() {
    this.api.getVideoConferencias().subscribe(result => {
      this.videoconferencias = result;
    });
  }

  getTecnicos() {
    this.api.getUsuarios().subscribe(result => {
      this.tecnicos = result.filter(e => e.rol == 'técnico');
    }
    );
  }
}
