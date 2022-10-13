import { Request, Response, Router } from "express";
import {BillingRoutes} from "./Billing.routes";
import { residentRoutes } from "./ResidentRoutes.routes";

export const router = Router();

router.use('/resident', residentRoutes);
router.use('/bill', BillingRoutes);

router.get('/test', (request: Request, response: Response) => {
    console.log('Hello world');
    response.send('Rota aberta');
})
