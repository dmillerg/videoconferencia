import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { VideosComponent } from '../videos/videos.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    VideosComponent,
    MenuItemComponent,
    ListadoComponent,

  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
