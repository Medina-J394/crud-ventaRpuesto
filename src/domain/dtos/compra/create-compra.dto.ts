export class CreateCompraDto{
    constructor(
    public fecha: Date,
    public clienteID: number,
    public repuestoID: number 
    ){}

    static create(object:{[key:string]:any}):[string?, CreateCompraDto?]{
        const {fecha, clienteID, repuestoID} = object
        let newDate = fecha;

        if( !fecha ) return ["Necesita fecha de la compra", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if( !clienteID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +clienteID ) ) return ["El id debe ser un numero", undefined];

        if( !repuestoID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +repuestoID ) ) return ["El id debe ser un numero", undefined];


        return [undefined, new CreateCompraDto(fecha, +clienteID, +repuestoID)]
    }
}