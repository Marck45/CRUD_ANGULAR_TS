import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { Produtos } from 'src/app/models/produtos';
import { Sales } from 'src/app/models/sales';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ProdutosAPiService } from 'src/app/services/produtos/produtos-api.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-cad-vendas',
  templateUrl: './cad-vendas.component.html',
  styleUrls: ['./cad-vendas.component.css']
})
export class CadVendasComponent implements OnInit {

  produto = {} as Produtos;
  produtos: Produtos[] = [];

  selectedProducts: string[] = [];
  totalValue: number = 0;
  discountValue: number = 0;

  customer = {} as Customer;
  customers: Customer [] = [];

  sales = {} as Sales;
  sales2: Sales [] = [];

  produtosSelecionados: string[] = [];

  formSales!: FormGroup;

  maiorIdProduto: number = 0;

  constructor(private produtosAPiService: ProdutosAPiService,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private customerService: CustomerService,
    private salesService: SalesService,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.getProducts();
    this.getCustomer();
    this.getSales();
    this.createForm();
  }


  // formulario de vendasd
  createForm() {
    this.formSales = new FormGroup({
      cod: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      notification: new FormControl(),
      product: new FormControl(),
      discount: new FormControl(),
      discountValue: new FormControl(),
      finalValue: new FormControl(),
    });

  }


  // carregar todos os produtos
  async getProducts() {
    this.loadingService.show();

    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;
        this.loadingService.hide();
        this.notificationService.showSuccess('Produtos carregados');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao carregar os produtos: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
  }


  async getCustomer() {
    this.loadingService.show();

    (await this.customerService.getCustomer()).subscribe(
      (customer: Customer[]) => {
        this.customers = customer;
        this.loadingService.hide();
        this.notificationService.showSuccess('Clientes carregados');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao carregar os clientes: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
  }

  // carregar vendas
  async getSales() {
    this.loadingService.show();

    (await this.salesService.getSales()).subscribe(
      (sales: Sales[]) => {
        this.sales2 = sales;

        this.obterMaiorIdSales();

        this.createForm();

        this.loadingService.hide();

        this.notificationService.showSuccess('Pronto para cadastro');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao carregar o produto: ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
      }
    );
  }

  // obter maior id novo de vendas
  async obterMaiorIdSales() {

    for (let i = 0; i < this.produtos.length; i++) {
      let produto = this.produtos[i];
      let id = produto._id;
      if (id > this.maiorIdProduto) {
        this.maiorIdProduto = id;
      }
    }
    this.maiorIdProduto += 1;
  }

  // calcula o valor dos produtos

  calcularTotal() {
    // Reinicialize o valor total
    this.totalValue = 0;

    // Itere pelos produtos selecionados
    for (const productId of this.selectedProducts) {
      const produtoSelecionado = this.produtos.find(produto => produto._id === parseInt(productId, 10));

      if (produtoSelecionado) {
        // Some o valor do produto ao valor total
        this.totalValue += produtoSelecionado.valor; // Substitua "valor" pelo nome do campo que armazena o valor do produto em seu objeto
      }
    }

    // Atualize o valor total com o desconto
    this.totalValue -= this.discountValue;
  }


  // envio do formulario de vendas
  async onSubmitSales(){

  }

}
