import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  search: any = '';
  notificaciones: any[] = [];
  constructor(public storage: SessionStorageService, private api: ApiService, public router: Router) { }

  ngOnInit(): void {
this.getNotificaciones();
  }

  buscar() {
    this.storage.store('search', this.search);
  }


  logout() {
    const formData = new FormData();
    formData.append("id", this.storage.retrieve('usuario').id);
    this.api.logout(formData).subscribe(result => {
      this.storage.clear("usuario");
      this.router.navigate(['']);
    })
  }

  getNotificaciones() {
    this.api.notificaciones(this.storage.retrieve('usuario').id).subscribe(result => {
      this.notificaciones= result;
    })
  }

}
