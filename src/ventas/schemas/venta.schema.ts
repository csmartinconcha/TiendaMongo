/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";
import { Producto } from "src/producto/schemas/producto.schema";



@Schema({ collection: "venta"})
export class Venta {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Producto', required: true })
  producto: Producto;

  @Prop({ cantidad: true })
  cantidad: number;

  @Prop({ precioTotal: true })
  precioTotal: number;

  @Prop({ type: Date, default: Date.now })
  fechaVenta: Date;

  @Prop({ vendedor: true })
  vendedor: string;
}
  
  

