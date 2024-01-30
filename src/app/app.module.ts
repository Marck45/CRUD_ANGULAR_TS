import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { FormsProductComponent } from './component/forms-product/forms-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeappComponent } from './pages/homeapp/homeapp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuSideComponent } from './component/menu-side/menu-side.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { BarSearchComponent } from './component/bar-search/bar-search.component';
import { ButtonComponent } from './component/button/button.component';
import { TitlePageComponent } from './component/title-page/title-page.component';
import { SubTitleComponent } from './component/sub-title/sub-title.component';
import { DashVendasComponent } from './pages/dash-vendas/dash-vendas.component';
import { DashFinancasComponent } from './pages/dash-financas/dash-financas.component';
import { CadVendasComponent } from './pages/cad-vendas/cad-vendas.component';
import { HitVendasComponent } from './pages/hit-vendas/hit-vendas.component';
import { DescontosComponent } from './pages/descontos/descontos.component';
import { CadClienteComponent } from './pages/cad-cliente/cad-cliente.component';
import { EditClienteComponent } from './pages/edit-cliente/edit-cliente.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { EditDespesasComponent } from './pages/edit-despesas/edit-despesas.component';
import { SupAcessosComponent } from './pages/sup-acessos/sup-acessos.component';
import { SupManuseiosComponent } from './pages/sup-manuseios/sup-manuseios.component';
import { SupFinancasComponent } from './pages/sup-financas/sup-financas.component';
import { CadFornecedorComponent } from './pages/cad-fornecedor/cad-fornecedor.component';
import { EditFornecedorComponent } from './pages/edit-fornecedor/edit-fornecedor.component';
import { LoadingPageComponent } from './component/loading-page/loading-page.component';
import { NotificationComponent } from './component/notification/notification.component';
import { AuthService } from './services/auth/auth-service.service';
import { CadUsuariosComponent } from './pages/cad-usuarios/cad-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// autenticação
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    FormsProductComponent,
    HomeappComponent,
    DashboardComponent,
    SuporteComponent,
    LoginComponent,
    MenuSideComponent,
    ProdutosComponent,
    BarSearchComponent,
    ButtonComponent,
    TitlePageComponent,
    SubTitleComponent,
    DashVendasComponent,
    DashFinancasComponent,
    CadVendasComponent,
    HitVendasComponent,
    DescontosComponent,
    CadClienteComponent,
    EditClienteComponent,
    DespesasComponent,
    EditDespesasComponent,
    SupAcessosComponent,
    SupManuseiosComponent,
    SupFinancasComponent,
    CadFornecedorComponent,
    EditFornecedorComponent,
    LoadingPageComponent,
    NotificationComponent,
    CadUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-gl67hi28yjnlooee.us.auth0.com',
      clientId: 'yohcrR8e5wkqV9pg6L3v92mcl3QVU27O',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
