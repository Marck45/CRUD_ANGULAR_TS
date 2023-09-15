import { Customer } from "src/app/models/customer";


export class CustomerClass implements Customer {
      _id: string = '';
      name : string = '';
      email: string = '';
      phone: Number = 0;
      address: string = ''
      notification: Boolean = false;
}
