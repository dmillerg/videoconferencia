import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSindicatoPisoComponent } from './admin-sindicato-piso/admin-sindicato-piso.component';
import { AdminSolicitudComponent } from './admin-solicitud/admin-solicitud.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { ListadoComponent } from './listado/listado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitudComponent } from './solicitud/solicitud.component';



const routes: Routes = [
  { path: 'listado', component: ListadoComponent, data: {animation: 'listado'} },
  { path: 'solicitud', component: SolicitudComponent, data: {animation: 'solicitud'} },
  { path: 'admin-solicitud', component: AdminSolicitudComponent, data: {animation: 'admin-solicitud'} },
  { path: 'admin-usuarios', component: AdminUsuariosComponent, data: {animation: 'admin-usuarios'} },
  { path: 'admin-sindicato-piso', component: AdminSindicatoPisoComponent, data: {animation: 'admin-sindicato-piso'} },
  { path: 'form-usuario', component: FormUsuariosComponent, data: {animation: 'form-usuario'} },
  { path: 'consultar', component: ConsultaComponent, data: {animation: 'consultar'} },
  { path: 'perfil', component: PerfilComponent, data: {animation: 'perfil'} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
