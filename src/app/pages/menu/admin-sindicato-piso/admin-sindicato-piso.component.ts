import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-sindicato-piso',
  templateUrl: './admin-sindicato-piso.component.html',
  styleUrls: ['./admin-sindicato-piso.component.css']
})
export class AdminSindicatoPisoComponent implements OnInit {

  pisos: any[] = [];
  piso_selected: any = -1;

  sindicatos: any[] = [];

  cambios: any[]=[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPisos();
    this.getSindicato();
  }

  getPisos() {
    this.api.getPisos().subscribe(result => {
      this.pisos = result
    })
  }

  addPiso() {
    const formData = new FormData();
    formData.append('numero', (this.pisos.length + 1).toString());
    this.api.addPiso(formData).subscribe(result => this.getPisos())
  }

  deletePiso() {
    this.api.deletePiso(this.pisos[this.pisos.length - 1].id).subscribe(result => this.getPisos());
  }

  getSindicato() {
    this.api.getSindicato().subscribe(result => this.sindicatos = result)
  }

  addRow(row: any) {
    this.cambios.push(row);
  }

  comprobar(id: any) {
    return this.cambios.filter(e => e.id == id).length > 0
  }

  aplicar(){
    this.cambios.forEach((e, i) => {
      const formData = new FormData();
      formData.append('nombre', e.nombre);
      formData.append('siglas', e.siglas);
      formData.append('descripcion', e.descripcion);
      formData.append('piso', e.piso.id);
      this.api.updateSindicato(e.id, formData).subscribe(result => {
        if (i == this.cambios.length - 1) {
          this.getSindicato();
          this.getPisos();
          this.cambios = [];
        }
      }, error => {
        if (i == this.cambios.length - 1) {
          this.getSindicato();
          this.getPisos();
          this.cambios = [];
        }
      });
    });
  }
}
