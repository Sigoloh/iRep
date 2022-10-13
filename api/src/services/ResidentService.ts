import {Resident} from "../entity/Resident.entity";
import {IResidentRepository} from "../repositories/interfaces/IResidentRepository";
import {IResidentService} from "./interfaces/IResidentService";

export class ResidentService implements IResidentService{
  constructor(
    private residentRepository: IResidentRepository
  ){}

  async create(resident: Resident): Promise<void> {
    try{
      await this.residentRepository.create(resident);
    }catch(error){
      console.log(error);
    }
  }

  async update(resident: Resident): Promise<void> {
    try{
      await this.residentRepository.update(resident);
    }catch(error){
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try{
      const residentToBeDeleted = await this.residentRepository.findById(id);
      await this.residentRepository.delete(residentToBeDeleted);
    }catch(error){
      console.log(error);
    }
  }

  async findById(id: string): Promise<Resident> {
    try{
      return await this.residentRepository.findById(id);
    }catch(error){
      console.log(error);
    }
  }

  async findAll(): Promise<Resident[]> {
    try{
      return await this.residentRepository.findAll();
    }catch(error){
      console.log(error);
    }
  }
  
  async getAllBillingsFromResident(residentId: string): Promise<Resident> {
    try{
      return await this.residentRepository.getAllBillingsFromResident(residentId);
    }catch(error){
      console.log(error);
    }
  }
}
