import React from 'react';

export function PhotoGallery() {
    const images = [
        '/images/OurPhoto1.jpg',
        '/images/OurPhoto2.jpg',
        '/images/OurPhoto3.jpg',
        '/images/OurPhoto4.jpg',
        '/images/OurPhoto5.jpg',
        '/images/OurPhoto6.jpg',
      ];
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      );
}

