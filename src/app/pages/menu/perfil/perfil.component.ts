import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = {};
  password: string = '';
  confirm: string = '';
  cambiarPass: boolean = false;
  constructor(public storage: SessionStorageService,
    private api: ApiService) { }

  ngOnInit(): void {
   this.rellenarUser();
  }

  editar() {
    const formData = new FormData();
    formData.append('usuario', this.usuario.usuario);
    formData.append('nombre', this.usuario.nombre);
    formData.append('correo', this.usuario.correo);
    formData.append('fecha_registro', this.usuario.fecha_registro);
    formData.append('rol', this.usuario.rol);
    formData.append('piso', this.usuario.piso);
    this.api.updateUsuario(this.usuario.id, formData).subscribe(result => {
      const formDataPass = new FormData();
      formData.append('id', this.usuario.id);
      formData.append('password', this.password);
      this.api.updatePassword(formDataPass).subscribe(
        result => console.log('ok'),
        error => console.log(error)
      )
    })
  }

  validar() {
    return document.querySelectorAll('.modificado').length == 0 && this.password.length==0;
  }

  rellenarUser(){
    if (this.storage.retrieve('usuario')) {
      this.usuario.usuario = this.storage.retrieve('usuario').usuario
      this.usuario.nombre = this.storage.retrieve('usuario').nombre
      this.usuario.correo = this.storage.retrieve('usuario').correo
      this.usuario.fecha_registro = this.storage.retrieve('usuario').fecha_registro
      this.usuario.rol = this.storage.retrieve('usuario').rol
      this.usuario.usuario = this.storage.retrieve('usuario').usuario
    }
  }
}
