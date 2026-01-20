import { SmartImage } from "@/components/ui/SmartImage";
export function AudiencePost() {
  const imagePath = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_VxVdLR-Ll7.avif?updatedAt=1768490680345&ik-s=98ed2986c5893e1012aa652b423da07f525057a9",
      alt: "Frame1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame2_56JO-NMrtd.avif?updatedAt=1768490680611&ik-s=37aa5d8ab1978334f543054ed7d8c75acc107ba5",
      alt: "Frame2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame3_iTx-Ht94Q.avif?updatedAt=1768490680648&ik-s=8601d49ca206e8bd59ead6c34c6cd8ccedff3d87",
      alt: "Frame3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame4_Cr44vedyCN.avif?updatedAt=1768490680597&ik-s=607e290184f2c221846bca44b0b182f57edf5ca8",
      alt: "Frame4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame5_xrbLGytOm-.avif?updatedAt=1768490680479&ik-s=926f3350ba0f5f28a1359d88a90c16b7432c7c97",
      alt: "Frame5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame6_6Bak6TH-x7.avif?updatedAt=1768490680608&ik-s=4ec0e55f128fb2f0590d58ee47f0f50caa208426",
      alt: "Frame6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame7_GQZnTVXwA1.avif?updatedAt=1768490680617&ik-s=6c3b21a4641cec68044601c0e28822245d0f1df4",
      alt: "Frame7",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame8_mmGtuZ1Ox.avif?updatedAt=1768490680584&ik-s=da9e3c47b62516fa25a27507c94f4519a5344c3f",
      alt: "Frame8",
    },
  ];
  return (
    <div className="flex flex-col gap-0 rounded-3xl w-full overflow-clip">
      <div className="grid grid-cols-1 w-full">
        {imagePath.map((item) => (
          <SmartImage
            src={item.src}
            alt={item.alt}
            width={1400}
            height={700}
            className=" w-full  bg-grey-400 grid place-items-center"
          />
        ))}
      </div>
    </div>
  );
}
