import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
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

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    const result = await this.photosService.deleteOne(id);

    if (result.affected === 0) throw new NotFoundException();
  }
}
