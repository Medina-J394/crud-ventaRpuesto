import { Response, Request } from "express"
import { CreateRepuestoDto } from "../../domain/dtos/repuesto/create-repuesto.dto"
import { RepuestosService } from "../../services/repuesto.service"
import { UpdateRepuestoDto } from "../../domain/dtos/repuesto/update-repuesto.dto"



export class RepuestoController{
    constructor(private readonly repuestosService:RepuestosService, ){}

    create = (req:Request, res:Response) => {
        const [error, createRepuestoDto] = CreateRepuestoDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.repuestosService.create(createRepuestoDto!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateRepuestoDto] = UpdateRepuestoDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.repuestosService.update(updateRepuestoDto!, id!)
    .then(category => res.json(category))
    .catch(error => res.status(500).json(error));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.repuestosService.delete(id)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    findAll = async (req:Request, res:Response) => {
        this.repuestosService.findAll()
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error));
    }
}