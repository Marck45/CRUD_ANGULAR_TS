import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  formEditExpense!: FormGroup;

  constructor(private expensesService: ExpensesService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadingExpenses();

    this.createForm();
  }


  // criação de expenses form
  createForm() {
    this.formEditExpense = new FormGroup({
      _id: new FormControl(),
      nameExpense: new FormControl(),
      value: new FormControl(),
      maturity: new FormControl(),
      description: new FormControl(),
    });
  }

  // carrega todas as despesas
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

  // exclui a despesa selecionada
  async excludeExpense(form: any) {
    this.loadingService.show();

    const expenseId = form._id; // Apenas pegue o _id da despesa

    (await this.expensesService.deleteExpense(expenseId)).subscribe(
      () => {
        this.loadingExpenses();
        this.notificationService.showSuccess('Despesa deletada!');
        this.loadingService.hide();
      },
      (error) => {
        console.error('Erro ao excluir despesa:', error);
        this.loadingService.hide();
        // Trate o erro de acordo com suas necessidades
      }
    );
  }

  async editExpense(expenses: Expenses) {
    // Esconde o formulario de cadastro e exibe o de edição
    const formViwer = document.querySelector('#formId');
    const formHide = document.querySelector('#table-box');

    // mudar dados formulario
    formViwer?.classList.remove('hide');
    formViwer?.classList.add('form');

    formHide?.classList.add('hide');
    formHide?.classList.remove('tabela-container');

    // atribui valores ao forms

    this.formEditExpense.setValue(expenses);

    this.formEditExpense.patchValue({
      _id: expenses._id,
      nameExpense: expenses.nameExpense,
      value: expenses.value,
      maturity: expenses.maturity,
      description: expenses.description,
    });
  }

  async upExpense(formEditExpense: any) {
    const expenses = {
      _id: formEditExpense._id,
      nameExpense: formEditExpense.nameExpense,
      value: formEditExpense.value,
      maturity: formEditExpense.maturity,
      description: formEditExpense.description,
    };

    this.loadingService.show();

    (await this.expensesService.UpdateExpenses(expenses)).subscribe(
      (response: Expenses[]) => {
        this.loadingExpenses();
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

//
cleanForm() {
  this.createForm();

  const formViwer = document.querySelector('#formId');
  const formHide = document.querySelector('#table-box');

  formViwer?.classList.add('hide');
  formViwer?.classList.remove('form');

  formHide?.classList.remove('hide');
  formHide?.classList.add('tabela-container');
}

}
