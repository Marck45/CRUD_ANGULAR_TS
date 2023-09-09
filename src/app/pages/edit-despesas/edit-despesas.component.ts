import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';

@Component({
  selector: 'app-edit-despesas',
  templateUrl: './edit-despesas.component.html',
  styleUrls: ['./edit-despesas.component.css']
})
export class EditDespesasComponent implements OnInit {

  expense = {} as Expenses;
  expenses: Expenses[] = [];

   constructor(private expensesService: ExpensesService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }

    ngOnInit(){
    this.loadingExpenses();
  }

  async loadingExpenses() {
    this.loadingService.show();

    (await this.expensesService.getExpenses()).subscribe(
      (expenses: Expenses[]) => {
        this.expenses = expenses;
        this.loadingService.hide();
        this.notificationService.showSuccess('Despesas carregadas');
      }, (error: any) => {
        this.notificationService.showError('Erro ao carregar os produtos: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );
  }

}
