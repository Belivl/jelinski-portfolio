import { SmartImage } from "@/components/ui/SmartImage";
export function AmandelPost() {
  const images = [
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/g3420_w9LNfbNgZq.avif?updatedAt=1768490637961&ik-s=af243231094c8804eafeecaf216af6dafdbf455b",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_1_XtN2k-gPo.avif?updatedAt=1768490637691&ik-s=146cfc67cf9692ae2119be201ab65ffcf7292d76",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/FRONTV5_eJyf5SAJ7d.avif?updatedAt=1768490637725&ik-s=5512beb9f64bf14145939141727b3e33e0f7b5e5",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_3_w79oDUpUMy.avif?updatedAt=1768490637981&ik-s=a1e5021325c64663239fb67ade417bf68b376ab2",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_4_SkPMsmURfM.avif?updatedAt=1768490637807&ik-s=e2c3004d65df8f48aae4293304da0fcde4fdbc0b",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_5_color_oPXXX6lEm.avif?updatedAt=1768490637690&ik-s=692ad0581a8b3555f95c18729c0a872f348b9b23",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_5_lxAor-UzZN.avif?updatedAt=1768490637922&ik-s=15a74ab485f589b1473da300a40dbe46864e4457",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/20220530-Amandel2Packaging_T0JyPn2dz.avif?updatedAt=1768490637695&ik-s=12377636cf1069b2d48ff0be117f6c750e199170",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/20220530-Amandel1Packaging_fMqdXVA_1.avif?updatedAt=1768490637655&ik-s=beb43f1026b4821bce131e50fdc91005511a3470",
  ];

  return (
    <div className="flex flex-col w-full ">
      <div className="grid grid-cols-2 gap-3 w-full">
        {images.map((item) => (
          <SmartImage
            src={item}
            alt={item}
            width={1400}
            height={700}
            className=" w-full rounded-md bg-grey-400 grid place-items-center"
          />
        ))}
      </div>
    </div>
  );
}
