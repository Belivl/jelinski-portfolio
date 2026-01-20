import { SmartImage } from "@/components/ui/SmartImage";
export function SnePost() {
  const images = [
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/32785948_1904156069635801_2385232765260922880_n_YcasD3goF.avif?updatedAt=1768495449746&ik-s=5634b259b02ada5dee40bf866b4b7d2c43561d1f",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/SneBannerv1_34UUSjBy_.avif?updatedAt=1768495450027&ik-s=eedaa6497cbf6b7e8a5dfcff6af8e48132c2dd12",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/SneIntrov0720_Pteg8Os8a.avif?updatedAt=1768495450044&ik-s=014112e5a67cd7df8eb6e137ee2651bf88e7db7a",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/sneprev1_7uQBvVifN.avif?updatedAt=1768495450023&ik-s=8740e137eab59c3a20ec56a77756af48c310fb5e",
    "https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/sneprev2_GGmLTt7ic.avif?updatedAt=1768495450022&ik-s=7955c0532a76a61240ac91df6f4c1315eea533e2",
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
