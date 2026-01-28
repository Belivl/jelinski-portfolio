import { motion } from "motion/react";
import { SameHeightRow } from "@/components/ui/SameHeightRow";
import { GalleryAccordion } from "@/components/galleries/GalleryAccordion";
import { SmartImage } from "@/components/ui/SmartImage";
import { useState } from "react";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

const THREED_IMAGES = [
  // 2025
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2025/Tinkerbell1GrainStarsPS_A4vmq-qA3.avif?updatedAt=1769089602552",
    alt: "tinkerbell1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2025/JEL-LoveAg4_bNSYPBWi1z.avif?updatedAt=1769089602828",
    alt: "loveangel",
  },
  // 2024
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/emeraldcut1_XUoU9AsqZ.avif?updatedAt=1769089535903",
    alt: "emeraldcut1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/cubeGrowth1TestGrained2_ZagUb6b-7.avif?updatedAt=1769089535484",
    alt: "cubegrowth",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/gem1_u-2mWdron.avif?updatedAt=1769089535867",
    alt: "gem1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/Tie-2_0vR00WK-cD.avif?updatedAt=1769089536075",
    alt: "tie",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2023/Chris25blender-2_6L7KnLgHnD.avif?updatedAt=1769089517612",
    alt: "chris",
  },
  // 2022
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/BWflyEv0236_m2XI5JW-_.avif?updatedAt=1769089467781",
    alt: "butterflies1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/flyEv0116_W4slF2PrBt.avif?updatedAt=1769089467802",
    alt: "butterflies2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/f95TestV2_OmMRj9kcpg.avif?updatedAt=1769089456285",
    alt: "butterflies3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/DiffGr1_PHRgGjvC0.avif?updatedAt=1769089467804",
    alt: "diffgr",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/SugarDonutCrystalsV1_za22iY334.avif?updatedAt=1769089467728",
    alt: "sugardonut",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/JackDaniels1v2connected-2_WBYo4UPvj.avif?updatedAt=1769089456355",
    alt: "jackdaniels",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/test3_CwzPjp12Sl.avif?updatedAt=1769089467694",
    alt: "test3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF220v2_HXtHuemvcC.avif?updatedAt=1769089467842",
    alt: "testrenderf220",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF180_r7Btb1_uB.avif?updatedAt=1769089467410",
    alt: "testrenderf180",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF139_nlOIlyV_C.avif?updatedAt=1769089467730",
    alt: "testrenderf139",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF0_U7FT1W_yCu.avif?updatedAt=1769089467943",
    alt: "testrenderf0",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TrippySwirling_bIojpaARSD.avif?updatedAt=1769089467622",
    alt: "trippyswirling",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/CausticTestPrism1_5Y8DdbsWC.avif?updatedAt=1769089456143",
    alt: "caustictestprism",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/Pencils0083_S-WQ81yA-.avif?updatedAt=1769089456350",
    alt: "pencils0083",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/PencilsA0139_BCTHK-aal.avif?updatedAt=1769089456354",
    alt: "pencilsa0139",
  },
  // 2021
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/536942__FjPpEUJ4.avif?updatedAt=1769089302814",
    alt: "placeholder1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/536941_VUywDrzOO.avif?updatedAt=1769089302656",
    alt: "placeholder2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/536943_1zuLs8R65.avif?updatedAt=1769089302634",
    alt: "placeholder3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MichalJelinski-WSB-MartwaNatura2_JgaCJp1PtT.avif?updatedAt=1769089169502",
    alt: "michaljelinski-wsb-martwanatura2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/desk53694_BtK8xsgzKR.avif?updatedAt=1769089272174",
    alt: "placeholder4",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/20210507-WSB1v2_ELPK8_RX-.avif?updatedAt=1769089272179",
    alt: "placeholder5",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/wsb10_12_MJ_v2_RRPraWLxF.avif?updatedAt=1769089272026",
    alt: "placeholder6",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/wsb10_12_MJ_xFxVqxore.avif?updatedAt=1769089213376",
    alt: "placeholder7",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MJtablescene1_l4wNMKtJsl.avif?updatedAt=1769089272135",
    alt: "placeholder8",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/IMG_20210308_230541@0.75x_WaNw8z_U0.avif?updatedAt=1769089168984",
    alt: "placeholder10",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/ringTest1_mS9wF_TE6.avif?updatedAt=1769089272020",
    alt: "ringtest1s",
  },
  // 2020
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/Laser0024_uSwdRj6Gzo.avif?updatedAt=1769088940317",
    alt: "laser0024",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/Laser0106_sPrEHSLlu.avif?updatedAt=1769088940383",
    alt: "laser0106",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/Laser0044_qo9mZaM0pl.avif?updatedAt=1769088940363",
    alt: "laser0044",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/pyrite1_0ae2Ahgoed.avif?updatedAt=1769088940375",
    alt: "pyrite1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/exp1_hk0N1uUOe.avif?updatedAt=1769088940250",
    alt: "glasswave",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/chairwhiteBG2_w8R6G1V8_.avif?updatedAt=1769088940353",
    alt: "chairwhite",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/pill235635_CaX3jhHN3.avif?updatedAt=1769088940293",
    alt: "pill",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/jelinskiLogo2_-ZejY5652.avif?updatedAt=1769088940301",
    alt: "jelinskilogo2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/jelinskiLogo1_ESUcJGanee.avif?updatedAt=1769088940286",
    alt: "jelinskilogo1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/jelinskiLogo3_SEN0gYzhY.avif?updatedAt=1769088940274",
    alt: "jelinskilogo3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/3d/jelinskiLogo4_-l--Zgej4.avif?updatedAt=1769088940323",
    alt: "jelinskilogo4",
  },
  // 2018
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/R3DGUILT360_HtmpQFUxoC.avif?updatedAt=1769089870289",
    alt: "r3dguilt360",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/SangBleuScene_XuMap7BIrK.avif?updatedAt=1769089870112",
    alt: "sangbleuscene",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Hublotcopy2_-uCAXqjin.avif?updatedAt=1769089870048",
    alt: "placeholder11",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/SangBleu1_htbvQi0mL.avif?updatedAt=1769089870069",
    alt: "placeholder12",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Hublotcopy1d_SMNgurCms.avif?updatedAt=1769089870186",
    alt: "placeholder13",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Hublotcopy1_ZyK2Isekl.avif?updatedAt=1769089870054",
    alt: "placeholder14",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/HublotcopyBack_D0ti5iN-6F.avif?updatedAt=1769089870100",
    alt: "placeholder15",
  },
];

