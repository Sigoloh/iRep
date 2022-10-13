import {Request, Response, Router} from "express";
import {BillController} from "../controllers/BillController";
import {BillingRepository} from "../repositories/BillingRepository";
import {ResidentRepository} from "../repositories/ResidentRepository";
import {BillingService} from "../services/BillingService";

export const BillingRoutes = Router();
const billingRepository = new BillingRepository();
const residentRepositoy = new ResidentRepository()
const billingService = new BillingService(billingRepository, residentRepositoy);
const billingController = new BillController(billingService);


BillingRoutes.get('/get/:id', async (request: Request, response: Response) => {
  billingController.findById(request, response);
})

BillingRoutes.get('/get' , async (request: Request, response: Response) => {
  billingController.findAll(request, response);
}
                 )

BillingRoutes.post('/create', async (request: Request, response: Response) => {
  billingController.create(request, response);
}
                  )

BillingRoutes.patch('/update', async (request: Request, response: Response) => {
  billingController.update(request, response);
}
                   )

BillingRoutes.delete('/delete/:id', async (request: Request, response: Response) => {
  billingController.delete(request, response);
}
                    )


