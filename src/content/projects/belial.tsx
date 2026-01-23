import { useState } from "react";
import { SameHeightRow } from "@/components/ui/SameHeightRow";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function BelialPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const images = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/InstaBelial2017BannerPart1_YZy53smI2.avif?updatedAt=1769087276289",
      alt: "InstaBelial2017BannerPart1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/InstaBelial2017BannerPart2_S8oemlDP9.avif?updatedAt=1769087276265",
      alt: "InstaBelial2017BannerPart2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/InstaBelial2017BannerPart3_b7uXK0ZVa.avif?updatedAt=1769087276299",
      alt: "InstaBelial2017BannerPart3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Out%20of%20the%20Black%20002%20-min_CQ9sGtM0Tp.avif?updatedAt=1769087488222",
      alt: "Out of the Black 002",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Out-of-the-Black-002-BACKGROUNDv0WEB_bIMK-Ckukr.avif?updatedAt=1769087488517",
      alt: "Out-of-the-Black-002-BACKGROUNDv0WEB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/HeaderBelial%20v4-min_-Ljf8yiW7k.avif?updatedAt=1769087488232",
      alt: "HeaderBelial v4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Iconv4_SOLI06f1y6.avif?updatedAt=1769087488185",
      alt: "Iconv4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/0088_wQXhbOkILm.avif?updatedAt=1769087488154",
      alt: "0088",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Belial21_0erH_LDTI.avif?updatedAt=1769087488171",
      alt: "Belial21",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Belial2018_8cEcMAJL-.avif?updatedAt=1769087488178",
      alt: "Belial2018",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Belial2017ICON_vfmg80blJR.avif?updatedAt=1769087488126",
      alt: "Belial2017ICON",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Belial2017ICON2_mY09iXhBB.avif?updatedAt=1769087488114",
      alt: "Belial2017ICON2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/BelialLogov1__r7ayWfXRk.avif?updatedAt=1769087488180",
      alt: "BelialLogov1",
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
      <div className="flex flex-col gap-6  w-full overflow-clip">
        <div className="grid grid-cols-3 w-full rounded-xl overflow-clip">
          <SmartImage
            src={images[0].src}
            alt={images[0].alt}
            width={700}
            height={700}
            className=" w-full bg-grey-400 grid place-items-center cursor-pointer"
            onClick={() => openLightbox(0)}
          />
          <SmartImage
            src={images[1].src}
            alt={images[1].alt}
            width={700}
            height={700}
            className=" w-full bg-grey-400 grid place-items-center cursor-pointer"
            onClick={() => openLightbox(1)}
          />
          <SmartImage
            src={images[2].src}
            alt={images[2].alt}
            width={700}
            height={700}
            className=" w-full bg-grey-400 grid place-items-center cursor-pointer"
            onClick={() => openLightbox(2)}
          />
        </div>
        <SameHeightRow
          gap={16}
          roundEvery
          images={[images[3], images[4]]}
          onImageClick={(idx) => openLightbox(3 + idx)}
        />
        <SameHeightRow
          gap={16}
          roundEvery
          images={[images[5], images[6]]}
          onImageClick={(idx) => openLightbox(5 + idx)}
        />
        <div className="grid grid-cols-2 gap-6 w-full">
          {images.slice(7).map((item, index) => (
            <SmartImage
              key={index}
              src={item.src}
              alt={item.alt}
              width={1400}
              height={700}
              className=" w-full bg-grey-400 grid place-items-center cursor-pointer rounded-xl"
              onClick={() => openLightbox(7 + index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
