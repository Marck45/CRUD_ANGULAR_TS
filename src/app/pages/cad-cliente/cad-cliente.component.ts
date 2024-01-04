import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent {

  customer = {} as Customer;
  customers: Customer [] = [];

  formCustomer!: FormGroup;

  constructor(private customerService: CustomerService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.createFormCustomer();
  }


  createFormCustomer() {
    this.formCustomer = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      notification: new FormControl(),
    });
  }

  onSubmitSupplier() {
    this.createSupplier(this.formCustomer.value);
  }

  async createSupplier(formCustomer: any){
    this.loadingService.show(); // Mostra o indicador de carregamento

    const customer = {
      _id: formCustomer._id,
      name: formCustomer.name,
      email: formCustomer.email,
      phone: formCustomer.phone,
      address: formCustomer.address,
      notification: formCustomer.notification,
    };

    (await this.customerService.saveCustomer(customer)).subscribe(
      (customer: Customer[]) => {
        this.customers = customer;
        this.loadingService.hide(); // Oculta o indicador de carregamento após o carregamento completo
        this.notificationService.showSuccess('Fornecedor cadastrada');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao cadastrar fornecedor: ' + ' ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
      }
    );

    this.createFormCustomer();
  }

}
