import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function AmandelPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const images = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/g3420_3zWxr1MWP.avif?updatedAt=1769087011596",
      alt: "g3420",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_1_eR7Tm_MYeO.avif?updatedAt=1769087011817",
      alt: "AmandelPackagingV6_1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/FRONTV5_taLLrZxCM.avif?updatedAt=1769087011689",
      alt: "FRONTV5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_3_RW9joCFwIH.avif?updatedAt=1769087011856",
      alt: "AmandelPackagingV6_3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_2_wnsbPmm79R.avif?updatedAt=1769087011770",
      alt: "AmandelPackagingV6_2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_4__fHN9eEG51.avif?updatedAt=1769087011869",
      alt: "AmandelPackagingV6_4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_5_bYWETQdGgz.avif?updatedAt=1769087011841",
      alt: "AmandelPackagingV6_5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_5_color_Ga2WtsqaZ.avif?updatedAt=1769087011792",
      alt: "AmandelPackagingV6_5_color",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/20220530-Amandel1Packaging_60DSn2ouXj.avif?updatedAt=1769087011667",
      alt: "20220530-Amandel1Packaging",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/20220530-Amandel2Packaging_e-pvi3CNR.avif?updatedAt=1769087011636",
      alt: "20220530-Amandel2Packaging",
    },
  ];

  return (
    <>
      <SimpleLightbox
        images={images}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <div className="flex flex-col w-full ">
        <div className="grid grid-cols-2 gap-3 w-full">
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="cursor-pointer"
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                width={1400}
                height={700}
                className=" w-full h-auto rounded-md bg-grey-400 grid place-items-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
