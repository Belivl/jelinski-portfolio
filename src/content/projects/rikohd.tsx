import { SmartImage } from "@/components/ui/SmartImage";
export function RikoHDPost() {
  const images = [
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Icon%20Rikohd%20v2_CslFufefy.avif?updatedAt=1768491082717&ik-s=c8377d754d9fbe5852f49fc0266493c1371940d9",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Icon%20Rikohd%20v2offline_yjRqxOH0Qf.avif?updatedAt=1768491082681&ik-s=9f74cc153195121bf8bb179bcb86540d3d36c027",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Rlogov2_jKdZd9L9G.avif?updatedAt=1768491082718&ik-s=8e8ac932279adfc0faee0448fb59cd0689e01127",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/fb%20banner%20rikohdv2_Um75JEME8f.avif?updatedAt=1768491082642&ik-s=8bac767aa9494dcd6850894d9bef32351289e679",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Youtube%20Banner%20Rikohdv3_LH4m-5Ttvs.avif?updatedAt=1768491082705&ik-s=3ae2c634ab96f5547467b7032b3a3569ec602013",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Youtube%20Banner%20Rikohd_9Y2x_iGgV.avif?updatedAt=1768491082749&ik-s=38c1a0148519ef1a9fd3eaba513802b03afb060e",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Preview%20Banners%20RikoHD%20v2_bU_2Owz9Jd.avif?updatedAt=1768491082777&ik-s=6e8b93cf33c4ea8dbdfcb76ebcab90342d813343",
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
