import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  iconEstoque: string = '/assets/img/emestoque.png';
  iconValor:string = ' /assets/img/valor.png';
  totalVendas:string = '/assets/img/vendas.png';

  imgPizza:string = '/assets/img/grafico-pizza.png';
  imgColuna:string = '/assets/img/Gráfico-de-colunas-100-empilhadas-removebg-preview.png';

  produto = {} as Produtos;
  produtos: Produtos[] = [];  

  estoque:any = '';

  somaValor:number = 0;
  
  ngOnInit(): void {

    this.getProducts();
    
  }

  constructor(private produtosAPiService:ProdutosAPiService){}

  async getProducts() {
    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;

        this.estoque = this.produtos.length;
        console.log('produtos carregados com sucesso' + ' ' + produtos.length);

        this.calcularSomaValores();

      }
    );
  }

  async calcularSomaValores(){

    this.produtos.forEach(produtos => {
      this.somaValor += produtos.valor;
    });
  }  
}

