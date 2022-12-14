import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { listAnimation, slideBottom } from 'src/app/animations';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css'],
  animations: [slideBottom, listAnimation]
})
export class AdminUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  loading: boolean = false;
  cambios: any[] = [];
  pisos: any[] = [];
  eliminando: boolean = false;
  id: number = -1;
  searchfilter: any = '';
  descripcion: string = '';
  constructor(private api: ApiService, private storage: SessionStorageService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.getPisos();
    this.searchFilter();
    this.storage.store('page', "admin-usuarios")
  }

  searchFilter() {
    this.storage.observe('search').subscribe(result => {
      console.log(result);
      if (this.storage.retrieve('page') == "admin-usuarios")
        this.searchfilter = result;
    });
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

  eliminar(event: any) {
    if (event == "aceptar") {
      this.api.deleteUsuario(this.id).subscribe(result => {
        this.getUsuarios();
        this.getPisos();
        this.cambios = [];
        this.eliminando = false;
        this.descripcion = '';
      })
    } else if (event == 'cancelar') {
      this.eliminando = false;
      this.descripcion = '';
    }
  }

  comprobarBorrar(id: number) {
    this.api.notificaciones(id).subscribe(result => {
      this.eliminando = true;
      if (result.length > 0) {
        this.descripcion = `Este usuario ya ha realizado estas videoconferencias: ${result.map(e=>e.nombre+',')}\n
         y no va a ser posible eliminarlo. Si aun asi desea eliminarlo, recuerde que los datos de algunas videoconferencias se perder??n.`;
      } else this.descripcion = '';
    })
  }
}
