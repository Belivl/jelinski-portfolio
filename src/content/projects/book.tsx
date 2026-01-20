import { SmartImage } from "@/components/ui/SmartImage";
export function BookPost() {
  const imagePath = [
    //Images
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4_Fm9ppWJ5I.avif?updatedAt=1768490544944&ik-s=0ea3cfac2d0de1b5420870b87026a038bfe8d369",
      alt: "BookMisc4PS",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4flat_vNNSNtOm3.avif?updatedAt=1768490544709&ik-s=031915d76acba80a267a0d5ef4bb75082d9aeb11",
      alt: "ProfilePicV2pro",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc3_z-xpDGAmU.avif?updatedAt=1768490544752&ik-s=166d55dd591c23a9ca07d6a5abbe1729fa11e163",
      alt: "BackgroundVideo",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc3flat_BhH4sRYt8J.avif?updatedAt=1768490544902&ik-s=e69e052d5011c039191b6e64e44dbdbf32bbae55",
      alt: "FB_BackgroundV2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc1_iyEUJzmicl.avif?updatedAt=1768490544726&ik-s=a5e6d06a3402e3786be63bb06280d0092504cf85",
      alt: "FB_BackgroundV2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc2PS_dw1IqQf1p.avif?updatedAt=1768490544881&ik-s=68d56e9404ad5d41eb61fd3d116af15fbe21d554",
      alt: "FB_BackgroundV2",
    },
  ];
  return (
    <div className="flex flex-col gap-9 rounded-md w-full">
      <div>
        <h2>Montage</h2>
        <h3>Video</h3>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <iframe
          width="1400"
          height="787"
          className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200 aspect-video"
          src="https://www.youtube.com/embed/BDAp2I-NMhs?si=qAy0ubABmWMFfPF5"
          title="Hi im ya0 - Swappin (prod. beatsbybeau) (Official Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <h2>Graphics</h2>
        <h3>Variants</h3>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full justify-start items-start">
        {imagePath.map((item) => (
          <SmartImage
            src={item.src}
            alt={item.alt}
            width={600}
            height={200}
            className="rounded-xl w-full border border-grey-300 bg-grey-400 grid place-items-center"
          />
        ))}
      </div>
    </div>
  );
}
