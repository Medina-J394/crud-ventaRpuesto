import { prisma } from "../data/postgresql/database";
import { CreateUbicacionDto } from "../domain/dtos/ubicacion/create-ubicacion.dto";
import { UpdateUbicacionDto } from "../domain/dtos/ubicacion/update-ubicacion.dto";
import { UbicacionEntity } from "../domain/entities/ubicacion.entity";



export class UbicacionesServices{
    async create(createubicacionDto:CreateUbicacionDto):Promise<UbicacionEntity>{
        try {
            const newUbicacion = await prisma.ubicacion.create({
                data:{...createubicacionDto}
            })

            if( !newUbicacion) throw Error("No se pudo anadir la Ubicacion")
        
        return newUbicacion
        } catch (error) {
            throw Error('error'); 
        }
    }

    async update(updateUbicacionDto:UpdateUbicacionDto, id:string):Promise<UbicacionEntity>{
        try {
            const updateUbicacion = await prisma.ubicacion.update({
                where: {id_ubicacion: updateUbicacionDto.id_ubicacion},
                data: {...updateUbicacionDto
                    }
                })

            if( !updateUbicacion ) throw Error("No se encuentra la Ubicacion")
            return updateUbicacion
        } catch (error) {
            throw Error('error');
        }
    }

    async findAll(): Promise<UbicacionEntity[]>{
        try {
            const newUbicacion = await prisma.ubicacion.findMany( );
        
    
            return newUbicacion;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<UbicacionEntity>{
        try {
            const deleteUbicacion = await prisma.ubicacion.delete({
                where: {id_ubicacion: +id}
            })
            if( !deleteUbicacion) throw Error("No se encuentra la Ubicacion")
            return deleteUbicacion
        } catch (error) {
            throw Error('error');
        }
      }
}