import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent {

  customer = {} as Customer;
  customers: Customer[] = []

  formEditCustomer!: FormGroup;


  constructor(private customerService: CustomerService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.EditFormCustomer();

    this.loadingCustomer();
  }


  EditFormCustomer() {
    this.formEditCustomer = new FormGroup({
      _id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      notification: new FormControl(),
    });
  }

  // carrega todas as despesas
  async loadingCustomer() {
    this.loadingService.show();

    (await this.customerService.getCustomer()).subscribe(
      (customer: Customer[]) => {
        this.customers = customer;
        this.loadingService.hide();
        this.notificationService.showSuccess('Fornecedores carregados');
      }, (error: any) => {
        this.notificationService.showError('Erro ao carregar os fornecedores: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
  }

  // exclui a despesa selecionada
  async excludeCustomer(form: any) {
    this.loadingService.show();

    const customerId = form._id; // Apenas pegue o _id da despesa

    (await this.customerService.deleteCustomer(customerId)).subscribe(
      () => {
        this.loadingCustomer();
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

  async editCustomer(customer: Customer) {
    // Esconde o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');

    formHide?.classList.add('hide');
    formHide?.classList.remove('tabela-container');

    // atribui valores ao forms

    this.formEditCustomer.setValue(customer);

    this.formEditCustomer.patchValue({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      Notification: customer.notification,
    });
  }

  async upCustomer(formEditCustomer: any) {
    const customer = {
      _id: formEditCustomer._id,
      name: formEditCustomer.name,
      email: formEditCustomer.email,
      phone: formEditCustomer.phone,
      address: formEditCustomer.address,
      notification: formEditCustomer.notification,
    };

    this.loadingService.show();

    (await this.customerService.UpdateCustomer(customer)).subscribe(
      () => {
        this.loadingCustomer();
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
    this.EditFormCustomer();

    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    formViwer?.classList.add('hide');
    formViwer?.classList.remove('form');

    formHide?.classList.remove('hide');
    formHide?.classList.add('tabela-container');
  }

}



