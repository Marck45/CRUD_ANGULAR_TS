import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Expenses } from 'src/app/models/expenses';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  expense = {} as Expenses;
  expenses: Expenses[] = [];

  formExpenses!: FormGroup;

  constructor(private expensesService: ExpensesService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.createFormExpenses();
  }

  createFormExpenses() {
    this.formExpenses = new FormGroup({
      nameExpense: new FormControl(),
      value: new FormControl(),
      maturity: new FormControl(),
      description: new FormControl(),
    });
  }

  onSubmitExpenses(){
    this.createExpenses(this.formExpenses.value);
  }

  async createExpenses(formExpenses: any){
    this.loadingService.show(); // Mostra o indicador de carregamento

    const expenses = {
      _id: formExpenses._id,
      nameExpense: formExpenses.nameExpense,
      value: formExpenses.value,
      maturity: formExpenses.maturity,
      description: formExpenses.description
    };

    (await this.expensesService.saveExpenses(expenses)).subscribe(
      (expenses: Expenses[]) => {
        this.expenses = expenses;
        this.loadingService.hide(); // Oculta o indicador de carregamento após o carregamento completo
        this.notificationService.showSuccess('Despesa cadastrada');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao cadastrat produto: ' + ' ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
      }
    );
  }

}
