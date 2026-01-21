import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function RikoHDPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const images = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/IconRikohdv2_YKsc9OyKP.avif?updatedAt=1769093685262",
      alt: "IconRikohdv2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/IconRikohdv2offline_8RqkYyo8x.avif?updatedAt=1769093685217",
      alt: "IconRikohdv2offline",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Rlogov2_OANoQCARA.avif?updatedAt=1769087872030",
      alt: "Rlogov2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/fbBannerRikohdv2_EzVKsQUUU.avif?updatedAt=1769093742084",
      alt: "fbBannerRikohdv2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/YoutubeBannerRikohd_1S8SqVux0.avif?updatedAt=1769093741963",
      alt: "YoutubeBannerRikohd",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/YoutubeBannerRikohdv3_tHuX7rUN7.avif?updatedAt=1769093741917",
      alt: "YoutubeBannerRikohdv3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/PreviewBannersRikoHD%20v2_oN6IMA1fQ.avif?updatedAt=1769093723204",
      alt: "PreviewBannersRikoHD",
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
                className=" w-full rounded-md bg-grey-400 grid place-items-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
