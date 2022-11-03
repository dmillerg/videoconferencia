import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { slideBottom, slideInAnimation } from 'src/app/animations';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [ slideInAnimation]
})
export class MenuComponent implements OnInit {

  search: any = '';
  notificaciones: any[] = [];
  action: string=''
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
      this.notificaciones = result;
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
