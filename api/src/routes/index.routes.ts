import { Request, Response, Router } from "express";

export const router = Router();

router.get('/test', (request: Request, response: Response) => {
    console.log('Hello world');
    response.send('Rota aberta');
})
