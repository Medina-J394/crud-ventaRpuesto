export class UpdateRepuestoDto{
    constructor(
    public id_repuesto:number,
    public nombre: string,
    public precio: number,
    public tipo : string,
    public modelo: string,
    public fabricante: string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateRepuestoDto?]{
        const {id_repuesto, nombre, precio, tipo, modelo, fabricante} = object

        if(!nombre) return ['nombre es requerido', undefined]
        if(!precio) return ['precio es requerido', undefined]
        if(!modelo) return ['modelo es requerida', undefined]
        if(!fabricante) return ['fabricante es requerido', undefined]
        if(!tipo) return ['tipo es requerido', undefined]

        if(isNaN(+id_repuesto)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_repuesto < 0 ) return ['id tiene que ser un numero positivo', undefined]

        return [undefined, new UpdateRepuestoDto(+id_repuesto, nombre, +precio, tipo, modelo, fabricante)]
    }
}