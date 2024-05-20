export class UpdateClienteDto{
    constructor(
        public id_cliente:number,
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public ubicacionID:number
    ){};

    static update(object:{[key:string]:any}):[string?, UpdateClienteDto?]{
        const {id_cliente, nombre, apellido, cedula, ubicacionID} = object

        if(!apellido) return ['apellido es requerido', undefined]
        if(!nombre) return ['nombre es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]


        if(isNaN(+id_cliente)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_cliente < 0 ) return ['id tiene que ser un numero positivo', undefined]

        if( !ubicacionID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +ubicacionID ) ) return ["El id debe ser un numero", undefined];


        return [undefined, new UpdateClienteDto(+id_cliente, nombre, apellido, +cedula, +ubicacionID)]
    }
}