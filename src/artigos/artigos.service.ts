import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';
import { Artigo, ArtigoDocument } from './entities/artigo.entity';

@Injectable()
export class ArtigosService {
  constructor(@InjectModel(Artigo.name) private artigoModel: Model<ArtigoDocument>) { }

  create(createArtigoDto: CreateArtigoDto) {
    const artigo = new this.artigoModel(createArtigoDto)
    return artigo.save()
  }

  findAll() {
    return this.artigoModel.find()
  }

  findOne(id: string) {
    return this.artigoModel.findById(id)
  }

  update(id: string, updateArtigoDto: UpdateArtigoDto) {
    return this.artigoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateArtigoDto,
      },
      {
        new: true,
      }
    )
  }

  remove(id: string) {
    return this.artigoModel.deleteOne(
      {
        _id: id,
      }
    ).exec()
  }
}
