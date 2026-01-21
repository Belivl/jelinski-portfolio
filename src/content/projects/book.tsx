import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function BookPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const imagePath = [
    //Images
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4_bOibHM2gT.avif?updatedAt=1769087528102",
      alt: "BookMisc4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4flat_tqDkiax12.avif?updatedAt=1769087527940",
      alt: "BookMisc4flat",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc3_ssENzm20t.avif?updatedAt=1769087528102",
      alt: "BookMisc3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc3flat_w487evLRM.avif?updatedAt=1769087528138",
      alt: "BookMisc3flat",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc1_qB4Ld8Rcv.avif?updatedAt=1769087528145",
      alt: "BookMisc1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc2PS_-D7XwJZOQ.avif?updatedAt=1769087527962",
      alt: "BookMisc2PS",
    },
  ];

  return (
    <>
      <SimpleLightbox
        images={imagePath}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <div className="flex flex-col gap-9 rounded-md w-full">
        <div>
          <h2>Montage</h2>
          <h3>Video</h3>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <YouTubeEmbed
            videoId="BDAp2I-NMhs"
            title="Alcohol Brand HR Guidebook"
            className="w-full"
          />
        </div>
        <div>
          <h2>Graphics</h2>
          <h3>Variants</h3>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full justify-start items-start">
          {imagePath.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="cursor-pointer"
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                width={600}
                height={200}
                className="rounded-xl w-full border border-grey-300 bg-grey-400 grid place-items-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
