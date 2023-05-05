import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder } from '@angular/forms';
import { ProdutosClass } from 'src/app/class/produtos';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';



@Component({
  selector: 'app-forms-product',
  templateUrl: './forms-product.component.html',
  styleUrls: ['./forms-product.component.css']
})
export class FormsProductComponent implements OnInit {

  listagem = document.querySelector('#listagem');

  produto = {} as Produtos;
  produtos: Produtos[] = [];  
  
  formProduto!: FormGroup;

  constructor(private produtosAPiService:ProdutosAPiService) {}


  ngOnInit(): void {

    this.getProducts();

    this.createForm();

  }
 
  createForm() {

    this.formProduto = new FormGroup({

      nome: new FormControl(),
      valor: new FormControl(),
      descricao: new FormControl(),
      disponivel: new FormControl(),

    });

  }

  async onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log('form',this.formProduto.value);
    
    // this.formProduto.reset(new ProdutosClass());

    this.cadastrarProduto(this.formProduto.value);
   
  }

  // carregar todos os produtos 
  async getProducts(){

    (await (this.produtosAPiService.getProdutos())).subscribe((produtos:Produtos[]) =>{

      this.produtos = produtos;

      console.log(produtos);
      console.log('produtos carregados')

    });

  }

  // cadastrar um novo produto
  async cadastrarProduto(form: any) {

    const produto = {
      nome: form.nome,
      valor: form.valor,
      descricao: form.descricao,
      disponivel: form.disponivel,

    };
  
    (await this.produtosAPiService.saveProduto(produto)).subscribe(
      (response: Produtos[]) => {
        console.log('Produto cadastrado', response);
        this.getProducts();
        // this.cleanForm(form);
      },
      (error: any) => {
        console.error('Erro ao cadastrar produto', error);
      }
    );
  }

  // deletar um produto

  async deleteProduto(){

    (await this.produtosAPiService.deleteProduto(this.produto)).subscribe(()=>{
      this.getProducts();
    })

    console.log('Produto deletado');

  }

  // resetar formulario
  cleanForm(form: NgForm) {
    this.getProducts();
    form.resetForm();
    this.produto = {} as Produtos;

    console.log('formulario limpo');
  }

}