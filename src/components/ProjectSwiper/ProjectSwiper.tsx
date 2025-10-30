"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";

interface ProjectSwiperProps {
  images: string[];
  projectName: string;
}

const ProjectSwiper = ({ images, projectName }: ProjectSwiperProps) => {
  // Type-safe Swiper ref
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative w-full ">
      {/* Custom Prev/Next buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 transform  z-10 px-3 py-2 bg-black/50 text-white rounded-full w-[60px] h-[60px]
         hover:bg-black/70 cursor-pointer text-2xl"
      >
        ❮
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 top-1/2 transform z-10 px-3 py-2 bg-black/50 text-white rounded-full w-[60px] h-[60px] hover:bg-black/70 cursor-pointer text-2xl"
      >
        ❯
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // continue autoplay after manual interaction
        }}
        className="w-full h-116"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-96 ">
            <Image
              src={img || "/placeholder.svg"}
              alt={`${projectName} ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSwiper;
