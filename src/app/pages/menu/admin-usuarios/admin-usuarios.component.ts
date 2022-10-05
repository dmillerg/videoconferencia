import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  loading: boolean = false;
  cambios: any[] = [];
  pisos: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.getPisos();
  }

  getUsuarios() {
    this.loading = true;
    this.api.getUsuarios().subscribe(result => {
      console.log(result);

      this.usuarios = result.filter(e => e.id != 1);
      this.loading = false;
    })
  }

  getPisos() {
    this.api.getPisos().subscribe(result => { this.pisos = result });
  }

  addRow(row: any) {
    const filt = this.cambios.filter(e => e.id === row.id);
    if (filt.length == 0) this.cambios.push(row);
  }

  comprobar(id: any) {
    return this.cambios.filter(e => e.id == id).length > 0
  }

  aplicar() {
    this.cambios.forEach((e, i) => {
      const formData = new FormData();
      formData.append('usuario', e.usuario);
      formData.append('nombre', e.nombre);
      formData.append('password', e.password);
      formData.append('correo', e.correo);
      formData.append('fecha_registro', e.fecha_registro);
      formData.append('ultima_session', e.ultima_session);
      formData.append('rol', e.rol);
      formData.append('piso', e.piso.id);
      this.api.updateUsuario(e.id, formData).subscribe(result => {
        if (i == this.cambios.length - 1) {
          this.getUsuarios();
          this.getPisos();
          this.cambios = [];
        }
      }, error => {
        if (i == this.cambios.length - 1) {
          this.getUsuarios();
          this.getPisos();
          this.cambios = [];
        }
      });
    });
  }
}
