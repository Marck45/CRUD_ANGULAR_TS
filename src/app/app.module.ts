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
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { BarSearchComponent } from './component/bar-search/bar-search.component';
import { ButtonComponent } from './component/button/button.component';
import { TitlePageComponent } from './component/title-page/title-page.component';
import { SubTitleComponent } from './component/sub-title/sub-title.component';


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
    ProductsDetailsComponent,
    BarSearchComponent,
    ButtonComponent,
    TitlePageComponent,
    SubTitleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
