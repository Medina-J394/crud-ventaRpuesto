import { Router } from "express";
import { ClienteRoute } from "./cliente/route";
import { CompraRoute } from "./compra/route";
import { RepuestoRoute } from "./repuesto/route";
import { UbicacionRoute } from "./ubicacion/route";


export class AppRoute{
    static get route():Router{
        const routes = Router()
        routes.use('/api/clientes', ClienteRoute.route)
        routes.use('/api/compras', CompraRoute.route)
        routes.use('/api/repuestos', RepuestoRoute.route)
        routes.use('/api/ubicaciones', UbicacionRoute.route)

        return routes
    }
}