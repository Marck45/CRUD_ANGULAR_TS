import { Sales } from "src/app/models/sales";

export class SalesClass implements Sales {
  _id: string = '';
  cod: string= '';
  name: string= '';
  phone: number= 0;
  notification: boolean = true;
  product: string= '';
  discount: number= 0;
  discountValue: number= 0;
  finalValue: number= 0;
}

export { Sales };
