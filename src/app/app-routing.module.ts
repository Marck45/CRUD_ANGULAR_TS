import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './pages/homeapp/homeapp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsProductComponent } from './component/forms-product/forms-product.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
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
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeappComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'dashEstoque', component: DashboardComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'cadEstoque', component: FormsProductComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'suporte', component: SuporteComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'dashVendas', component:DashVendasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'dashFinancas', component:DashFinancasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'cadVendas', component:CadVendasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'hitVendas', component:HitVendasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'descontos', component:DescontosComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'cadCliente', component:CadClienteComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'editCliente', component:EditClienteComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'despesas', component:DespesasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'editDespesas', component:EditDespesasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'supAcessos', component:SupAcessosComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'supManuseio', component:SupManuseiosComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'supFinancas', component:SupFinancasComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'cadFornecedor', component:CadFornecedorComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'editFornecedor', component:EditFornecedorComponent, canActivate: [AuthGuardGuard]
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})



export class AppRoutingModule { }
