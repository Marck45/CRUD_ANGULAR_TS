import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Supplier } from 'src/app/models/supplier';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-edit-fornecedor',
  templateUrl: './edit-fornecedor.component.html',
  styleUrls: ['./edit-fornecedor.component.css']
})
export class EditFornecedorComponent implements OnInit {

  supplier = {} as Supplier;
  suppliers: Supplier[] = []

  formEditSupplier!: FormGroup;


  constructor(private supplierService: SupplierService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.EditFormSupplier();

    this.loadingSupplier();
  }


  EditFormSupplier() {
    this.formEditSupplier = new FormGroup({
      _id: new FormControl(),
      sales: new FormControl(),
      work: new FormControl(),
      email: new FormControl(),
      phone1: new FormControl(),
      phone2: new FormControl(),
      address: new FormControl(),
    });
  }

  // carrega todas as despesas
  async loadingSupplier() {
    this.loadingService.show();

    (await this.supplierService.getSupplier()).subscribe(
      (supplier: Supplier[]) => {
        this.suppliers = supplier;
        this.loadingService.hide();
        this.notificationService.showSuccess('Fornecedores carregados');
      }, (error: any) => {
        this.notificationService.showError('Erro ao carregar os fornecedores: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
  }

  // exclui a despesa selecionada
  async excludeSupplier(form: any) {
    this.loadingService.show();

    const supplierId = form._id; // Apenas pegue o _id da despesa

    (await this.supplierService.deleteSupplier(supplierId)).subscribe(
      () => {
        this.loadingSupplier();
        this.notificationService.showSuccess('Fornecedor deletada!');
        this.loadingService.hide();
      },
      (error) => {
        console.error('Erro ao excluir fornecedor:', error);
        this.loadingService.hide();
        // Trate o erro de acordo com suas necessidades
      }
    );
  }

  async editSupplier(supplier: Supplier) {
    // Esconde o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');

    formHide?.classList.add('hide');
    formHide?.classList.remove('tabela-container');

    // atribui valores ao forms

    this.formEditSupplier.setValue(supplier);

    this.formEditSupplier.patchValue({
      _id: supplier._id,
      sales: supplier.sales,
      work: supplier.work,
      email: supplier.email,
      phone1: supplier.phone1,
      phone2: supplier.phone2,
      address: supplier.address,
    });
  }

  async upSupplier(formEditSupplier: any) {
    const supplier = {
      _id: formEditSupplier._id,
      sales: formEditSupplier.sales,
      work: formEditSupplier.work,
      email: formEditSupplier.email,
      phone1: formEditSupplier.phone1,
      phone2: formEditSupplier.phone2,
      address: formEditSupplier.address,
    };

    this.loadingService.show();

    (await this.supplierService.UpdateSupplier(supplier)).subscribe(
      () => {
        this.loadingSupplier();
        this.notificationService.showSuccess('Fornecedor atualizado!');
        this.loadingService.hide();
      },
      (error: any) => {
        this.notificationService.showError('Erro ao atualizar o fornecedor: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
    this.cleanForm();
  }

  //
  cleanForm() {
    this.EditFormSupplier();

    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    formViwer?.classList.add('hide');
    formViwer?.classList.remove('form');

    formHide?.classList.remove('hide');
    formHide?.classList.add('tabela-container');
  }

}


