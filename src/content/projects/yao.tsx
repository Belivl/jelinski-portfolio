import { SmartImage } from "@/components/ui/SmartImage";
export function YaoPost() {
  const imagePath = [
    //Images
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/BGV1_E8jYTTJSA.avif?updatedAt=1768491344445&ik-s=44e9ed92d52ac4f4055b08edca27360a8ce0bf88",
      alt: "BGV1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/ProfilePicV2pro__CN9hLiyT.avif?updatedAt=1768491343477&ik-s=97dcbf7d8b4b258ba3fcf47095498fce323c59b0",
      alt: "ProfilePicV2pro",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/BackgroundVideo_fiAcTDv1v.avif?updatedAt=1768491343753&ik-s=d52acfdfd183051e1adfbbd6538e4e99c90c3ec5",
      alt: "BackgroundVideo",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/FB_BackgroundV2_79GBkdbtS.avif?updatedAt=1768491344173&ik-s=a898fcb3799e1a9931f5c671109991f2b7a84559",
      alt: "FB_BackgroundV2",
    },
    {
      src: "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705852000/gfx/project/yao/YT_BackgroundV2_i4e9vv.png",
      alt: "YT_BackgroundV2",
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
          className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
          src="https://www.youtube.com/embed/OiafdPtXwAA?si=B8NWZA0U25n2ms10"
          title="Hi im ya0 - Swappin (prod. beatsbybeau) (Official Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="1400"
          height="787"
          className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
          src="https://www.youtube.com/watch?v=WYQtbnCnQYM?si=B8NWZA0U25n2ms10"
          title="Hi im ya0 - She aint religious (Prod.Manic One) [Official video]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <h2>Graphics</h2>
        <h3>Variants</h3>
      </div>
      <div className="grid grid-cols-1 gap-8 w-full justify-start items-start">
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
