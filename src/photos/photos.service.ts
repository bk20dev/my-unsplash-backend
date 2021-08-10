import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/createPhoto.dto';
import { Photo } from './models/photo.entity';
import { getImageSize } from './utils/getImageSize';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photosRepository: Repository<Photo>,
  ) {}

  async create(data: CreatePhotoDto): Promise<Photo> {
    const photo = new Photo();
    photo.label = data.label;
    photo.url = data.url;
    photo.timestamp = new Date();

    const { width, height } = await getImageSize(data.url);
    photo.width = width;
    photo.height = height;

    return this.photosRepository.save(photo);
  }

  findAll(): Promise<Photo[]> {
    return this.photosRepository.find();
  }

  deleteOne(id: string) {
    return this.photosRepository.delete(id);
  }
}
