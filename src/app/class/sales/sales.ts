import { Sales } from "src/app/models/sales";

export class SalesClass implements Sales {
  originalValue: number = 0;
  _id: string = '';
  cod: string = '';
  name: string = '';
  product: string = '';
  discount: number = 0;
  discountValue: number = 0;
  finalValue: number = 0;
}

// Exportação da classe SalesClass (não é necessário reexportar a interface)
export { Sales };
