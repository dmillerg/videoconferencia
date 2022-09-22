import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { VideosComponent } from '../videos/videos.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ListadoComponent } from './listado/listado.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CalendarioComponent } from 'src/app/components/calendario/calendario.component';
import { CalendarComponent } from 'src/app/cal/calendar.component';



@NgModule({
  declarations: [
    VideosComponent,
    MenuItemComponent,
    ListadoComponent,
    SolicitudComponent,
    CalendarioComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
