import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArtigoDocument = HydratedDocument<Artigo>;

@Schema()
export class Artigo {
  @Prop()
  titulo: string;

  @Prop()
  subtitulo: string;

  @Prop()
  imagem: string;

  @Prop()
  conteudo: string;
}



export const ArtigoSchema = SchemaFactory.createForClass(Artigo);