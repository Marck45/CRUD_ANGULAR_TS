import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Supplier } from 'src/app/models/supplier';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-cad-fornecedor',
  templateUrl: './cad-fornecedor.component.html',
  styleUrls: ['./cad-fornecedor.component.css']
})
export class CadFornecedorComponent implements OnInit {

  supplier = {} as Supplier;
  suppliers: Supplier[] = []

  formSupplier!: FormGroup;


  constructor(private supplierService: SupplierService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.createFormSupplier();
  }


  createFormSupplier() {
    this.formSupplier = new FormGroup({
      sales: new FormControl(),
      work: new FormControl(),
      email: new FormControl(),
      phone1: new FormControl(),
      phone2: new FormControl(),
      address: new FormControl(),
    });
  }

  onSubmitSupplier() {
    this.createSupplier(this.formSupplier.value);
  }

  async createSupplier(formSupplier: any){
    this.loadingService.show(); // Mostra o indicador de carregamento

    const supplier = {
      _id: formSupplier._id,
      sales: formSupplier.sales,
      work: formSupplier.work,
      email: formSupplier.email,
      phone1: formSupplier.phone1,
      phone2: formSupplier.phone2,
      address: formSupplier.address,
    };

    (await this.supplierService.saveSupplier(supplier)).subscribe(
      (expenses: Supplier[]) => {
        this.suppliers = expenses;
        this.loadingService.hide(); // Oculta o indicador de carregamento após o carregamento completo
        this.notificationService.showSuccess('Fornecedor cadastrada');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao cadastrar fornecedor: ' + ' ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
      }
    );

    this.createFormSupplier();
  }
}
