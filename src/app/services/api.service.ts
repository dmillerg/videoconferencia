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


  /**
  * Obtiene todas las videoconferencias planificadas
  * @returns array videoconferencias
  */
  getUsuarios(): Observable<any[]> {
    let direccion = this.url + 'usuario';
    return this.http.get<any[]>(direccion, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Agrega un usuario 
   * @param formData datos de un usuario
   * @returns 
   */
  addUsuario(formData: FormData) {
    let direccion = this.url + 'usuario';
    return this.http.post(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Actualiza los datos de un usuario
   * @param id del usuario
   * @param formData datos actualizados
   * @returns 
   */
  updateUsuario(id: number, formData: FormData) {
    let direccion = this.url + 'usuario/' + id;
    return this.http.put(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Actualiza la contraseña de un usuario
   * @param formData datos actualizados
   * @returns 
   */
   updatePassword(formData: FormData) {
    let direccion = this.url + 'usuario';
    return this.http.put(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
  * Elimina un usuario
  * @param id del usuario
  * @returns 
  */
  deleteUsuario(id: number) {
    let direccion = this.url + 'usuario/' + id;
    return this.http.delete(direccion);
  }

  /**
   * Obtiene todos los pisos 
   * @returns array pisos
   */
   getPisos(): Observable<any[]> {
    let direccion = this.url + 'piso';
    return this.http.get<any[]>(direccion, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Agrega un piso
   * @param formData datos de un piso
   * @returns 
   */
  addPiso(formData: FormData) {
    let direccion = this.url + 'piso';
    return this.http.post(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Actualiza los datos de un piso
   * @param id del piso
   * @param formData datos actualizados
   * @returns 
   */
  updatePiso(id: number, formData: FormData) {
    let direccion = this.url + 'piso/' + id;
    return this.http.put(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Elimina un piso
   * @param id del piso
   * @returns 
   */
  deletePiso(id: number) {
    let direccion = this.url + 'piso/' + id;
    return this.http.delete(direccion);
  }

  /**
  * Obtiene todos los sindicatos
  * @returns array sindicatos
  */
   getSindicato(): Observable<any[]> {
    let direccion = this.url + 'sindicato';
    return this.http.get<any[]>(direccion, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Agrega un sindicato 
   * @param formData datos de un sindicato
   * @returns 
   */
  addSindicato(formData: FormData) {
    let direccion = this.url + 'sindicato';
    return this.http.post(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
   * Actualiza los datos de un sindicato
   * @param id del sindicato
   * @param formData datos actualizados
   * @returns 
   */
  updateSindicato(id: number, formData: FormData) {
    let direccion = this.url + 'sindicato/' + id;
    return this.http.put(direccion, formData, { params: { token: this.storage.retrieve('usuario').token } });
  }

  /**
  * Elimina un sindicato
  * @param id del sindicato
  * @returns 
  */
  deleteSindicato(id: number) {
    let direccion = this.url + 'sindicato/' + id;
    return this.http.delete(direccion);
  }
}