import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = environment.url_backend;

  constructor(private http: HttpClient,
    private storage: SessionStorageService
  ) {

  }

  /**
   * Loguea a un usuario en el sistema
   * @param formData datos de usuario
   * @returns 
   */
  login(formData: FormData) {
    let direccion = this.url + 'login';
    return this.http.post(direccion, formData);
  }

  /**
   * Desloguea al usuario actual
   * @param formData datos del usuario
   * @returns 
   */
  logout(formData: FormData) {
    let direccion = this.url + 'logout';
    return this.http.post(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Obtiene todas las videoconferencias planificadas
   * @returns array videoconferencias
   */
  getVideoConferencias(): Observable<any[]> {
    let direccion = this.url + 'videoconferencia';
    return this.http.get<any[]>(direccion, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Agrega una videoconferencia al calendario
   * @param formData datos de una videoconferencia
   * @returns 
   */
  addVideoConferencia(formData: FormData) {
    let direccion = this.url + 'videoconferencia';
    return this.http.post(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Actualiza los datos de una videoconferencia
   * @param id de la videoconferencia
   * @param formData datos actualizados
   * @returns 
   */
  updatVideoConferencia(id: number, formData: FormData) {
    let direccion = this.url + 'videoconferencia/' + id;
    return this.http.put(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Elimina una videoconferencia
   * @param id de la videoconferencia
   * @returns 
   */
  deleteVideoConferencia(id: number) {
    let direccion = this.url + 'videoconferencia/' + id;
    return this.http.delete(direccion);
  }


}