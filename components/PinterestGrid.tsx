'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import ima1 from '@/assets/images/0IOrVXfffIw7k85h-generated_image.jpg';
import ima2 from '@/assets/images/NU9zDBt0PQJy6jhJ-generated_image.jpg';
import ima3 from '@/assets/images/gefKek3q7ZaePAMM-generated_image.jpg';
import ima4 from '@/assets/images/ePl0mgQK2JiKNgzk-generated_image.jpg';
import ima5 from '@/assets/images/تنزيل (5).jpg';
import ima6 from '@/assets/images/axqKbKuJ0B5RuF4a-generated_image.jpg';
import ima7 from '@/assets/images/hCX2vnOgOJDA5mRP-generated_image.jpg';

export default function PinterestGrid() {
  const [imageHeights, setImageHeights] = useState<number[]>([]);

  const images = [
    { src: ima7, alt: 'ima7' },
    { src: ima6, alt: 'ima6' },
    { src: ima5, alt: 'ima5' },
    { src: ima4, alt: 'ima4' },
    { src: ima3, alt: 'ima3' },
    { src: ima2, alt: 'ima2' },
    { src: ima1, alt: 'ima1' },
    { src: ima7, alt: 'ima7-duplicate' },
    { src: ima6, alt: 'ima6-duplicate' },
    { src: ima5, alt: 'ima5-duplicate' },
    { src: ima4, alt: 'ima4-duplicate' },
    { src: ima3, alt: 'ima3-duplicate' },
    { src: ima2, alt: 'ima2-duplicate' },
    { src: ima1, alt: 'ima1-duplicate' },
  ];

  useEffect(() => {
    const heights: number[] = new Array(images.length).fill(0);
    let loadedImages = 0;

    images.forEach((img, index) => {
      const image = new window.Image();
      image.src = typeof img.src === 'string' ? img.src : img.src.src;
      image.onload = () => {
        // احتفظ بالارتفاع الأصلي أو قم بتعديله حسب الحاجة
        heights[index] = image.height * 0.5; // تقليص إلى 50%
        loadedImages++;

        // تحديث الحالة فقط عند تحميل جميع الصور
        if (loadedImages === images.length) {
          setImageHeights([...heights]);
        }
      };
      image.onerror = () => {
        heights[index] = 300; // قيمة افتراضية في حالة فشل التحميل
        loadedImages++;
        if (loadedImages === images.length) {
          setImageHeights([...heights]);
        }
      };
    });
  }, []);

  return (
    <div className="w-full columns-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={500} // العرض الافتراضي
            height={imageHeights[index] || 300} // الارتفاع الديناميكي أو قيمة افتراضية
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}