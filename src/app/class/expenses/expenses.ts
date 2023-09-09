import { Expenses } from "src/app/models/expenses";

export class ExpensesClass implements Expenses {
  nameExpense: string = '';
  value: Number = 0;
  maturity: Date = new Date;
  description: String = '';
}
export { Expenses };

