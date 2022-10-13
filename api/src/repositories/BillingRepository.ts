import {database} from "../../app-data-source";
import {Billing} from "../entity/Billing.entity";
import {Resident} from "../entity/Resident.entity";
import {IBillRepository} from "./interfaces/IBillRepository";

export class BillingRepository implements IBillRepository{

  private defaultRepository = database.getRepository(Billing);

  async create(billing: Billing, resident: Resident): Promise<void> {
    billing.billingOwner = resident;
    console.log(resident);
    try{
      await this.defaultRepository.save(billing);
    }catch(error){
      console.log(error);
    }
  }

  async update(billing: Billing): Promise<void> {
    try{
      await this.defaultRepository.save(billing);
    }catch(error){
      console.log(error);
    }
  }


  async findById(id: string): Promise<Billing> {
    try{
      return await this.defaultRepository.findOne({
        where: {
          billingId: id
        }
      });
    }catch(error){
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try{
      const billingToBeDeleted = await this.findById(id);
      await this.defaultRepository.remove(billingToBeDeleted);
    }catch(error){
      console.log(error);
    }
  }

  async findAll(): Promise<Billing[]> {
    try{
      return await this.defaultRepository.find();
    }catch(error){
      console.log(error);
    }
  }
}
