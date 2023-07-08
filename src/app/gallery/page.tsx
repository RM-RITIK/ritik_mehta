'use client'

import React from 'react';

import { getImages }  from '../../api/images'
import Navbar from '../components/navbar';
import 'flowbite'

interface adventuresProps {

}


const Adventures: React.FC<adventuresProps> = ({}) => {

    const [images, setImages] = React.useState<any>([]);

    const fetchImages = async () => {
        try {
            const adventures = await getImages();
            await setImages(adventures);
            
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

    React.useEffect(() => {
        fetchImages();
      },[])

      return (
        <main>
            <Navbar />
            
            <div className="grid grid-cols-5 gap-4">
            {images.map((image:any, index:number) => (
                <div key={index}>
                <img src={image.src} alt={`Image ${index}`} className="w-full h-5/6" />
                <figcaption style={{'textAlign': 'center'}}>
                 {image.alt}
                </figcaption>
                </div>
            ))}
            </div>

        </main>
        
      );
}

export default Adventures;