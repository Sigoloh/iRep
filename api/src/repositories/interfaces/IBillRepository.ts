import {Billing} from "../../entity/Billing.entity";
import {Resident} from "../../entity/Resident.entity";

export interface IBillRepository{
  create(bill: Billing, resident: Resident): Promise<void>;
  update(bill: Billing): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Billing>;
  findAll(): Promise<Billing[]>;
}