export function ThreeDGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (alt: string) => {
    const index = THREED_IMAGES.findIndex((img) => img.alt === alt);
    if (index !== -1) {
      setInitialIndex(index);
      setLightboxOpen(true);
    }
  };

  const getImg = (alt: string) => THREED_IMAGES.find((img) => img.alt === alt)!;

  return (
    <>
      <SimpleLightbox
        images={THREED_IMAGES}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col gap-4 w-full"
      >
        <GalleryAccordion year="2025" defaultOpen={true}>
          <SameHeightRow
            className="md:rounded-xl rounded-md overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["tinkerbell1", "loveangel"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("tinkerbell1"), getImg("loveangel")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2024">
          <SameHeightRow
            className="md:rounded-xl rounded-md overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["emeraldcut1", "cubegrowth", "gem1"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("emeraldcut1"),
              getImg("cubegrowth"),
              getImg("gem1"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="md:rounded-xl rounded-md overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["tie", "chris"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("tie"), getImg("chris")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2022">
          <SameHeightRow
            className="md:rounded-xl rounded-md overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["butterflies1", "butterflies2", "butterflies3"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("butterflies1"),
              getImg("butterflies2"),
              getImg("butterflies3"),
            ]}
          ></SameHeightRow>
          <YouTubeEmbed
            videoId="KQo5-6ObNtM"
            title="Venom Esport Team Intro"
            className="w-full"
          />

          <SameHeightRow
            className="md:rounded-xl rounded-md overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["diffgr", "sugardonut"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("diffgr"), getImg("sugardonut")]}
          ></SameHeightRow>
          <div className="grid grid-cols-2 md:grid-flow-col gap-4 w-full">
            {[
              "jackdaniels",
              "test3",
              "testrenderf220",
              "testrenderf180",
              "testrenderf139",
              "testrenderf0",
            ].map((id) => (
              <div
                key={id}
                onClick={() => openLightbox(id)}
                className="cursor-pointer"
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
                />
              </div>
            ))}
          </div>
          <YouTubeEmbed
            videoId="bGi3_TnjfeY"
            title="ExonNation Esport Team - Official Intro"
            className="w-full"
          />
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["trippyswirling", "caustictestprism"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("trippyswirling"), getImg("caustictestprism")]}
          ></SameHeightRow>

          <div className="grid grid-cols-1 md:grid-flow-col gap-4 w-full">
            <div
              onClick={() => openLightbox("pencils0083")}
              className="cursor-pointer"
            >
              <SmartImage
                src={getImg("pencils0083").src}
                alt={getImg("pencils0083").alt}
                className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
              />
            </div>
            <div
              onClick={() => openLightbox("pencilsa0139")}
              className="cursor-pointer"
            >
              <SmartImage
                src={getImg("pencilsa0139").src}
                alt={getImg("pencilsa0139").alt}
                className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
              />
            </div>
            <YouTubeEmbed
              videoId="lFidgqvkpbA"
              title="3D Art Showcase"
              className="w-full"
            />
          </div>
        </GalleryAccordion>

        <GalleryAccordion year="2021">
          <div className="grid grid-cols-3 gap-4 w-full">
            {["placeholder1", "placeholder2", "placeholder3"].map((id) => (
              <div
                key={id}
                onClick={() => openLightbox(id)}
                className="cursor-pointer"
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
                />
              </div>
            ))}
          </div>
          <div
            className="w-full"
            onClick={() => openLightbox("michaljelinski-wsb-martwanatura2")}
          >
            <SmartImage
              src={getImg("michaljelinski-wsb-martwanatura2").src}
              alt={getImg("michaljelinski-wsb-martwanatura2").alt}
              className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl cursor-pointer w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            {["placeholder4", "placeholder5", "placeholder6"].map((id) => (
              <div
                key={id}
                onClick={() => openLightbox(id)}
                className="cursor-pointer"
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
                />
              </div>
            ))}
          </div>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["placeholder7", "placeholder8"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("placeholder7"), getImg("placeholder8")]}
          ></SameHeightRow>

          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["placeholder10", "ringtest1s"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("placeholder10"), getImg("ringtest1s")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2020">
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["laser0024", "laser0106", "laser0044"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("laser0024"),
              getImg("laser0106"),
              getImg("laser0044"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["pyrite1", "glasswave"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("pyrite1"), getImg("glasswave")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["chairwhite", "pill"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("chairwhite"), getImg("pill")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = [
                "jelinskilogo2",
                "jelinskilogo1",
                "jelinskilogo3",
                "jelinskilogo4",
              ];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("jelinskilogo2"),
              getImg("jelinskilogo1"),
              getImg("jelinskilogo3"),
              getImg("jelinskilogo4"),
            ]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2018">
          <div className="w-full" onClick={() => openLightbox("r3dguilt360")}>
            <SmartImage
              src={getImg("r3dguilt360").src}
              alt={getImg("r3dguilt360").alt}
              className="transition-all duration-500 ease-in-out w-full border border-white/10 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-full" onClick={() => openLightbox("sangbleuscene")}>
            <SmartImage
              src={getImg("sangbleuscene").src}
              alt={getImg("sangbleuscene").alt}
              className="transition-all duration-500 ease-in-out w-full border border-white/10 rounded-xl cursor-pointer"
            />
          </div>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["placeholder11", "placeholder12"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("placeholder11"), getImg("placeholder12")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["placeholder13", "placeholder14", "placeholder15"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("placeholder13"),
              getImg("placeholder14"),
              getImg("placeholder15"),
            ]}
          ></SameHeightRow>
        </GalleryAccordion>
      </motion.div>
    </>
  );
}
