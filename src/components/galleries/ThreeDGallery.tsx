import { motion } from "motion/react";
import { SameHeightRow } from "../mdx/SameHeightRow";
import { GalleryAccordion } from "./GalleryAccordion";
import { SmartImage } from "../ui/SmartImage";
import { useState } from "react";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

const THREED_IMAGES = [
  // 2025
  {
    id: "tinkerbell1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2025/Tinkerbell1GrainStarsPS_7LN5fvFoM.avif?updatedAt=1768494985847&ik-s=a8c619d36b8fdf6b661a22c57706ee965301b063",
    alt: "Tinkerbell1",
    year: "2025",
  },
  {
    id: "love_angel",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2025/JEL-LoveAg4_y1ZuG2vqOt.avif?updatedAt=1768494985970&ik-s=6caf5650fb77c04d06d46489b353134d338d4909",
    alt: "LoveAngel",
    year: "2025",
  },
  // 2024
  {
    id: "emeraldcut1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/emeraldcut1_WFksWt29N.avif?updatedAt=1768494946254&ik-s=1cff146805402fdbdeed7c9a6cce8364848875e0",
    alt: "emeraldcut1",
    year: "2024",
  },
  {
    id: "cube_growth",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/cubeGrowth1TestGrained2_R7ZdaE4_F.avif?updatedAt=1768494945973&ik-s=fc939c7da4e105be53b9ea109b8885fb4571d420",
    alt: "cubeGrowth",
    year: "2024",
  },
  {
    id: "gem1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/gem1_0x4Bx1KIa.avif?updatedAt=1768494946318&ik-s=1ab83b478f94f3f93d06ff0d340ea95d81362424",
    alt: "gem1",
    year: "2024",
  },
  {
    id: "tie",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2024/Tie-2_i9XlD5E0S.avif?updatedAt=1768494946513&ik-s=567defcb5ac5406beabc75e5d01e35267db2b0a9",
    alt: "Tie",
    year: "2024",
  },
  {
    id: "chris",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2023/Chris25blender-2_FZjr1lpEd.avif?updatedAt=1768494873351&ik-s=12ab608e122d2e115724a35f450cdae2d9b389fb",
    alt: "Chris",
    year: "2023",
  },
  // 2022
  {
    id: "bf1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/BWflyEv0236_zAHGp8_0c.avif?updatedAt=1768494727084&ik-s=6f23db398facf77fba735320516a834171699a3e",
    alt: "Butterflies",
    year: "2022",
  },
  {
    id: "bf2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/flyEv0116_zDNyOhm2F.avif?updatedAt=1768494727160&ik-s=94802b52377b9cacc3a77bcbb2d2517e80bd06f4",
    alt: "Butterflies",
    year: "2022",
  },
  {
    id: "bf3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/f95TestV2_tGwv5XZPr.avif?updatedAt=1768494806874&ik-s=901e4a7090005bba729d31a56e2202f1b3129774",
    alt: "Butterflies",
    year: "2022",
  },
  {
    id: "diffgr",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/DiffGr1_qae9H6IO3.avif?updatedAt=1768494726964&ik-s=e939cdf1d0b8b453c13f430f196e5e4698f8dca7",
    alt: "DiffGr",
    year: "2022",
  },
  {
    id: "sugar_donut",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/SugarDonutCrystalsV1_ItW-e5gN5.avif?updatedAt=1768494727501&ik-s=03a9ef37e0251eae2f55173397375f87dc6f3ebd",
    alt: "SugarDonut",
    year: "2022",
  },
  {
    id: "jack_daniels",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/JackDaniels1v2connected-2_kqvkv8FGs.avif?updatedAt=1768494807151&ik-s=dd69201464cceaba6403d33ece4cc24c84a209f1",
    alt: "JackDaniels",
    year: "2022",
  },
  {
    id: "test3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/test3_SoSq74aOn.avif?updatedAt=1768494727091&ik-s=446c47a28f1bbe5eca1dd53f5bc31d04ecd14902",
    alt: "test3",
    year: "2022",
  },
  {
    id: "test_f220",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF220v2_MSL_6vM78.avif?updatedAt=1768494727019&ik-s=c9b80711dcf3b974925ecaf6b50bc7f0fbfae55f",
    alt: "TestRenderF220",
    year: "2022",
  },
  {
    id: "test_f180",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF180_Pc_u7--LS.avif?updatedAt=1768494727098&ik-s=6b4bec850bfcd197e83a4abb83c9728d411e5990",
    alt: "TestRenderF180",
    year: "2022",
  },
  {
    id: "test_f139",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF139_L6hesqe0MN.avif?updatedAt=1768494727193&ik-s=cbe5a98cb91b1c1a9061bad6a288ac64224b6988",
    alt: "TestRenderF139",
    year: "2022",
  },
  {
    id: "test_f0",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TestRenderF0_DkQpIY4jN.avif?updatedAt=1768494726879&ik-s=a2ad25eb5e769506f21bbd224f749b345b8aa4c2",
    alt: "TestRenderF0",
    year: "2022",
  },
  {
    id: "trippy",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/TrippySwirling_k3VhoAn2j.avif?updatedAt=1768494727237&ik-s=430a97fc25de59f8c15a6ac6ecd1ea8edca7354a",
    alt: "TrippySwirling",
    year: "2022",
  },
  {
    id: "caustic",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/CausticTestPrism1_jXxBf-LK1.avif?updatedAt=1768494806870&ik-s=596a5e08ee50e424c84309ca8a6f81eaccdf6c50",
    alt: "CausticTestPrism",
    year: "2022",
  },
  {
    id: "pencils1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/Pencils0083_MwAAAtXR8.avif?updatedAt=1768494807076&ik-s=6220a859b19e364988a81b1dda516aee56e7cef7",
    alt: "Pencils0083",
    year: "2022",
  },
  {
    id: "pencils2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2022/PencilsA0139_iu69DLBru.avif?updatedAt=1768494807041&ik-s=b1847e22ee1636554bfa868333ab0f3adcd27092",
    alt: "PencilsA0139",
    year: "2022",
  },
  // 2021
  {
    id: "536_1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/536942_4Tzv4VROc.avif?updatedAt=1768494648975&ik-s=28c8e2178e1c45a6841a9758fbbe61c08cc083de",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "536_2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/536941_fnQkE5zHFX.avif?updatedAt=1768494649017&ik-s=3079dc9b8490d908c33fdbe3c690f185e550ac33",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "536_3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/536943_t9aGD-ffVM.avif?updatedAt=1768494648791&ik-s=2a11220acc6cf8c9364cb826c966fd886a26888a",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "michal_wsb",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MichalJelinski-WSB-MartwaNatura2_zaHkC5ps7.avif?updatedAt=1768494532982&ik-s=c32136b4e8c989fd963938209459da98fed06ab2",
    alt: "MichalJelinski-WSB-MartwaNatura2",
    year: "2021",
  },
  {
    id: "536_4",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/53694_geXybX1j7B.avif?updatedAt=1768494648640&ik-s=31b09771c096ee38778b3ea87b06fb3d5115a2cc",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "wsb_2021",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/20210507-WSB1v2__GNBHKi_dQ.avif?updatedAt=1768494648674&ik-s=620e90a42c25289cac11471f4cb1a528459dffec",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "wsb1v2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/WSB1v2_B9uiZj9r9x.avif?updatedAt=1768494648756&ik-s=4e804d303bbb06ee93bd4d471c106fff19ce644f",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "wsb10_12",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/wsb10_12_MJ_v2_WNOQb99Xbk.avif?updatedAt=1768494648625&ik-s=ec5dabd537e0d09a9b009237419b7ac01045491e",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "tablescene1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MJtablescene1_GArSUmbAO5.avif?updatedAt=1768494648611&ik-s=8197acfe4b087b9f3299563d3aa553a037d175c8",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "tablescene2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MJtablescene1_GArSUmbAO5.avif?updatedAt=1768494648611&ik-s=8197acfe4b087b9f3299563d3aa553a037d175c8",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "img_2021",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/IMG_20210308_230541_jwH80Dyo4.avif?updatedAt=1768494533576&ik-s=de76f12230b4a71790c8ba3a5df71de6448a551e",
    alt: "Placeholder",
    year: "2021",
  },
  {
    id: "ring_test",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/ringTest1s_6TDu5Y439.avif?updatedAt=1768494648565&ik-s=25b12c94e7e9f2fede3b913758d401498847223e",
    alt: "ringTest1s",
    year: "2021",
  },
  // 2020
  {
    id: "laser1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Laser0024_yOEdzYYFjE.avif?updatedAt=1768494448530&ik-s=3dd701e982a57bd6e8de142b37c6c6509a061bbd",
    alt: "Laser0024",
    year: "2020",
  },
  {
    id: "laser2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Laser0106_7Th-sSKEul.avif?updatedAt=1768494448535&ik-s=1d4a96928e06a6125836e38ffa804c31b0fc8058",
    alt: "Laser0106",
    year: "2020",
  },
  {
    id: "laser3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/Laser0044_KfZAJbj3f.avif?updatedAt=null&ik-s=e0a93a2e31ce3dc1f6edda85dd2fc3cc09164d00",
    alt: "Laser0044",
    year: "2020",
  },
  {
    id: "pyrite",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/pyrite1_dgNoj1Ry7Z.avif?updatedAt=1768494041748&ik-s=eb092ea1bc527b590c4eba5ce0a0dabbc6bb0ce7",
    alt: "pyrite1",
    year: "2020",
  },
  {
    id: "glasswave",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/exp1_jWWyfMTnbU.avif?updatedAt=1768494448542&ik-s=8b28c22c143dcb21e745ff80af5664477225a9ad",
    alt: "glasswave",
    year: "2020",
  },
  {
    id: "chairwhite",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/chairwhiteBG2_bPnEfHPCk.avif?updatedAt=1768494040933&ik-s=dca53f17898fbd366f8dc677900686cf718e3b90",
    alt: "chairwhite",
    year: "2020",
  },
  {
    id: "pill",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/pill235635_zkAB881Gac.avif?updatedAt=null&ik-s=ad1720e99c774ad0e4a7b5b0f1d1f06220c9eac4",
    alt: "pill",
    year: "2020",
  },
  {
    id: "jelinski1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/jelinskiLogo2_v1qofftvqn.avif?updatedAt=1768494448498&ik-s=0dd0ddb48765006b1f15b02b4b0d9b72c9005ff1",
    alt: "jelinskiLogo2",
    year: "2020",
  },
  {
    id: "jelinski2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/jelinskiLogo1_Ev97rjF0oz.avif?updatedAt=1768494448552&ik-s=ddc7a23d92bc7df546bc00a534c33bb7589a69cd",
    alt: "jelinskiLogo1",
    year: "2020",
  },
  {
    id: "jelinski3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/jelinskiLogo3_w8EbQZb86P.avif?updatedAt=1768494448559&ik-s=aa5128701cdd439bf659fdc718e47fd1c9b11950",
    alt: "jelinskiLogo3",
    year: "2020",
  },
  {
    id: "jelinski4",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/jelinskiLogo4_9Zq_d6s1Uz.avif?updatedAt=1768494448486&ik-s=dcd36346339d54ece1176f101cbf3248bbc85ed0",
    alt: "jelinskiLogo4",
    year: "2020",
  },
  // 2018
  {
    id: "r3dguilt",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/R3DGUILT360_Bz_ESkE-E.avif?updatedAt=1768493879881&ik-s=29d15180f673af4cb98a761358ea55302caf4b1f",
    alt: "R3DGUILT360",
    year: "2018",
  },
  {
    id: "sang_bleu",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Sang%20Bleu%20Scene_l0pYv6IwAd.avif?updatedAt=1768493879911&ik-s=60a57620cde5cfba28e3d906011302c3773bf7c3",
    alt: "Sang Bleu Scene",
    year: "2018",
  },
  {
    id: "img_2018_1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Image_Ht5PBSFrQ.avif?updatedAt=1768493879905&ik-s=c5ebf5723f9866f3bfd018d9c16c8513239e0bd6",
    alt: "Placeholder",
    year: "2018",
  },
  {
    id: "sang_bleu1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Sang%20Bleu1_634_4KWsZa.avif?updatedAt=1768493879910&ik-s=32202950175ba35e69b61e0f45fb0c0eabf363c9",
    alt: "Placeholder",
    year: "2018",
  },
  {
    id: "hublot1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Hublotcopy%201_lj0HcS4Kl.avif?updatedAt=1768493879858&ik-s=119a6d9149422f0c5c62a8fc9e3e1fdb351a259c",
    alt: "Placeholder",
    year: "2018",
  },
  {
    id: "hublot1d",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Hublotcopy%201d_opH5UjeXU9.avif?updatedAt=1768493879919&ik-s=9d8cbcc5f93e2710290f6c5dc5b447933988b933",
    alt: "Placeholder",
    year: "2018",
  },
  {
    id: "img_10_6666",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/10_6666_j8bmGCo57.avif?updatedAt=1768493879877&ik-s=e562bdce0ce3ae6376d31c725b2dce7b1acc2013",
    alt: "Placeholder",
    year: "2018",
  },
];

