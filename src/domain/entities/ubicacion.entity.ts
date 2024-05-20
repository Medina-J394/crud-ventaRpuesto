export class UbicacionEntity{
    constructor(
        public id_ubicacion:number,
        public estado:string,
        public municipio:string,
        public ciudad:string,
        public direccion:string
    ){}
}