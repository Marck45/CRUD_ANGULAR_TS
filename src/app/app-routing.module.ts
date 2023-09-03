import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './pages/homeapp/homeapp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsProductComponent } from './component/forms-product/forms-product.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { DashVendasComponent } from './pages/dash-vendas/dash-vendas.component';
import { DashFinancasComponent } from './pages/dash-financas/dash-financas.component';
import { CadVendasComponent } from './pages/cad-vendas/cad-vendas.component';
import { HitVendasComponent } from './pages/hit-vendas/hit-vendas.component';
import { DescontosComponent } from './pages/descontos/descontos.component';
import { CadClienteComponent } from './pages/cad-cliente/cad-cliente.component';
import { EditClienteComponent } from './pages/edit-cliente/edit-cliente.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { SupAcessosComponent } from './pages/sup-acessos/sup-acessos.component';
import { SupManuseiosComponent } from './pages/sup-manuseios/sup-manuseios.component';
import { SupFinancasComponent } from './pages/sup-financas/sup-financas.component';
import { CadFornecedorComponent } from './pages/cad-fornecedor/cad-fornecedor.component';
import { EditFornecedorComponent } from './pages/edit-fornecedor/edit-fornecedor.component';
import { EditDespesasComponent } from './pages/edit-despesas/edit-despesas.component';

const routes: Routes = [
  {
    path: '', component: HomeappComponent
  },
  {
    path: 'home', component: HomeappComponent
  },
  {
    path: 'dashEstoque', component: DashboardComponent
  },
  {
    path: 'cadEstoque', component: FormsProductComponent
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
  },
  {
    path: 'dashVendas', component:DashVendasComponent
  },
  {
    path: 'dashFinancas', component:DashFinancasComponent
  },
  {
    path: 'cadVendas', component:CadVendasComponent
  },
  {
    path: 'hitVendas', component:HitVendasComponent
  },
  {
    path: 'descontos', component:DescontosComponent
  },
  {
    path: 'cadCliente', component:CadClienteComponent
  },
  {
    path: 'editCliente', component:EditClienteComponent
  },
  {
    path: 'despesas', component:DespesasComponent
  },
  {
    path: 'editDespesas', component:EditDespesasComponent
  },
  {
    path: 'supAcessos', component:SupAcessosComponent
  },
  {
    path: 'supManuseio', component:SupManuseiosComponent
  },
  {
    path: 'supFinancas', component:SupFinancasComponent
  },
  {
    path: 'cadFornecedor', component:CadFornecedorComponent
  },
  {
    path: 'editFornecedor', component:EditFornecedorComponent
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})



export class AppRoutingModule { }
