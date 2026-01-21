import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function ExonPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const imagePath: { src: string; alt: string }[] = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/exon/exon_logo_Gi-Qou-mR.avif",
      alt: "exon_logo",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/exon/EXONINTROv0840_Wss6-i-GP.avif",
      alt: "EXONINTROv0840",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/exon/EXONINTROv2out3_Njo1XRnGx.avif",
      alt: "EXONINTROv2out3",
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
          <h2>Animation</h2>
          <h3>Video</h3>
        </div>
        <YouTubeEmbed
          videoId="bGi3_TnjfeY"
          title="ExonNation Esport Team - Official Intro"
          className="w-full"
        />

        <div>
          <h2>Variations</h2>
          <h3>Other</h3>
        </div>
        <YouTubeEmbed
          videoId="ETHVBRdolGA"
          title="ExonNation - NoFloorWindow R&D"
          className="w-full"
        />

        <YouTubeEmbed
          videoId="gs2d1bUQGuM"
          title="ExonNation - Red R&D"
          className="w-full"
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
      </div>
    </>
  );
}
