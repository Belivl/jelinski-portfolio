import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function YaoPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const imagePath = [
    //Images
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/BGV1_UNjagYoL_I.avif?updatedAt=1769088183812",
      alt: "BGV1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/ProfilePicV2pro_1EgOZmsz5.avif?updatedAt=1769088183594",
      alt: "ProfilePicV2pro",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/BackgroundVideo_drc0zGt7Yz.avif?updatedAt=1769088183851",
      alt: "BackgroundVideo",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/FB_BackgroundV2_OWNDeXe_sZ.avif?updatedAt=1769088183838",
      alt: "FB_BackgroundV2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/YT_BackgroundV2_Y7svRyv2n.avif?updatedAt=1769088183661",
      alt: "YT_BackgroundV2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/FrontCoverV2_z6l_2QrOdt.avif?updatedAt=1769088183792",
      alt: "FrontCoverV2",
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
            videoId="OiafdPtXwAA"
            title="Hi im ya0 - Swappin (prod. beatsbybeau) (Official Video)"
            className="w-full"
          />

          <YouTubeEmbed
            videoId="WYQtbnCnQYM"
            title="Hi im ya0 - She aint religious (Prod.Manic One) [Official video]"
            className="w-full"
          />
        </div>
        <div>
          <h2>Graphics</h2>
          <h3>Variants</h3>
        </div>
        <div className="grid grid-cols-1 gap-8 w-full justify-start items-start">
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
