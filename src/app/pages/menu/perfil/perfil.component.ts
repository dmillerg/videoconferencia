import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = {};
  constructor(private storage: SessionStorageService) { }

  ngOnInit(): void {
    if(this.storage.retrieve('usuario')){
      this.usuario = this.storage.retrieve('usuario')
    }
  }

}
