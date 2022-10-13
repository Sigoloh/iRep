import {Resident} from "../../entity/Resident.entity";

export interface IResidentService{
  create(resident: Resident): Promise<void>;
  update(resident: Resident): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Resident>;
  findAll(): Promise<Resident[]>;
  getAllBillingsFromResident(residentId: string): Promise<Resident>;
}
