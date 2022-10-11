import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSindicatoPisoComponent } from './admin-sindicato-piso/admin-sindicato-piso.component';
import { AdminSolicitudComponent } from './admin-solicitud/admin-solicitud.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { ListadoComponent } from './listado/listado.component';
import { SolicitudComponent } from './solicitud/solicitud.component';



const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'admin-solicitud', component: AdminSolicitudComponent },
  { path: 'admin-usuarios', component: AdminUsuariosComponent },
  { path: 'admin-sindicato-piso', component: AdminSindicatoPisoComponent },
  { path: 'form-usuario', component: FormUsuariosComponent },
  { path: 'consultar', component: ConsultaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
