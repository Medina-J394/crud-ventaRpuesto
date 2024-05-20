import { Router } from "express";
import { RepuestosService } from "../../services/repuesto.service";
import { RepuestoController } from "./controller";



export class RepuestoRoute{
    static get route(): Router{
         const routes = Router();
         const repuestosService = new RepuestosService()
         const controller = new RepuestoController(repuestosService) 
         routes.get('/', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;

    }     
}