import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-sindicato',
  templateUrl: './form-sindicato.component.html',
  styleUrls: ['./form-sindicato.component.css']
})
export class FormSindicatoComponent implements OnInit {

  sindicato: any = {};
  pisos: any[] = [];
  @Output() emisor: EventEmitter<any> = new EventEmitter();
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPisos();
  }

  getPisos() {
    this.api.getPisos().subscribe(result => this.pisos = result);
    console.log(this.pisos);

  }

  disabled() {
    return this.sindicato.siglas == undefined ||
      this.sindicato.siglas == "" ||
      this.sindicato.nombre == undefined ||
      this.sindicato.nombre == "" ||
      this.sindicato.piso == undefined ||
      this.sindicato.descripcion == undefined ||
      this.sindicato.descripcion == "";
  }

  addSindicato() {
    const formData = new FormData();
    formData.append("siglas", this.sindicato.siglas);
    formData.append("nombre", this.sindicato.nombre);
    formData.append("descripcion", this.sindicato.descripcion);
    formData.append("piso", this.sindicato.piso);
    this.api.addSindicato(formData).subscribe(result => {
      this.emisor.emit();
    })
  }
}
