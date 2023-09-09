import { Expenses } from "src/app/models/expenses";

export class ExpensesClass implements Expenses {
  _id: string = '';
  nameExpense: string = '';
  value: Number = 0;
  maturity: Date = new Date;
  description: String = '';
}
export { Expenses };

