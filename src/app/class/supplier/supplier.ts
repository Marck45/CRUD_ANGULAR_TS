import { Supplier } from "src/app/models/supplier";

export class SupplierClass implements Supplier  {

  _id: string = '';
  sales: string = '';
  work: string = '';
  email: string = '';
  phone1: number = 0;
  phone2: number = 0;
  address: string = '';
}
