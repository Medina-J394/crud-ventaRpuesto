export class UpdateCompraDto{
    constructor(
        public id_compra: number,
        public fecha: Date,
        public clienteID: number,
        public repuestoID: number 
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateCompraDto?]{
        const {id_compra, fecha, clienteID, repuestoID} = object
        let newDate = fecha;

        if( !fecha ) return ["Necesita fecha de la compra", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(isNaN(+id_compra)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_compra < 0 ) return ['id tiene que ser un numero positivo', undefined]

        if( !clienteID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +clienteID ) ) return ["El id debe ser un numero", undefined];

        if( !repuestoID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +repuestoID ) ) return ["El id debe ser un numero", undefined];


        return [undefined, new UpdateCompraDto(+id_compra, fecha, +clienteID, +repuestoID)]
    }
}