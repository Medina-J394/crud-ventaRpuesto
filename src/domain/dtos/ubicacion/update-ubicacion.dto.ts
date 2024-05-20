export class UpdateUbicacionDto{
    constructor(
        public id_ubicacion: number,
        public estado:string,
        public municipio: string,
        public ciudad: string,
        public direccion: string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateUbicacionDto?]{
        const {id_ubicacion, estado, municipio, ciudad, direccion} = object

        if(!estado) return ['estado es requerido', undefined]
        if(!municipio) return ['municipio es requerido', undefined]
        if(!ciudad) return ['ciudad es requerida', undefined]
        if(!direccion) return ['direccion es requerido', undefined]

        if(isNaN(+id_ubicacion)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_ubicacion < 0 ) return ['id tiene que ser un numero positivo', undefined]

        return [undefined, new UpdateUbicacionDto(+id_ubicacion, estado, municipio, ciudad, direccion)]
    }
}