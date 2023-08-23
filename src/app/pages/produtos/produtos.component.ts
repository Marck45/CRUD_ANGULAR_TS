import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  listagem = document.querySelector('#listagem');

  produto = {} as Produtos;
  produtos: Produtos[] = [];

  formProduto!: FormGroup;
  FormProdutoEdit!: FormGroup;

  imagemSelecionada: File | null = null;
  imagemURL: string = '/assets/img/fileImg.png';
  fileImg:string =  '/assets/img/fileImg.png';


  constructor(private produtosAPiService: ProdutosAPiService) {}

  ngOnInit(): void {
    this.getProducts();

    this.createForm();
  }


    // metodo para capturar imagem

    onImageSelected(event: any) {
      const file: File = event?.target?.files[0];

      if (file) {
        this.imagemSelecionada = file;

        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagemURL = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        // Caso não haja arquivo selecionado, você pode definir 'imagemURL' como uma string vazia para evitar exibir uma imagem quebrada.
        this.imagemURL = this.fileImg;
      }
    }

  // criação de produto form
  createForm() {
    this.formProduto = new FormGroup({
      _id: new FormControl(),
      nome: new FormControl(),
      valor: new FormControl(),
      custo: new FormControl(),
      descricao: new FormControl(),
      marca: new FormControl(),
      medida: new FormControl(),
      quantidade: new FormControl(),
      validade: new FormControl(),
      lote: new FormControl(),
      photo: new FormControl(),
    });
  }

  async onEdit(formProduto: any) {
    // Escondo o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');
    let nameForm = document.getElementById('nameEdit') as HTMLInputElement;
    let descricaoForm = document.getElementById('descricaoEdit') as HTMLInputElement;
    let valorForm = document.getElementById('valorEdit') as HTMLInputElement;
    let disponivelForm = document.getElementById('disponivel') as HTMLInputElement;
    let idForm = document.getElementById('idEdit') as HTMLInputElement;

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');

    formHide?.classList.add('hide');
    formHide?.classList.remove('tabela-container');

    // atribuir valores ao forms
    nameForm = formProduto.nome;
    descricaoForm.value = formProduto.descricao;
    valorForm.value = formProduto.valor.toString();
    idForm.value = formProduto._id;
    console.log('formulario de edição acionado');
  }

  // carregar todos os produtos
  async getProducts() {
    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;

        console.log('produtos carregados com sucesso');
      }
    );
  }

  // deletar um produto
  async deleteProduto(form: any) {
    const produto = {
      _id: form._id,
      nome: form.nome,
      custo: form.custo,
      valor: form.valor,
      descricao: form.descricao,
      medida: form.medida,
      marca: form.marca,
      quantidade: form.quantidade,
      validade: form.validade,
      lote: form.lote,
      photo: form.lote
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
  async atualizarProduto(formProduto: any) {
    const produto = {
      _id: formProduto._id,
      nome: formProduto.nome,
      custo: formProduto.custo,
      valor: formProduto.valor,
      descricao: formProduto.descricao,
      medida: formProduto.medida,
      marca: formProduto.marca,
      quantidade: formProduto.quantidade,
      disponivel: formProduto.disponivel,
      validade: formProduto.validade,
      lote: formProduto.lote,
      photo: formProduto.photo,
    };

    (await this.produtosAPiService.UpdateProduto(produto)).subscribe(
      (response: Produtos[]) => {
        console.log('produto atualizado', response);
        this.getProducts();
      },
      (error: any) => {
        console.error('Erro ao atualizar produto', error);
      }
    );

    alert('Produto atualizado');
    this.cleanForm();
  }

  // resetar formulario
  cleanForm() {
    this.createForm();

    console.log('Formulario resetado');

    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    formViwer?.classList.add('hide');
    formViwer?.classList.remove('form');

    formHide?.classList.remove('hide');
    formHide?.classList.add('tabela-container');
  }
}
