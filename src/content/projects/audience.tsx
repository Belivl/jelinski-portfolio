import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function AudiencePost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const imagePath = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_3ypFa2THm.avif?updatedAt=1769090151530",
      alt: "Frame1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame2_X8uyJSsuS.avif?updatedAt=1769090151620",
      alt: "Frame2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame3_cx2wZEN5o.avif?updatedAt=1769090151783",
      alt: "Frame3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame4_0VHW4g9U2.avif?updatedAt=1769090151921",
      alt: "Frame4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame5_igMvotM9Q.avif?updatedAt=1769090151943",
      alt: "Frame5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame6_PKQhKIKQUm.avif?updatedAt=1769090151806",
      alt: "Frame6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame7_4yF6nW-Wvi.avif?updatedAt=1769090152078",
      alt: "Frame7",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame8_3zFwEdRU9.avif?updatedAt=1769090151781",
      alt: "Frame8",
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
      <div className="flex flex-col gap-0 rounded-3xl w-full overflow-clip">
        <div className="grid grid-cols-1 w-full">
          {imagePath.map((item, index) => (
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
                className=" w-full  bg-grey-400 grid place-items-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
