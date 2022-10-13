import {Request, Response} from "express";
import {Billing} from "../entity/Billing.entity";
import {IBillingService} from "../services/interfaces/IBillingService";

export class BillController{
  constructor(
    private billService: IBillingService,
  ){}

  async create(request: Request, response: Response): Promise<void>{
    const bill = {} as Billing;

    Object.assign(bill, request.body);

    try{
      const result = await this.billService.create(bill, request.body.residentId);
      response.status(201).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async update(request: Request, response: Response): Promise<void>{
    const bill = {} as Billing;

    Object.assign(bill, request.body);

    try{
      const result = await this.billService.update(bill);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async delete(request: Request, response: Response): Promise<void>{
    const id = request.params.id;
    try{
      const result = await this.billService.delete(id);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async findById(request: Request, response: Response): Promise<void>{
    const id = request.params.id;
    try{
      const result = await this.billService.findById(id);
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }

  async findAll(request: Request, response: Response): Promise<void>{
    try{
      const result = await this.billService.findAll();
      response.status(200).send(result);
    }catch(error){
      response.status(500).send(error);
    };
  }
}