export function ThreeDGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (id: string) => {
    const index = THREED_IMAGES.findIndex((img) => img.id === id);
    if (index !== -1) {
      setInitialIndex(index);
      setLightboxOpen(true);
    }
  };

  const getImg = (id: string) => THREED_IMAGES.find((img) => img.id === id)!;

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
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["tinkerbell1", "love_angel"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("tinkerbell1"), getImg("love_angel")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2024">
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["emeraldcut1", "cube_growth", "gem1"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("emeraldcut1"),
              getImg("cube_growth"),
              getImg("gem1"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
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
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["bf1", "bf2", "bf3"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("bf1"), getImg("bf2"), getImg("bf3")]}
          ></SameHeightRow>
          <iframe
            width="1400"
            height="787"
            className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
            src="https://www.youtube.com/embed/KQo5-6ObNtM?si=fax2yoG5JNZrkxfK"
            title="Venom Esport Team Intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["diffgr", "sugar_donut"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("diffgr"), getImg("sugar_donut")]}
          ></SameHeightRow>
          <div className="grid grid-cols-2 md:grid-flow-col gap-4 w-full">
            {[
              "jack_daniels",
              "test3",
              "test_f220",
              "test_f180",
              "test_f139",
              "test_f0",
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
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["trippy", "caustic"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("trippy"), getImg("caustic")]}
          ></SameHeightRow>

          <div className="grid grid-cols-1 md:grid-flow-col gap-4 w-full">
            <div
              onClick={() => openLightbox("pencils1")}
              className="cursor-pointer"
            >
              <SmartImage
                src={getImg("pencils1").src}
                alt={getImg("pencils1").alt}
                className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
              />
            </div>
            <div
              onClick={() => openLightbox("pencils2")}
              className="cursor-pointer"
            >
              <SmartImage
                src={getImg("pencils2").src}
                alt={getImg("pencils2").alt}
                className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl w-full h-auto"
              />
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lFidgqvkpbA?si=1Gb0mY-CaYBMESty"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl border border-white/10 w-full"
            ></iframe>
          </div>
        </GalleryAccordion>

        <GalleryAccordion year="2021">
          <div className="grid grid-cols-3 gap-4 w-full">
            {["536_1", "536_2", "536_3"].map((id) => (
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
          <div className="w-full" onClick={() => openLightbox("michal_wsb")}>
            <SmartImage
              src={getImg("michal_wsb").src}
              alt={getImg("michal_wsb").alt}
              className="transition-all duration-500 ease-in-out object-contain border border-white/10 rounded-xl cursor-pointer w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            {["536_4", "wsb_2021", "wsb1v2"].map((id) => (
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
              const ids = ["wsb10_12", "tablescene1", "tablescene2"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("wsb10_12"),
              getImg("tablescene1"),
              getImg("tablescene2"),
            ]}
          ></SameHeightRow>

          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["img_2021", "ring_test"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("img_2021"), getImg("ring_test")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2020">
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["laser1", "laser2", "laser3"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("laser1"), getImg("laser2"), getImg("laser3")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["pyrite", "glasswave"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("pyrite"), getImg("glasswave")]}
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
              const ids = ["jelinski1", "jelinski2", "jelinski3", "jelinski4"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("jelinski1"),
              getImg("jelinski2"),
              getImg("jelinski3"),
              getImg("jelinski4"),
            ]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2018">
          <div className="w-full" onClick={() => openLightbox("r3dguilt")}>
            <img
              src={getImg("r3dguilt").src}
              alt={getImg("r3dguilt").alt}
              className="transition-all duration-500 ease-in-out w-full border border-white/10 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-full" onClick={() => openLightbox("sang_bleu")}>
            <img
              src={getImg("sang_bleu").src}
              alt={getImg("sang_bleu").alt}
              className="transition-all duration-500 ease-in-out w-full border border-white/10 rounded-xl cursor-pointer"
            />
          </div>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["img_2018_1", "sang_bleu1"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("img_2018_1"), getImg("sang_bleu1")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["hublot1", "hublot1d", "img_10_6666"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("hublot1"),
              getImg("hublot1d"),
              getImg("img_10_6666"),
            ]}
          ></SameHeightRow>
        </GalleryAccordion>
      </motion.div>
    </>
  );
}
