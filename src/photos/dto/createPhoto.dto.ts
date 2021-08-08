import { MinLength, IsUrl } from 'class-validator';

export class CreatePhotoDto {
  @MinLength(3, {
    message: 'Label is too short',
  })
  label: string;

  @IsUrl()
  url: string;
}
