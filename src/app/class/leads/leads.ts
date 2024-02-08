import { Leads } from "src/app/models/leads";

export class LeadsClass implements Leads {
  name: String = '';
  email: String = '';
  phone: Number = 0;
  description: String = '';
}
export { Leads };

