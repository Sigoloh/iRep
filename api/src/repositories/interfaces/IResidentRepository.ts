import {Resident} from "../../entity/Resident.entity";

export interface IResidentRepository{
  create(resident: Resident): Promise<void>;
  update(resident: Resident): Promise<void>;
  delete(resident: Resident): Promise<void>;
  findById(id: string): Promise<Resident>;
  findAll(): Promise<Resident[]>;
  getAllBillingsFromResident(residentId: string): Promise<Resident>;
}
