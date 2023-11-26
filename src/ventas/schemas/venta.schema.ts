/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: "ventas" })
export class Ventas {

    @Prop({ name: nombre }) 
    nombre: string;
}
