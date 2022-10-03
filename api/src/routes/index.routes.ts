import { Request, Response, Router } from "express";
import { authenticator } from "./authentication.routes";
import { timesRoutes } from "./times.routes";
import { traccar } from "./traccar.routes";

export const router = Router();

router.use('/times', timesRoutes);


router.use('/traccar', traccar);

router.use('/auth', authenticator, () => {
    console.log('Tentativa de autenticação')
})
router.get('/test', (request: Request, response: Response) => {
    console.log('Hello world');
    response.send('Rota aberta');
})
