import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './pages/homeapp/homeapp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home', component: HomeappComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'cadastros', component: CadastroComponent
  },
  {
    path: 'suporte', component: SuporteComponent
  },
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({
  exports: [ RouterModule],
  imports: [RouterModule.forRoot(routes)],
})



export class AppRoutingModule { }
