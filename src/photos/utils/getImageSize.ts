import fetch from 'node-fetch';
import imageSize from 'image-size';
import { UnsupportedMediaTypeException } from '@nestjs/common';

export const getImageSize = async (url: string) => {
  const response = await fetch(url);
  const buffer = await response.buffer();

  try {
    const { width, height } = imageSize(buffer);
    return { width, height };
  } catch {
    throw new UnsupportedMediaTypeException();
  }
};
