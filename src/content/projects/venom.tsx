import { SmartImage } from "@/components/ui/SmartImage";
export function VenomPost() {
  const imagePath = [
    //Images
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphialssfs_TLWZXzAX3.avif?updatedAt=1768495631017&ik-s=b26a66a786c6f8fc45e1088b9a861e47086d84d9",
      alt: "testingphials",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials2_Qb7AHG_jb.avif?updatedAt=1768495636619&ik-s=c7a2d53ce0297e20d78c947086ee526f8d7ff214",
      alt: "testingphials2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials3_eubU9rkl4d.avif?updatedAt=1768495630983&ik-s=3172722c7f269ad3b9f8c7bd789362d2f038e97d",
      alt: "testingphials3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials5_GgjRfG9Gv.avif?updatedAt=1768495631278&ik-s=4992ccbbe359bf447a1ea72395dd2e7766994d45",
      alt: "testingphials5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials6_IlisQsQy-.avif?updatedAt=1768495630921&ik-s=d896b79d08ac2e89fc98460bd8724350f3d7e07c",
      alt: "testingphials6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/testingphials7yg_JZk6aHVgf.avif?updatedAt=1768495630942&ik-s=5dcca8a77ea20b436d240792c064f022025cd756",
      alt: "testingphials7",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Enviroment1_ZKYkkXCsX.avif?updatedAt=1768495630925&ik-s=2cafd23134af022abe740ada88fcf19a2290dc08",
      alt: "Enviroment1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/scene%20structure2_lKbFGZPyb.avif?updatedAt=1768495636479&ik-s=b6d5f5505fdf340cb8257a343ec788e11aafb1e6",
      alt: "scene_structure2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Part2fix2_Cuf3YUn9C.avif?updatedAt=1768495630931&ik-s=96523f901b803c93e0a0ab079569ca7808d5962d",
      alt: "Part2fix2",
    },
  ];
  return (
    <div className="flex flex-col gap-9 rounded-md w-full">
      <iframe
        width="1400"
        height="787"
        className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
        src="https://www.youtube.com/embed/sfdSUw73QSI?si=Nz91G05QiQWYiQiu"
        title="Venom Esport Team Intro"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div>
        <h2>Variations</h2>
        <h3>Other</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        {imagePath.map((item) => (
          <SmartImage
            src={item.src}
            alt={item.alt}
            className="rounded-xl w-full h-auto border border-grey-300 bg-grey-400 grid place-items-center"
          />
        ))}
      </div>
      <div className="flex flex-col gap-9 rounded-md w-full">
        <iframe
          width="1400"
          height="787"
          className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
          src="https://www.youtube.com/embed/kIftEYqm4NQ?si=HVXBwkecmKzOehZ3"
          title="Venom Esport Team Intro alt"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="1400"
          height="787"
          className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
          src="https://www.youtube.com/embed/TnzErCv8tQM?si=dGCpCQd18_HXmkJD"
          title="Venom Esport Team Intro alt 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
