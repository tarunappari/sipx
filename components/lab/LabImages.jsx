import React from 'react'
import styles from '@/styles/lab/LabImages.module.scss'
import labImg0 from '@/public/assets/lab/lab.webp'
import labImg1 from '@/public/assets/lab/lab1.jpg'
import labImg2 from '@/public/assets/lab/lab2.jpg'
import labImg3 from '@/public/assets/lab/lab3.jpg'
import labImg4 from '@/public/assets/lab/lab4.jpg'
import labImg5 from '@/public/assets/lab/lab5.jpg'
import labImg6 from '@/public/assets/lab/lab6.jpg'
import labImg7 from '@/public/assets/lab/lab7.jpg'
import labImg8 from '@/public/assets/lab/lab8.jpg'
import labImg9 from '@/public/assets/lab/lab9.jpg'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  labImg0,
  labImg1,
  labImg2,
  labImg3,
  labImg4,
  labImg5,
  labImg6,
  labImg7,
  labImg8,
  labImg9
];

const LabImages = () => {

  return (
    <div className={styles.LabImgContainer}>
      <Carousel className={styles.LabImgCarousel}>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className={'carouselItemTestimonal'}>
              <div className="p-1">
                <div className={styles.imgContainer}>
                  <Image src={img} alt={`lab image ${index}`} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={'carouselbtn'} />
        <CarouselNext className={'carouselbtn'} />
      </Carousel>
    </div>
  )
}

export default LabImages;