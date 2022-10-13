import {Billing} from "../../entity/Billing.entity";

export interface IBillingService{
  create(billing: Billing, residentId: string): Promise<void>;
  update(billing: Billing): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Billing>;
  findAll(): Promise<Billing[]>;
}
