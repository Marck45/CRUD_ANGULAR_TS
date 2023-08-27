import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


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

  imagemSelecionada: File | null = null;
  imagemURL: string = '/assets/img/fileImg.png';
  fileImg: string = '/assets/img/fileImg.png';


  constructor(private produtosAPiService: ProdutosAPiService, private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getProducts();

    this.createForm();

  }


  // metodo para capturar imagem

  onImageSelected(event: any) {
    const file: File = event?.target?.files[0];

    if (file) {
      console.log('Imagem selecionada:', file);
      this.imagemSelecionada = file;

      const formData = new FormData();
      formData.append('photo', file); // 'photo' deve corresponder ao nome do campo esperado no servidor

      // Envie formData para o servidor aqui usando um serviço HTTP
      this.produtosAPiService.uploadImage(formData).subscribe(
        (response) => {
          console.log('Imagem enviada com sucesso.', response);
          // Você pode tratar a resposta do servidor aqui, por exemplo, atualizando a URL da imagem.
        },
        (error) => {
          console.error('Erro ao enviar a imagem.', error);
          // Lide com o erro aqui, se necessário.
        }
      );
    } else {
      console.log('Nenhum arquivo selecionado.');
    }
  }


  // Função para obter uma URL de imagem segura
  getSanitizedImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
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
      photo: new FormControl('') // Inicializa com uma string vazia
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
    console.log('Produto a ser editado:', this.produtos);
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
      photo: produtos.photo // Certifique-se de que 'photo' contenha o valor correto
    });

    // Defina o valor do campo de validade do formulário com base nos dados do produto.
    const validadeControl = this.formProduto.get('validade');
    if (validadeControl) {
      validadeControl.setValue(produtos.validade);
    } else {
      console.error('Controle "validade" não encontrado no FormGroup.');
    }

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
