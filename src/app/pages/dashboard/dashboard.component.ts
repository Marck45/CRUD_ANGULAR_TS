import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos/produtos-api.service';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  iconEstoque: string = '/assets/img/emestoque.png';
  iconValor: string = ' /assets/img/valor.png';
  totalVendas: string = '/assets/img/vendas.png';
  maiorImg: string = '/assets/img/maior.svg';
  custoImg: string = '/assets/img/custo.png';
  valorImg: string = '/assets/img/aumento.png';

  produto = {} as Produtos;
  produtos: Produtos[] = [];

  estoque: any = '';
  somaValor: number = 0;
  maiorValor: number = 0;
  produtoComMaiorValor: any;
  somaCusto: number = 0;
  lucro: number = 0;

  constructor(private produtosAPiService: ProdutosAPiService, private loadingService: LoadingService) { }


  ngOnInit(): void {
    this.getProducts();
  }



  async getProducts() {
    this.loadingService.show();


    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {

        this.produtos = produtos;

        this.estoque = this.produtos.length;

        this.calcularSomaValores();
        this.maiorEstoque();
        this.calculaCustoEstoque()
        this.lucroEstoque();

        this.loadingService.hide();

      },(error: any) => {
        console.error('Erro ao carregar produtos', error);
        this.loadingService.hide();
      }
    );
  }
  // calcula o valor total do estoque
  async calcularSomaValores() {
    this.produtos.forEach((produtos) => {
      this.somaValor += produtos.valor;
    });
  }

  // calcula o custo total do estoque
  async calculaCustoEstoque() {
    this.produtos.forEach((produtos) => {
      this.somaCusto += produtos.custo;
    });
  }

  // Possivel lucro do estoque

  async lucroEstoque() {
    this.lucro = this.somaValor - this.somaCusto;
  }

  // calcula o produto que tem maior
  async maiorEstoque() {

    for (let i = 0; i < this.produtos.length; i++) {
      let produto = this.produtos[i];
      let valor = produto.valor;
      if (typeof valor === 'number' && valor > this.maiorValor) {
        this.maiorValor = valor;
        this.produtoComMaiorValor = {
          nome: produto.nome,
          valor: this.maiorValor
        };
      }
    }
  }
}
