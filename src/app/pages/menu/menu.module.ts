import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { VideosComponent } from '../videos/videos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ListadoComponent } from './listado/listado.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CalendarioComponent } from 'src/app/components/calendario/calendario.component';
import { AdminSolicitudComponent } from './admin-solicitud/admin-solicitud.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { AdminSindicatoPisoComponent } from './admin-sindicato-piso/admin-sindicato-piso.component';
import { FormSindicatoComponent } from './form-sindicato/form-sindicato.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { EliminarComponent } from '../components/eliminar/eliminar.component';
import { ConsultaComponent } from './consulta/consulta.component';



@NgModule({
  declarations: [
    
    // VideosComponent,
    MenuItemComponent,
    ListadoComponent,
    SolicitudComponent,
    CalendarioComponent,
    EliminarComponent,
    AdminSolicitudComponent,
    AdminUsuariosComponent,
    AdminSindicatoPisoComponent,
    FormSindicatoComponent,
    FormUsuariosComponent,
    ConsultaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
