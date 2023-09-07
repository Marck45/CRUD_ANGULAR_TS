import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {

  produto = {} as Produtos;
  produtos: Produtos[] = [];

  formProduto!: FormGroup;

  imagemSelecionada: File | null = null;
  imagemURL: string = '/assets/img/fileImg.png';
  fileImg: string = '/assets/img/fileImg.png';


  constructor(private produtosAPiService: ProdutosAPiService, private fb: FormBuilder, private sanitizer: DomSanitizer, private loadingService: LoadingService, private notificationService: NotificationService) { }

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
      custo: new FormControl(),
      descricao: new FormControl(),
      marca: new FormControl(),
      medida: new FormControl(),
      quantidade: new FormControl(),
      validade: new FormControl(),
      lote: new FormControl(),
      photo: new FormControl(''), // Inicializa com uma string vazia
      firebaseUrl: new FormControl()
    });

  }


  async onEdit(produtos: Produtos) {
    // Escondo o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');

    formHide?.classList.add('hide');
    formHide?.classList.remove('tabela-container');

    // atribuir valores ao forms
    this.formProduto.setValue(produtos);

    this.formProduto.patchValue({
      _id: produtos._id,
      nome: produtos.nome,
      valor: produtos.valor,
      custo: produtos.custo,
      descricao: produtos.descricao,
      marca: produtos.marca,
      medida: produtos.medida,
      quantidade: produtos.quantidade,
      validade: produtos.validade,
      lote: produtos.lote,
      photo: produtos.photo,
      firebaseUrl: produtos.firebaseUrl,

    });
  }

  // carregar todos os produtos
  async getProducts() {
    this.loadingService.show(); // Mostra o indicador de carregamento

    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;
        this.loadingService.hide(); // Oculta o indicador de carregamento após o carregamento completo
        this.notificationService.showSuccess('Produtos carregados carregado');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao carregar os produtos: ' + ' ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
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
      photo: form.photo,
      firebaseUrl: form.firebaseUrl,
    };

    this.loadingService.show();

    (await this.produtosAPiService.deleteProduto(produto)).subscribe(
      (response: Produtos) => {
        console.log('Produto Deletado', response);
        this.getProducts();
        this.notificationService.showSuccess('Produto exluido!');
        this.loadingService.hide();
      },
      (error: any) => {
        this.notificationService.showError('Erro ao deletar o produto: ' + ' ' + error.message);
        this.loadingService.hide();
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
      firebaseUrl: formProduto.firebaseUrl
    };

    this.loadingService.show();

    (await this.produtosAPiService.UpdateProduto(produto)).subscribe(
      (response: Produtos[]) => {
        this.getProducts();
        this.notificationService.showSuccess('Produto atualizado!');
        this.loadingService.hide();
      },
      (error: any) => {
        this.notificationService.showError('Erro ao atualizar o produto: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
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
