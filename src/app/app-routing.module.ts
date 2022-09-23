import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuRoutingModule } from './pages/menu/menu-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, loadChildren: () => import('./pages/menu/menu-routing.module').then(mod => mod.MenuRoutingModule),  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
