/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: "producto"})
export class Producto {
  @Prop({ nombre: true })
  nombre: string;

  @Prop({ categoria: true })
  categoria: string;

  @Prop({ precioUnitario: true })
  precioUnitario: number;
}

