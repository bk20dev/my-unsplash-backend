import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [TypeOrmModule.forRoot({ autoLoadEntities: true }), PhotosModule],
})
export class AppModule {}
