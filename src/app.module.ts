import { Module } from '@nestjs/common';
import { ArtigosModule } from './artigos/artigos.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ArtigosModule, MongooseModule.forRoot('mongodb+srv://dbblog:kiss1234@cluster0.cfl7kgb.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
