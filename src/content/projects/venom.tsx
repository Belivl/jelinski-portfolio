import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function VenomPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const imagePath = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphialssfs_wHxxHVB6f.avif?updatedAt=1769088130031",
      alt: "testingphialssfs",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials2_VhBgdfenN.avif?updatedAt=1769088130078",
      alt: "testingphials2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials3_RiUbrsAHWb.avif?updatedAt=1769088130122",
      alt: "testingphials3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials5_ehIUiEcoGk.avif?updatedAt=1769088130132",
      alt: "testingphials5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials6_EBjjnHR9-.avif?updatedAt=1769088130066",
      alt: "testingphials6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials7yg_lr7sSmtVRG.avif?updatedAt=1769088130100",
      alt: "testingphials7yg",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Enviroment1_P6HL3EYgC.avif?updatedAt=1769088129729",
      alt: "Enviroment1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/scene%20structure2_tLsyMslOm.avif?updatedAt=1769088130047",
      alt: "scene_structure2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Part2fix2_SkY9yPzkM.avif?updatedAt=1769088130147",
      alt: "Part2fix2",
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
        <YouTubeEmbed
          videoId="sfdSUw73QSI"
          title="Venom Esport Team Intro"
          className="w-full"
        />

        <div>
          <h2>Variations</h2>
          <h3>Other</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          {imagePath.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="cursor-pointer"
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                className="rounded-xl w-full h-auto border border-grey-300 bg-grey-400 grid place-items-center"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-9 rounded-md w-full">
          <YouTubeEmbed
            videoId="kIftEYqm4NQ"
            title="Venom Esport Team Intro alt"
            className="w-full"
          />

          <YouTubeEmbed
            videoId="TnzErCv8tQM"
            title="Venom Esport Team Intro alt 2"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
