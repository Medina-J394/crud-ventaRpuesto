export class CreateClienteDto{
    constructor(
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public ubicacionID:number
    ){};

    static create(object:{[key:string]:any}):[string?, CreateClienteDto?]{
        const {nombre, apellido, cedula, ubicacionID} = object

        if(!apellido) return ['apellido es requerido', undefined]
        if(!nombre) return ['nombre es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]



        if( !ubicacionID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +ubicacionID ) ) return ["El id debe ser un numero", undefined];


        return [undefined, new CreateClienteDto(nombre, apellido, +cedula, +ubicacionID)]
    }
}