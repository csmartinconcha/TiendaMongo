import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class Venta extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Producto', required: true })
  producto: Producto;

  @Prop({ cantidad: true })
  cantidad: number;

  @Prop({ required: true })
  precioTotal: number;

  @Prop({ type: Date, default: Date.now })
  fechaVenta: Date;

  @Prop({ required: true })
  vendedor: string;
}
