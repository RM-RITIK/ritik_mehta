'use server'
import fs from 'fs';
import path from 'path';


export async function getImages() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const imageNames = fs.readdirSync(imagesDirectory);
  let images:any[] = [];
  imageNames.map((imageName) => {
    images.push( {
      src: `/images/${imageName}`,
      alt: imageName.replace(/\.[^/.]+$/, ""),
    });
  });
  return images;
}