import {Request, Response} from "express";
import {BillingService} from "../services/BillingService";
import {IResidentService} from "../services/interfaces/IResidentService";

export class ResidentController{
  constructor(
    private residentService: IResidentService
  ){}

  async create(request: Request, response: Response): Promise<void>{
    const resident = request.body;
    try{
      const result = await this.residentService.create(resident);
      response.status(201).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async update(request: Request, response: Response): Promise<void>{
    const resident = request.body;
    try{
      const result = await this.residentService.update(resident);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async delete(request: Request, response: Response): Promise<void>{
    const id = request.params.id;
    try{
      const result = await this.residentService.delete(id);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async findById(request: Request, response: Response): Promise<void>{
    const id = request.params.id;
    try{
      const result = await this.residentService.findById(id);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async findAll(request: Request, response: Response): Promise<void>{
    try{
      const result = await this.residentService.findAll();
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async getAllBillingsFromResident(request: Request, response: Response): Promise<void>{
    const id = request.params.id;
    try{
      const result = await this.residentService.getAllBillingsFromResident(id);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }
  
}
