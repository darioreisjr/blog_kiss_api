import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtigosService } from './artigos.service';
import { ArtigosController } from './artigos.controller';
import { Artigo, ArtigoSchema } from './entities/artigo.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Artigo.name, schema: ArtigoSchema }])],
  controllers: [ArtigosController],
  providers: [ArtigosService]
})
export class ArtigosModule { }
