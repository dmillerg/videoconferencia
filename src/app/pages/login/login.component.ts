import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { listAnimation, loginAnimation, dvelox, slideBottom, slideTop } from 'src/app/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [slideTop, loginAnimation, dvelox]
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  password: string = '';
  action: string=''
  constructor(private api: ApiService,private storage: SessionStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const formData = new FormData();
    formData.append('usuario', this.usuario);
    formData.append('password', this.password);
    this.api.login(formData).subscribe((result:any)=>{
      let user = result.usuario;
      user.token = result.token;
      this.storage.store('usuario',user);
      this.router.navigate(['menu/listado'])
    }, error => { console.log(error);
    })
  }
}
