import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dto/createPhoto.dto';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Post()
  async create(@Body() data: CreatePhotoDto) {
    return await this.photosService.create(data);
  }

  @Get()
  async findAll() {
    return await this.photosService.findAll();
  }
}
