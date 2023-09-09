import { Expenses } from "src/app/models/expenses";

export class ExpensesClass implements Expenses {
  nameExpenses: string = '';
  value: String = '';
  maturity: Date = new Date;
  description: String = '';
}
export { Expenses };

