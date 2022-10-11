import { BrowserModule } from '@angular/platform-browser';
import localEs from '@angular/common/locales/es';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
registerLocaleData(localEs, 'es');
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { VideosComponent } from './pages/videos/videos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuRoutingModule } from './pages/menu/menu-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { MenuModule } from './pages/menu/menu.module';
import { MenuItemComponent } from './pages/menu/menu-item/menu-item.component';
import { EliminarComponent } from './pages/components/eliminar/eliminar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
