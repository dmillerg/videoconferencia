import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSolicitudComponent } from './admin-solicitud/admin-solicitud.component';
import { ListadoComponent } from './listado/listado.component';
import { SolicitudComponent } from './solicitud/solicitud.component';



const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'admin-solicitud', component: AdminSolicitudComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
