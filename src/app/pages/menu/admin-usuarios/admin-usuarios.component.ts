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
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.loading = true;
    this.api.getUsuarios().subscribe(result => {
      this.usuarios = result.filter(e=>e.id!=1);
      this.loading = false;
    })
  }
}
