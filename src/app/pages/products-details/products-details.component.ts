import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  imgProd = '/assets/img/img-login.jpg';

  produto = {} as Produtos;
  produtos: Produtos[] = [];

  produtosFiltrados: any[] = []; // Esta variável irá armazenar os produtos filtrados
  currentItemIndex: number = 0; // Índice do item atual


  constructor(private produtosAPiService: ProdutosAPiService) { }


  ngOnInit(): void {
    this.getProducts();
  }

   // carregar todos os produtos
   async getProducts() {
    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;

        console.log('produtos carregados com sucesso', produtos);
      }
    );
  }

  // Função para realizar a filtragem
  async performSearch(searchTerm: string) {
    try {
      this.produtosAPiService.filtrarProdutos(searchTerm).subscribe(
        (produtosFiltrados: any[]) => {
          this.produtos = produtosFiltrados; // Atualiza a variável produtos com os produtos filtrados
          console.log('Produtos filtrados:', produtosFiltrados);
        },
        (error) => {
          console.error('Erro ao filtrar produtos:', error);
        }
      );
    } catch (error) {
      console.error('Erro ao filtrar produtos:', error);
    }
  }

  previousItem() {
    if (this.currentItemIndex > 0) {
      this.currentItemIndex--;
    }
  }

  nextItem() {
    if (this.currentItemIndex < this.produtos.length - 1) {
      this.currentItemIndex++;
    }
}

}
