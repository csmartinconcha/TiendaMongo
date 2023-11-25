/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasModule } from './ventas/ventas.module';
import { ProductosModule } from './productos/productos.module';

@Module({

  
  imports: [MongooseModule.forRoot('mongodb://mongo:clave123@localhost:27017/TiendaMongo'), ProductosModule, VentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


