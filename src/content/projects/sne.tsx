import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function SnePost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const images = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/sne_logo.avif?updatedAt=1769087992044",
      alt: "sne_logo",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/SneBannerv1_CUbF4tiAY.avif?updatedAt=1769087967944",
      alt: "SneBannerv1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/SneIntrov0720_M_-8CWOUl.avif?updatedAt=1769087968214",
      alt: "SneIntrov0720",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/sneprev1_54sF9jlsQ.avif?updatedAt=1769087968200",
      alt: "sneprev1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/sneprev2_R5KRTw06D.avif?updatedAt=1769087968250",
      alt: "sneprev2",
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
