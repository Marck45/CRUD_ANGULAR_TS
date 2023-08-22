import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './pages/homeapp/homeapp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsProductComponent } from './component/forms-product/forms-product.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';

const routes: Routes = [
  {
    path: '', component: HomeappComponent
  },
  {
    path: 'home', component: HomeappComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'cadastros', component: FormsProductComponent
  },
  {
    path: 'suporte', component: SuporteComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'produtos', component: ProdutosComponent
  },
  {
    path: 'produtosDetails', component:ProductsDetailsComponent
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})



export class AppRoutingModule { }
