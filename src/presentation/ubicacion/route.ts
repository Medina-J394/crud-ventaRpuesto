import { Router } from "express";
import { UbicacionesServices } from "../../services/ubicacion.service";
import { UbicacionController } from "./controller";



export class UbicacionRoute{
    static get route(): Router{
         const routes = Router();
         const ubicacionesService = new UbicacionesServices()
         const controller = new UbicacionController(ubicacionesService) 
         routes.get('/', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;

    }     
}