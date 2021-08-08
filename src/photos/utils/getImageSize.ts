import fetch from 'node-fetch';
import imageSize from 'image-size';

export const getImageSize = async (url: string) => {
  const response = await fetch(url);
  const buffer = await response.buffer();

  const { width, height } = imageSize(buffer);
  return { width, height };
};
