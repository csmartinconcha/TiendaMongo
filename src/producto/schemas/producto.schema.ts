/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: "producto"})
export class Producto {
  @Prop({ nombre: "nombre" })
  nombre: string;

  @Prop({ categoria: "categoria" })
  categoria: string;

  @Prop({ precioUnitario: "precioUnitario" })
  precioUnitario: number;
}

