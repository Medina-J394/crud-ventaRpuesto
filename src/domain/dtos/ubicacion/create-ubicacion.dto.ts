export class CreateUbicacionDto{
    constructor(
        public estado:string,
        public municipio: string,
        public ciudad: string,
        public direccion: string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateUbicacionDto?]{
        const {estado, municipio, ciudad, direccion} = object

        if(!estado) return ['estado es requerido', undefined]
        if(!municipio) return ['municipio es requerido', undefined]
        if(!ciudad) return ['ciudad es requerida', undefined]
        if(!direccion) return ['direccion es requerido', undefined]

        return [undefined, new CreateUbicacionDto(estado, municipio, ciudad, direccion)]
    }
}