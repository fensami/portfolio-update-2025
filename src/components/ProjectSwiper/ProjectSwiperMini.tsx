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

const ProjectSwiperMini = ({ images, projectName }: ProjectSwiperProps) => {
  // Type-safe Swiper ref
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative w-full ">
      {/* Custom Prev/Next buttons */}

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // continue autoplay after manual interaction
        }}
        className="w-full h-60"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-96 ">
            <Image
              src={img || "/placeholder.svg"}
              alt={`${projectName} ${index + 1}`}
              fill
              className="object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSwiperMini;
