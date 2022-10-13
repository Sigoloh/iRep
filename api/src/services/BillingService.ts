import {Billing} from "../entity/Billing.entity";
import {IBillRepository} from "../repositories/interfaces/IBillRepository";
import {IResidentRepository} from "../repositories/interfaces/IResidentRepository";
import {IBillingService} from "./interfaces/IBillingService";

export class BillingService implements IBillingService{
  constructor(
    private billingRepository: IBillRepository,
    private residentRepository: IResidentRepository
  ) {}

  async create(billing: Billing, residentId: string): Promise<void> {
    const billingOwner = await this.residentRepository.findById(residentId);
    try{
      await this.billingRepository.create(billing, billingOwner);
    }catch(error){
      console.log(error);
    }
  }

  async update(billing: Billing): Promise<void> {
    try{
      await this.billingRepository.update(billing);
    }catch(error){
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try{
      await this.billingRepository.delete(id);
    }catch(error){
      console.log(error);
    }
  }

  async findById(id: string): Promise<Billing> {
    try{
      return await this.billingRepository.findById(id);
    }catch(error){
      console.log(error);
    }
  }

  async findAll(): Promise<Billing[]> {
    try{
      return await this.billingRepository.findAll();
    }catch(error){
      console.log(error);
    }
  }
}
