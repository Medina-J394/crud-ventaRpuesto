export class CreateRepuestoDto{
    constructor(
    public nombre: string,
    public precio: number,
    public tipo : string,
    public modelo: string,
    public fabricante: string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateRepuestoDto?]{
        const {nombre, precio, tipo, modelo, fabricante} = object

        if(!nombre) return ['nombre es requerido', undefined]
        if(!precio) return ['precio es requerido', undefined]
        if(!modelo) return ['modelo es requerida', undefined]
        if(!fabricante) return ['fabricante es requerido', undefined]
        if(!tipo) return ['tipo es requerido', undefined]

        return [undefined, new CreateRepuestoDto(nombre, +precio, tipo, modelo, fabricante)]
    }
}