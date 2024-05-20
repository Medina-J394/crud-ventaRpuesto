-- CreateTable
CREATE TABLE "Ubicacion" (
    "id_ubicacion" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id_ubicacion")
);

-- CreateTable
CREATE TABLE "Repuesto" (
    "id_repuesto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "tipo" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,

    CONSTRAINT "Repuesto_pkey" PRIMARY KEY ("id_repuesto")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "ubicacionID" INTEGER NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id_compra" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "clienteID" INTEGER NOT NULL,
    "repuestoID" INTEGER NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id_compra")
);

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_ubicacionID_fkey" FOREIGN KEY ("ubicacionID") REFERENCES "Ubicacion"("id_ubicacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_clienteID_fkey" FOREIGN KEY ("clienteID") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_repuestoID_fkey" FOREIGN KEY ("repuestoID") REFERENCES "Repuesto"("id_repuesto") ON DELETE RESTRICT ON UPDATE CASCADE;
