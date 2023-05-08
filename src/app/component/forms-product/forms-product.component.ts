import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
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

  // cadastro de produto
  async onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log('form',this.formProduto.value);
    
    // this.formProduto.reset(new ProdutosClass());


    this.cadastrarProduto(this.formProduto.value);
   
  }

  // abetura do formulario de edição

  // envio o formulario editado
  onEdit(produto: Produtos){
    // Escondo o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#formCadastro');
    let nameForm = document.getElementById('nameEdit') as HTMLInputElement;
    let descricaoForm = document.getElementById('descricaoEdit') as HTMLInputElement;
    let valorForm = document.getElementById('valorEdit') as HTMLInputElement;
    let disponivelForm = document.getElementById('disponivel') as HTMLInputElement;

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');
    
    formHide?.classList.add('hide');
    formHide?.classList.remove('form');

    console.log(produto);

    // atribuir valores ao forms
    nameForm.value = produto.nome;
    descricaoForm.value = produto.descricao;
    // valorForm.value = produto.valor;
    // disponivelForm.value = produto.disponivel;

    console.log('formulario de edição acionado');
  }

  // carregar todos os produtos 
  async getProducts(){

    (await (this.produtosAPiService.getProdutos())).subscribe((produtos:Produtos[]) =>{

      this.produtos = produtos;

      console.log(produtos);
      console.log('produtos carregados com sucesso')

    });

  }
  
  // cadastrar um novo produto
  async cadastrarProduto(form: any) {

    const produto = {
      _id: form._id,
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

    this.cleanForm();
  }

  // deletar um produto
  async deleteProduto(form: any) {

    const produto = {
      _id: form._id,
      nome: form.nome,
      valor: form.valor,
      descricao: form.descricao,
      disponivel: form.disponivel,

    };
  
    (await this.produtosAPiService.deleteProduto(produto)).subscribe(
      (response: Produtos) => {
        console.log('Produto Deletado', response);
        this.getProducts();
      },
      (error: any) => {
        console.error('Erro ao cadastrar produto', error);
      }
    );
  }

  // upDateProduto
  async atualizarProduto(form: any){

    const produto = {
      _id: form._id,
      nome: form.nome,
      valor: form.valor,
      descricao: form.descricao,
      disponivel: form.disponivel,

    };

    (await (this.produtosAPiService.UpdateProduto(produto))).subscribe(
      (response:Produtos) => {
        console.log('produto atualizado', response, produto);
      },
      (error: any) => {
        console.error('Erro ao cadastrar produto', error);
      }
    )

  }

  // resetar formulario
  cleanForm() {

    this.createForm();

    console.log('Formulario resetado')

  }

}