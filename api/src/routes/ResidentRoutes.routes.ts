import {Request, Response, Router} from "express";
import {ResidentController} from "../controllers/ResidentController";
import {ResidentRepository} from "../repositories/ResidentRepository";
import {ResidentService} from "../services/ResidentService";

export const residentRoutes = Router();
const residentRepository = new ResidentRepository()
const residentService = new ResidentService(residentRepository);
const residentController = new ResidentController(residentService);


residentRoutes.post('/create', async (request: Request, response: Response) => {
  await residentController.create(request, response);
})

residentRoutes.get('/get/:id', async (request: Request, response: Response) => {
  await residentController.findById(request, response)
})

residentRoutes.get('/get', async (request: Request, response: Response) => {
  await residentController.findAll(request, response);
})

residentRoutes.patch('/update', async (request: Request, response: Response) => {
  await residentController.update(request, response)   
})

residentRoutes.delete('/delete', async (request: Request, response: Response) => {
  await residentController.delete(request, response);
})

residentRoutes.get('/get/bills/:id', async (request: Request, response: Response) => {
  await residentController.getAllBillingsFromResident(request, response);
})

