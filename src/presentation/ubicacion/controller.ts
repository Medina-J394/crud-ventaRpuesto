import { Request, Response } from "express";
import { UbicacionesServices } from "../../services/ubicacion.service"
import { CreateUbicacionDto } from "../../domain/dtos/ubicacion/create-ubicacion.dto";
import { UpdateUbicacionDto } from "../../domain/dtos/ubicacion/update-ubicacion.dto";



export class UbicacionController{
    constructor(private readonly ubicacionesService:UbicacionesServices, ){}

    create = (req:Request, res:Response) => {
        const [error, createUbicacionDto] = CreateUbicacionDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.ubicacionesService.create(createUbicacionDto!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateUbicacionDto] = UpdateUbicacionDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.ubicacionesService.update(updateUbicacionDto!, id!)
    .then(category => res.json(category))
    .catch(error => res.status(500).json(error));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.ubicacionesService.delete(id)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    findAll = async (req:Request, res:Response) => {
        this.ubicacionesService.findAll()
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error));
    }
}