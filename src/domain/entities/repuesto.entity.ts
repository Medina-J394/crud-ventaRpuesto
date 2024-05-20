export class RepuestoEntity{
    constructor(
        public id_repuesto:number,
        public nombre: string,
        public precio:number,
        public tipo: string,
        public modelo: string,
        public fabricante: string
    ){}
}