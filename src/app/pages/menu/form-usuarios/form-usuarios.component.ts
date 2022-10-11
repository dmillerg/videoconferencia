import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  usuario: any = {};
  usuarios: any[] = [];
  pisos: any = {};
  @Output() emisor: EventEmitter<any> = new EventEmitter<any>();

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getPisos();
    this.getUsuarios();
  }

  getPisos() {
    this.api.getPisos().subscribe(result => this.pisos = result);
    console.log(this.pisos);
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe(result => this.usuarios = result);
  }

  comprobarUsuario(item: any) {
    return this.usuarios.filter(e => e.usuario == this.usuario.usuario).length > 0;
  }

  addUsuario() {
    const formData = new FormData();
    formData.append('usuario', this.usuario.usuario)
    formData.append('password', this.usuario.password)
    formData.append('nombre', this.usuario.nombre)
    formData.append('correo', this.usuario.correo)
    formData.append('fecha_registro', this.usuario.fecha_registro)
    formData.append('ultima_sesion', this.usuario.ultima_sesion)
    formData.append('rol', this.usuario.rol)
    formData.append('piso', this.usuario.piso)
    this.api.addUsuario(formData).subscribe(result => {
      this.router.navigate(['menu/admin-usuarios']);
    }, error => {

    })
  }

  disabled() {
    return document.querySelectorAll('.error').length>0
  }
}
