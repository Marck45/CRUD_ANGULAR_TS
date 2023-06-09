import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-forms-product',
  templateUrl: './forms-product.component.html',
  styleUrls: ['./forms-product.component.css'],
})
export class FormsProductComponent implements OnInit {
  listagem = document.querySelector('#listagem');

  produto = {} as Produtos;
  produtos: Produtos[] = [];

  formProduto!: FormGroup;
  FormProdutoEdit!: FormGroup;
   
  maiorIdProduto: number = 0;


  constructor(private produtosAPiService: ProdutosAPiService) {}

  ngOnInit(): void {

    this.getProducts();

    this.createForm();

  }

  // cria id novo automaticamente

  async obterMaiorId(){
    

      for (let i = 0; i < this.produtos.length; i++) {
        let produto = this.produtos[i];
        let id = produto._id;
        if (id > this.maiorIdProduto) {
          this.maiorIdProduto = id;
        }
      }
      this.maiorIdProduto += 1;
  }

  // criação de produto form
  async createForm() {
    this.formProduto = new FormGroup({
      _id: new FormControl(),
      nome: new FormControl(),
      valor: new FormControl(),
      custo: new FormControl(),
      descricao: new FormControl(),
      disponivel: new FormControl(),
    });
  }

  // cadastro de produto
  async onSubmit() {
    this.cadastrarProduto(this.formProduto.value);
  }

  // carregar todos os produtos
  async getProducts() {
    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;

        console.log('produtos carregados com sucesso');

        this.obterMaiorId();
        this.createForm();
      }
    );
  }

  // cadastrar um novo produto
  async cadastrarProduto(form: any) {
    const produto = {
      _id: form._id,
      nome: form.nome,
      valor: form.valor,
      custo: form.custo,
      descricao: form.descricao,
      disponivel: form.disponivel,
    };

    (await this.produtosAPiService.saveProduto(produto)).subscribe(
      (response: Produtos[]) => {
        console.log('Produto cadastrado', response);
        this.getProducts();
      },
      (error: any) => {
        console.error('Erro ao cadastrar produto', error);
      }
    );

    this.cleanForm();
  }

  // resetar formulario
  cleanForm() {
    this.createForm();

    console.log('Formulario resetado');
  }
}
