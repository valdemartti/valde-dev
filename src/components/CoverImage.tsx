import Image from "next/image";
import { useState } from "react";

export function CoverImage() {
  return (
    <div className="aspect-18/9 sm:aspect-18/5 relative overflow-hidden rounded-xl transition-opacity duration-75 flex items-center justify-center">
      <Image
        src="/unto-otso.jpg"
        className="object-cover w-full h-full"
        alt=""
        priority={true}
        width="704"
        height="200"
        sizes="(max-size: 640px) 704px, (max-size: 450px) 434px, 640px"
      />
    </div>
  );
}
