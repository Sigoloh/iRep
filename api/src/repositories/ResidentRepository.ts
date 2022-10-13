import {database} from "../../app-data-source";
import {Resident} from "../entity/Resident.entity";
import {IResidentRepository} from "./interfaces/IResidentRepository";

export class ResidentRepository implements IResidentRepository{

  private defaultRepository = database.getRepository(Resident);
  
  async create(resident: Resident): Promise<void> {
    try{
      await this.defaultRepository.save(resident);
    }catch(error){
      console.log(error);
    }
  }

  async update(resident: Resident): Promise<void> {
    try{
      await this.defaultRepository.save(resident);
    }catch(error){
      console.log(error);
    }
  }

  async delete(resident: Resident): Promise<void> {
    try{
      await this.defaultRepository.remove(resident);
    }catch(error){
      console.log(error);
    }
  }

  async findById(id: string): Promise<Resident> {
    try{
      return await this.defaultRepository.findOne({
        where: {
          residentId: id
        }
      });
    }catch(error){
      console.log(error);
    }
  }

  async findAll(): Promise<Resident[]> {
    try{
      return await this.defaultRepository.find();
    }catch(error){
      console.log(error);
    }
  }
  
  async getAllBillingsFromResident(residentId: string): Promise<Resident> {
    try{
      return await this.defaultRepository.findOne({
        where: {
          residentId: residentId
        },
        relations: ['billings']
      });
    }catch(error){
      console.log(error);
    }
  }
}
