import { prisma } from "../data/postgresql/database";
import { CreateRepuestoDto } from "../domain/dtos/repuesto/create-repuesto.dto";
import { UpdateRepuestoDto } from "../domain/dtos/repuesto/update-repuesto.dto";
import { RepuestoEntity } from "../domain/entities/repuesto.entity";



export class RepuestosService{
    async create(createRepuestoDto:CreateRepuestoDto):Promise<RepuestoEntity>{
        try {
            const newRepuesto = await prisma.repuesto.create({
                data:{...createRepuestoDto}
            })

            if( !newRepuesto) throw Error("No se pudo anadir el repuesto")
        
        return newRepuesto
        } catch (error) {
            throw Error('error'); 
        }
    }

    async update(updateRepuestoDto:UpdateRepuestoDto, id:string):Promise<RepuestoEntity>{
        try {
            const updateRepuesto = await prisma.repuesto.update({
                where: {id_repuesto: updateRepuestoDto.id_repuesto},
                data: {...updateRepuestoDto
                    }
                })

            if( !updateRepuesto ) throw Error("No se encuentra el repuesto")
            return updateRepuesto
        } catch (error) {
            throw Error('error');
        }
    }

    async findAll(): Promise<RepuestoEntity[]>{
        try {
            const newRepuesto = await prisma.repuesto.findMany( );
        
    
            return newRepuesto;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<RepuestoEntity>{
        try {
            const deleterepuesto = await prisma.repuesto.delete({
                where: {id_repuesto: +id}
            })
            if( !deleterepuesto) throw Error("No se encuentra el repuesto")
            return deleterepuesto
        } catch (error) {
            throw Error('error');
        }
      }
}