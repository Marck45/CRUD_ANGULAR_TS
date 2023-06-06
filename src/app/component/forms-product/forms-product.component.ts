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
  FormProdutoEdit!: FormGroup;

  constructor(private produtosAPiService:ProdutosAPiService) {}


  ngOnInit(): void {

    this.getProducts();

    this.createForm();

  }

  // criação de produto form
  createForm() {
    this.formProduto = new FormGroup({
      _id: new FormControl(),
      nome: new FormControl(),
      valor: new FormControl(),
      descricao: new FormControl(),
      disponivel: new FormControl(),

    });

  }

  // cadastro de produto
  async onSubmit() {

    this.cadastrarProduto(this.formProduto.value);
   
  }
 
  // Abertura do formulario de edição
  async onEdit(formProduto:any){
    // Escondo o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#formCadastro');
    let nameForm = document.getElementById('nameEdit') as HTMLInputElement;
    let descricaoForm = document.getElementById('descricaoEdit') as HTMLInputElement;
    let valorForm = document.getElementById('valorEdit') as HTMLInputElement;
    let disponivelForm = document.getElementById('disponivel') as HTMLInputElement;
    let idForm = document.getElementById('idEdit') as HTMLInputElement;

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');
    
    formHide?.classList.add('hide');
    formHide?.classList.remove('form');


    // atribuir valores ao forms
    nameForm.value = formProduto.nome;
    descricaoForm.value = formProduto.descricao;
    valorForm.value = formProduto.valor.toString();
    disponivelForm.value = formProduto.disponivel.toString();
    idForm.value = formProduto._id;
    console.log('formulario de edição acionado');
    
  }

  // carregar todos os produtos 
  async getProducts(){

    (await (this.produtosAPiService.getProdutos())).subscribe((produtos:Produtos[]) =>{

      this.produtos = produtos;

      console.log('produtos carregados com sucesso');

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