import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { LoadingService } from 'src/app/service/loading.service';
import { ProdutosAPiService } from 'src/app/services/produtos-api.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-forms-product',
  templateUrl: './forms-product.component.html',
  styleUrls: ['./forms-product.component.css'],
})
export class FormsProductComponent implements OnInit {
  listagem = document.querySelector('#listagem');

  imgProduct = '/assets/img/img-login.jpg';

  imagemSelecionada: File | null = null;
  imagemURL: string = '/assets/img/fileImg.png';
  fileImg: string = '/assets/img/fileImg.png';


  produto = {} as Produtos;
  produtos: Produtos[] = [];

  formProduto!: FormGroup;
  FormProdutoEdit!: FormGroup;

  maiorIdProduto: number = 0;

  constructor(private produtosAPiService: ProdutosAPiService, private loadingService: LoadingService, private notificationService: NotificationService) { }

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
        this.imagemURL = URL.createObjectURL(file); // Define a imagem para exibição na visualização

        // Define o arquivo como a imagem selecionada no objeto 'produto'
        this.produto.photo = file;
      };
      reader.readAsDataURL(file);
    } else {
      // Caso não haja arquivo selecionado, você pode definir 'imagemURL' como a imagem padrão.
      this.imagemURL = this.fileImg;

      // Certifique-se de limpar o campo 'photo' do objeto 'produto'
      this.produto.photo = null;
    }
  }


  // cria id novo automaticamente

  async obterMaiorId() {

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
      marca: new FormControl(),
      medida: new FormControl(),
      quantidade: new FormControl(),
      validade: new FormControl(),
      lote: new FormControl(),
      photo: new FormControl(),
    });
  }

  // cadastro de produto
  async onSubmit() {
    this.cadastrarProduto(this.formProduto.value);
  }

  // carregar todos os produtos
  async getProducts() {
    this.loadingService.show();

    (await this.produtosAPiService.getProdutos()).subscribe(
      (produtos: Produtos[]) => {
        this.produtos = produtos;

        this.obterMaiorId();

        this.createForm();

        this.loadingService.hide();

        this.notificationService.showSuccess('Pronto para cadastro');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao carregar o produto: ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
      }
    );
  }

  // cadastrar um novo produto
  async cadastrarProduto(form: any) {

    const formData = new FormData(); // Crie um objeto FormData para enviar dados em form-data

    // Adicione todos os campos ao formData
    formData.append('_id', form._id);
    formData.append('nome', form.nome);
    formData.append('valor', form.valor.toString());
    formData.append('custo', form.custo.toString());
    formData.append('descricao', form.descricao);
    formData.append('marca', form.marca);
    formData.append('medida', form.medida);
    formData.append('quantidade', form.quantidade.toString());
    formData.append('validade', form.validade);
    formData.append('lote', form.lote.toString());

    // Adicione a imagem ao formData se estiver disponível
    if (this.produto.photo) {
      formData.append('photo', this.produto.photo);
    }

    (await this.produtosAPiService.saveProduto(formData)).subscribe(
      (response: Produtos[]) => {
        this.notificationService.showSuccess('Produto cadastrado!');
        this.getProducts();
      },
      (error: any) => {
        // Exiba uma notificação de erro para o usuário
        this.notificationService.showError('Erro ao cadastrar o produto: ' + error.message);
      }
    );

    this.cleanForm();
  }


  // resetar formulario
  cleanForm() {
    this.createForm();
  }
}
