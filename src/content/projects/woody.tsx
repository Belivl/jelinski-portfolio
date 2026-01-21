import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SameHeightRow } from "@/components/ui/SameHeightRow";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function WoodyPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const images = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/fire-white_48QEOwXB0.avif?updatedAt=1769088288127",
      alt: "fire-white",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/slice-white_KIMhyB1UI.avif?updatedAt=1769088288294",
      alt: "slice-white",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/plank-white_rfGWM2LQ9.avif?updatedAt=1769088288367",
      alt: "plank-white",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/salami_oPq3VEyjL.avif?updatedAt=1769088296244",
      alt: "salami",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/mushrooms_57p3I99QZ.avif?updatedAt=1769088296241",
      alt: "mushrooms",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/leafs_6bENHk0cL5.avif?updatedAt=1768489389358&ik-s=92529811631c242dafc24da0177d05d9807b52d2",
      alt: "leafs",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/crust_Mghy2_KzmA.avif?updatedAt=1769088296272",
      alt: "crust",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/plank_r37uU031V.avif?updatedAt=1769088296416",
      alt: "plank",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/woody-brown_SPJAS4zm3.avif?updatedAt=1769088296291",
      alt: "woody-brown",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/fire-color_7L6lrh7Ra.avif?updatedAt=1769088295981",
      alt: "fire-color",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/brick-oven_o6XPW3WKj.avif?updatedAt=1769088296507",
      alt: "brick-oven",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/leafs_Xf4vJSMj5U.avif?updatedAt=1769088296297",
      alt: "leafs",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/mushrooms_57p3I99QZ.avif?updatedAt=1769088296241",
      alt: "mushrooms",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/salami_oPq3VEyjL.avif?updatedAt=1769088296244",
      alt: "salami",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/wisienka_YkdjpKXDZ5.avif?updatedAt=1769088321743",
      alt: "wisienka",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/pak_28Iuf1w7Dw.avif?updatedAt=1769088321694",
      alt: "pak",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/gwiazda_FDTCZzu8si.avif?updatedAt=1769088321696",
      alt: "gwiazda",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/lisc%20otsu_XTz-C7u3AO.avif?updatedAt=1769088321737",
      alt: "lisc otsu",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/tulipan3_juYRYNPdA.avif?updatedAt=1769088321707",
      alt: "tulipan3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/palmeta_3iQLtisemN.avif?updatedAt=1769088321713",
      alt: "palmeta",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/tulipan1_nKYzJwePdE.avif?updatedAt=1769088321751",
      alt: "tulipan1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/fire1_ZunjUKcrgJ.avif?updatedAt=1769088321707",
      alt: "fire1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/fire0_ycZc11LQA.avif?updatedAt=1769088321381",
      alt: "fire0",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev2_9kXGgK7NY.avif?updatedAt=1769088321661",
      alt: "firev2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev3_XO3UXGporQ.avif?updatedAt=1769088321726",
      alt: "firev3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev4_3N4z07wRI.avif?updatedAt=1769088321665",
      alt: "firev4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev5_HJpexDZ01.avif?updatedAt=1769088321728",
      alt: "firev5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/fire/firev6_Yzw9HC0fo.avif?updatedAt=1769088321710",
      alt: "firev6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/customfont_04uJ3LkDJz.avif?updatedAt=1769088216829",
      alt: "customfont",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/Sketchs_A1NCFN3ir.avif?updatedAt=1769088486114",
      alt: "Sketchs",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch4_asy4Uztqz.avif?updatedAt=1769088486052",
      alt: "logoSketch4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch3_Is86UG75Dz.avif?updatedAt=1769088485988",
      alt: "logoSketch3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch2_RA4gsduPzv.avif?updatedAt=1769088485984",
      alt: "logoSketch2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/sketch/logoSketch1_6cx0eorRu.avif?updatedAt=1769088485767",
      alt: "logoSketch1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv0_aGqSQBarj.avif?updatedAt=1769088381029",
      alt: "woodyv0",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv1_q0iiJZcAt.avif?updatedAt=1769088380833",
      alt: "woodyv1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv2_lJcW4-ITAU.avif?updatedAt=1769088381240",
      alt: "woodyv2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv3_aqj-FFmna.avif?updatedAt=1769088381171",
      alt: "woodyv3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv4_wlIMHj0_y.avif?updatedAt=1769088381067",
      alt: "woodyv4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv5_7Zr_wyoZx.avif?updatedAt=1769088381094",
      alt: "woodyv5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logotype/woodyv6_l73r_uOyk.avif?updatedAt=1769088381031",
      alt: "woodyv6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plank0_0LMiCOttC.avif?updatedAt=1769088465226",
      alt: "plank0",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plankv1_rXu4jhnBu.avif?updatedAt=1769088465250",
      alt: "plankv1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plankv2_V_hIPJujv.avif?updatedAt=1769088465187",
      alt: "plankv2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/plank/plankv3_xaDgtkbvf.avif?updatedAt=1769088465640",
      alt: "plankv3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov0_5GQnXV-Te.avif?updatedAt=1769088362664",
      alt: "logov0",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov1_EtmTU0-CjC.avif?updatedAt=1769088363187",
      alt: "logov1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov2_lNjq41xrh.avif?updatedAt=1769088362918",
      alt: "logov2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov4_I0FxmMy06.avif?updatedAt=1769088363313",
      alt: "logov4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov5_Nyd2Z7Mye.avif?updatedAt=1769088363124",
      alt: "logov5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov6_jCFaoYY2X.avif?updatedAt=1769088363034",
      alt: "logov6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov7_ZaIwWgAH4.avif?updatedAt=1769088362953",
      alt: "logov7",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov8_y9V71IS0v.avif?updatedAt=1769088362929",
      alt: "logov8",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov9_gA1bdVXAG.avif?updatedAt=1769088363071",
      alt: "logov9",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov10_EfTsaW1kIV.avif?updatedAt=1769088363093",
      alt: "logov10",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov11_UfGOCQyo_v.avif?updatedAt=1769088362965",
      alt: "logov11",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/logo/logov12_CicF7PMZg.avif?updatedAt=1769088363069",
      alt: "logov12",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v7_rE1k0OuFGX.avif?updatedAt=1769088245540",
      alt: "Visa2v7",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v6_43Jh2pkKX.avif?updatedAt=1769088245482",
      alt: "Visa2v6",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_brHGwjJF0B.avif?updatedAt=1769088245453",
      alt: "visa-front",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa2_hgElVmdNB4.avif?updatedAt=1769088245523",
      alt: "visa2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v5_k7OAAdsw5.avif?updatedAt=1769088245529",
      alt: "Visa2v5",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v4_dDQjG6Z5Lf.avif?updatedAt=1769088245569",
      alt: "Visa2v4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/flyer/Leafletv2_3ypIucpUa.avif?updatedAt=1769088338666",
      alt: "Leafletv2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/flyer/A6spec1_b4EaIFdui.avif?updatedAt=1769088338906",
      alt: "A6spec1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/flyer/A6spec__Bk8iOr4j.avif?updatedAt=1769088338922",
      alt: "A6spec",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20190821_194912-1_gKskOcEhq.avif?updatedAt=1769088436853",
      alt: "IMG_20190821_194912-1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190725-truck2_XZiTeGZsZ.avif?updatedAt=1769088436474",
      alt: "20190725-truck2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190730-truck4v2.jpg_MzzzggzjaE.avif?updatedAt=1769088436722",
      alt: "20190730-truck4v2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190730-truck3v2.jpg_8hZaDZQwn.avif?updatedAt=1769088436321",
      alt: "20190730-truck3v2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_191111_2sM_9j9YC.avif?updatedAt=1769088437502",
      alt: "IMG_20200706_191111",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_191125_a28YxDjKO.avif?updatedAt=1769088437474",
      alt: "IMG_20200706_191125",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_192015__01_5N1qMbVVx.avif?updatedAt=1769088437156",
      alt: "IMG_20200706_192015",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_192246_P9fLKNIXc.avif?updatedAt=1769088439125",
      alt: "IMG_20200706_192246",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/truck-white_D-qLZi6jvB.avif?updatedAt=1769088288338",
      alt: "truck-white",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/slice-white_KIMhyB1UI.avif?updatedAt=1769088288294",
      alt: "slice-white",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/drink_KrujEq-9K.avif?updatedAt=1769088288024",
      alt: "drink",
    },
  ];

  return (
    <>
      <SimpleLightbox
        images={images}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <div>
        <div className="BannerWTF bg-(--wood-dark) flex items-center p-16 rounded-3xl w-full gap-9">
          <div className="flex flex-col justify-center items-center p-0 gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
            <h3>FIRE</h3>
            <SmartImage
              className="w-auto h-[80px] cursor-pointer"
              width={200}
              height={200}
              src={images[0].src}
              alt={images[0].alt}
              onClick={() => openLightbox(0)}
            />
          </div>
          <div className="flex flex-col justify-center items-center p-0 gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
            <h3>PIZZA</h3>
            <SmartImage
              className="w-auto h-[80px] cursor-pointer"
              width={200}
              height={200}
              src={images[1].src}
              alt={images[1].alt}
              onClick={() => openLightbox(1)}
            />
          </div>
          <div className="flex flex-col justify-center items-center p-0 gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
            <h3>WOOD</h3>
            <SmartImage
              className="w-auto h-[80px] cursor-pointer"
              width={200}
              height={200}
              src={images[2].src}
              alt={images[2].alt}
              onClick={() => openLightbox(2)}
            />
          </div>
        </div>
        <div className="headingWoody">
          <span className="spanTitle">LOGO ELEMENTS</span>
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
            <div className="flex justify-center items-center gap-12">
              <SmartImage
                className="w-auto h-[80px] hover:scale-110 transition-all ease-in-out hover:rotate-[-15deg] cursor-pointer"
                width={200}
                height={200}
                src={images[3].src}
                alt={images[3].alt}
                onClick={() => openLightbox(3)}
              />
              <SmartImage
                className="w-auto h-[120px] hover:scale-110 transition-all ease-in-out cursor-pointer"
                width={200}
                height={200}
                src={images[4].src}
                alt={images[4].alt}
                onClick={() => openLightbox(4)}
              />
              <SmartImage
                className="w-auto h-[80px] hover:scale-110 transition-all ease-in-out hover:rotate-15 cursor-pointer"
                width={200}
                height={200}
                src={images[5].src}
                alt={images[5].alt}
                onClick={() => openLightbox(5)}
              />
            </div>
            <h4 className="text-center">
              ingredients referring to Italian flag colors
            </h4>
          </div>
          <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
            <SmartImage
              className="imgWFT-elements w-[360px] h-auto hover:animate-spin transition-all ease-in-out duration-500 cursor-pointer"
              width={200}
              height={200}
              src={images[6].src}
              alt={images[6].alt}
              onClick={() => openLightbox(6)}
            />
            <h4 className="text-center">
              the pizza is a resemblance of a natural, organic tree trunk, with
              which the oven is heatedand the edge is similar to a pizzas crust;
              bottom half also looks just like oven’s dome/chamber
            </h4>
          </div>
          <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
            <SmartImage
              className="imgWFT-elements w-[360px] h-auto hover:scale-110 hover:rotate-12 transition-all ease-in-out cursor-pointer"
              width={200}
              height={200}
              src={images[7].src}
              alt={images[7].alt}
              onClick={() => openLightbox(7)}
            />
            <h4 className="text-center">
              wooden plank is what make this pizza special, core value of the
              business that differentiate them
            </h4>
          </div>
          <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
            <SmartImage
              className="imgWFT-elements w-[360px] h-auto hover:animate-bounce transition-all ease-in-out cursor-pointer"
              width={200}
              height={200}
              src={images[8].src}
              alt={images[8].alt}
              onClick={() => openLightbox(8)}
            />
            <h4 className="text-center">
              food truck named after the technique of pizza making process
            </h4>
          </div>
          <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
            <SmartImage
              className="imgWFT-elements w-[360px] h-auto hover:animate-pulse transition-all ease-in-out cursor-pointer"
              width={200}
              height={200}
              src={images[9].src}
              alt={images[9].alt}
              onClick={() => openLightbox(9)}
            />
            <h4 className="text-center">
              fire flames inspired by kashubian patterns
            </h4>
          </div>
          <div className="ingridientContainer flex flex-col justify-center items-center gap-12 flex-1 px-16 py-24">
            <SmartImage
              className="imgWFT-elements w-[360px] h-auto hover:scale-110 hover:-translate-y-4 transition-all ease-in-out cursor-pointer"
              width={200}
              height={200}
              src={images[10].src}
              alt={images[10].alt}
              onClick={() => openLightbox(10)}
            />
            <h4 className="text-center">
              brick fundaments of an oven, refers to trucks visuals,
              <br /> shaped like an open chamber to envelop the fire
            </h4>
          </div>
        </div>
        <div className="headingWoody">
          <span className="spanTitle">INGRIDIENTS</span>
        </div>
        <div className="grid grid-cols-3 gap-12 justify-between mb-16 w-full">
          <div className="flex flex-col items-center max-w-[260px] place-self-start gap-12">
            <SmartImage
              className="w-auto h-[80px] scale-y-150 -scale-x-150 transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px] cursor-pointer"
              width={200}
              height={200}
              src={images[11].src}
              alt={images[11].alt}
              onClick={() => openLightbox(11)}
            />
            <div className="max-w-[260px] H5 font-medium text-center uppercase text-wood-cream">
              olive, spinach, arugula, basil
            </div>
          </div>
          <div className="flex flex-col items-center place-self-center max-w-[260px] gap-12">
            <SmartImage
              className="w-auto h-[80px] scale-[200%] transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px] cursor-pointer"
              width={200}
              height={200}
              src={images[12].src}
              alt={images[12].alt}
              onClick={() => openLightbox(12)}
            />
            <div className="H5 font-medium text-center uppercase text-wood-cream">
              champignons, mozzarella
            </div>
          </div>
          <div className="flex flex-col items-center max-w-[260px] place-self-end gap-12">
            <SmartImage
              className="w-auto h-[80px] scale-y-150 -scale-x-150 transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px] cursor-pointer"
              width={200}
              height={200}
              src={images[13].src}
              alt={images[13].alt}
              onClick={() => openLightbox(13)}
            />
            <div className="H5 font-medium text-center uppercase text-wood-cream">
              sauce, tomatoes, salami
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full justify-center overflow-clip rounded-2xl">
          <div className="w-full flex flex-col justify-start">
            <div className="box w-[260px] h-[600px] bg-[--wood-green] rounded-t-2xl"></div>
            <svg height="600" width="600" className="fill-[--wood-green]">
              <polygon
                points="0,0 0,600 410,600 260,0  "
                style={{ fillRule: "nonzero" }}
              ></polygon>
            </svg>
            <div className="box w-full h-[600px] bg-[--wood-green]"></div>
          </div>
          <div className="w-full flex flex-col justify-start items-center">
            <div className="box w-[260px] h-[600px] bg-[--wood-white] rounded-t-2xl"></div>
            <svg height="600" width="600" className="fill-[--wood-white]">
              <polygon
                points="170,0 95,600 505,600 430,0  "
                style={{ fillRule: "nonzero" }}
              ></polygon>
            </svg>
            <div className="box w-full h-[600px] bg-[--wood-white]"></div>
          </div>
          <div className="w-full flex flex-col justify-end items-end">
            <div className="box w-[260px] h-[600px] bg-[--wood-red] rounded-t-2xl"></div>
            <svg
              height="600"
              width="600"
              className="fill-[--wood-red] -scale-x-100"
            >
              <polygon
                points="0,0 0,600 410,600 260,0  "
                style={{ fillRule: "nonzero" }}
              ></polygon>
            </svg>
            <div className="box w-full h-[600px] bg-[--wood-red]"></div>
          </div>
        </div>
        <div className="H3 uppercase flex justify-center mt-16 text-wood-cream">
          Italian flag
        </div>
        <div className="headingWoody">
          <span className="spanTitle">FIRE</span>
        </div>
        <div className="BannerWTF bg-[--wood-cream] grid grid-rows-2 grid-cols-4 gap-9 rounded-3xl p-16">
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[14].src}
              alt={images[14].alt}
              onClick={() => openLightbox(14)}
            />
            <span className="text-wood-dark text-[20px] italic">cherry</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[15].src}
              alt={images[15].alt}
              onClick={() => openLightbox(15)}
            />
            <span className="text-wood-dark text-[20px] italic">bud</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[16].src}
              alt={images[16].alt}
              onClick={() => openLightbox(16)}
            />
            <span className="text-wood-dark text-[20px] italic">star</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[17].src}
              alt={images[17].alt}
              onClick={() => openLightbox(17)}
            />
            <span className="text-wood-dark text-[20px] italic">
              thistle leaf
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[18].src}
              alt={images[18].alt}
              onClick={() => openLightbox(18)}
            />
            <span className="text-wood-dark text-[20px] italic">tulip</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[19].src}
              alt={images[19].alt}
              onClick={() => openLightbox(19)}
            />
            <span className="text-wood-dark text-[20px] italic">palmetto</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={images[20].src}
              alt={images[20].alt}
              onClick={() => openLightbox(20)}
            />
            <span className="text-wood-dark text-[20px] italic">tulip</span>
          </div>
        </div>
        <div className="BannerWTF bg-[--wood-cream] grid grid-flow-col items-center gap-12 rounded-3xl p-16 my-16">
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[21].src}
            alt={images[21].alt}
            onClick={() => openLightbox(21)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[22].src}
            alt={images[22].alt}
            onClick={() => openLightbox(22)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[23].src}
            alt={images[23].alt}
            onClick={() => openLightbox(23)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[24].src}
            alt={images[24].alt}
            onClick={() => openLightbox(24)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[25].src}
            alt={images[25].alt}
            onClick={() => openLightbox(25)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[26].src}
            alt={images[26].alt}
            onClick={() => openLightbox(26)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[27].src}
            alt={images[27].alt}
            onClick={() => openLightbox(27)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={images[28].src}
            alt={images[28].alt}
            onClick={() => openLightbox(28)}
          />
        </div>
        <div className="BannerWTF bg-[--wood-dark] rounded-3xl p-16">
          <div className="flex flex-col justify-center items-center p-0 gap-5 grow">
            <div className="headingWoody" style={{ padding: "0px" }}>
              <span className="spanTitle">CUSTOM MADE FONT</span>
            </div>
            <SmartImage
              width={800}
              height={200}
              src={images[29].src}
              alt={images[29].alt}
              onClick={() => openLightbox(29)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="headingWoody">
          <span className="spanTitle">USED FONTS</span>
        </div>
        <div className="fontContainer flex flex-col gap-12">
          <div className="fontWrapper flex flex-row gap-6 w-full justify-between">
            <span className="corbelNormal text-4xl text-wood-cream uppercase">
              CORBEL
            </span>
            <div className="flex flex-col items-end gap-3">
              <p className="corbelNormal text-4xl text-wood-cream uppercase">
                ABCDEFGHIJKLMNOPRSTUWXYZ
              </p>
              <p className="corbelNormal text-4xl text-wood-cream lowercase">
                ABCDEFGHIJKLMNOPRSTUWXYZ
              </p>
            </div>
          </div>
          <div className="fontWrapper flex flex-row gap-6 w-full justify-between">
            <span className="corbelNormal text-4xl text-wood-cream italic uppercase">
              CORBEL Italic{" "}
            </span>
            <div className="flex flex-col items-end gap-3">
              <p className="corbelNormal text-4xl text-wood-cream italic uppercase">
                ABCDEFGHIJKLMNOPRSTUWXYZ
              </p>
              <p className="corbelNormal text-4xl text-wood-cream italic lowercase">
                ABCDEFGHIJKLMNOPRSTUWXYZ
              </p>
            </div>
          </div>
          <div className="fontWrapper flex flex-row gap-6 w-full justify-between">
            <span className="corbelNormal text-4xl text-wood-cream font-bold uppercase">
              CORBEL Bold{" "}
            </span>
            <div className="flex flex-col items-end gap-3">
              <p className="corbelNormal text-4xl text-wood-cream font-bold uppercase">
                ABCDEFGHIJKLMNOPRSTUWXYZ
              </p>
              <p className="corbelNormal text-4xl text-wood-cream font-bold lowercase">
                ABCDEFGHIJKLMNOPRSTUWXYZ
              </p>
            </div>
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">COLOR PALETTE</span>
        </div>
        <div className="colorPalette font-semibold flex p-0 self-stretch rounded-3xl overflow-hidden h-[820px]">
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-dark]">
            #602626
          </div>
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-brown]">
            #BB8E65
          </div>
          <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-cream]">
            #E9BE95
          </div>
          <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-light]">
            #F3D8BF
          </div>
          <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-white]">
            #FDF7F2
          </div>
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-red]">
            #FF3C3C
          </div>
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-[--wood-green]">
            #23BE1C
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">SKETCHES</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={800}
            height={200}
            src={images[30].src}
            alt={images[30].alt}
            onClick={() => openLightbox(30)}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-9">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={800}
              height={200}
              src={images[31].src}
              alt={images[31].alt}
              onClick={() => openLightbox(31)}
            />
            <SmartImage
              width={800}
              height={200}
              src={images[32].src}
              alt={images[32].alt}
              onClick={() => openLightbox(32)}
              className="cursor-pointer"
            />
            <SmartImage
              width={800}
              height={200}
              src={images[33].src}
              alt={images[33].alt}
              onClick={() => openLightbox(33)}
              className="cursor-pointer"
            />
            <SmartImage
              width={800}
              height={200}
              src={images[34].src}
              alt={images[34].alt}
              onClick={() => openLightbox(34)}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">LOGOTYPE</span>
        </div>
        <div className="BannerWTF bg-[--wood-cream] grid grid-flow-col gap-9 rounded-3xl p-16">
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[35].src}
            alt={images[35].alt}
            onClick={() => openLightbox(35)}
          />

          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[36].src}
            alt={images[36].alt}
            onClick={() => openLightbox(36)}
          />

          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[37].src}
            alt={images[37].alt}
            onClick={() => openLightbox(37)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[38].src}
            alt={images[38].alt}
            onClick={() => openLightbox(38)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[39].src}
            alt={images[39].alt}
            onClick={() => openLightbox(39)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[40].src}
            alt={images[40].alt}
            onClick={() => openLightbox(40)}
          />

          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[41].src}
            alt={images[41].alt}
            onClick={() => openLightbox(41)}
          />
        </div>

        <div className="headingWoody">
          <span className="spanTitle">PLANK</span>
        </div>
        <div className="BannerWTF bg-[--wood-cream] grid grid-flow-col gap-9 rounded-3xl p-16">
          <SmartImage
            className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[42].src}
            alt={images[42].alt}
            onClick={() => openLightbox(42)}
          />
          <SmartImage
            className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[43].src}
            alt={images[43].alt}
            onClick={() => openLightbox(43)}
          />
          <SmartImage
            className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[44].src}
            alt={images[44].alt}
            onClick={() => openLightbox(44)}
          />
          <SmartImage
            className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[45].src}
            alt={images[45].alt}
            onClick={() => openLightbox(45)}
          />
        </div>

        <div className="headingWoody">
          <span className="spanTitle">LOGO VARIANTS</span>
        </div>
        <div className="BannerWTF bg-[--wood-cream] grid grid-cols-3 gap-24 p-12 rounded-3xl">
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[46].src}
            alt={images[46].alt}
            onClick={() => openLightbox(46)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[47].src}
            alt={images[47].alt}
            onClick={() => openLightbox(47)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[48].src}
            alt={images[48].alt}
            onClick={() => openLightbox(48)}
          />

          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[49].src}
            alt={images[49].alt}
            onClick={() => openLightbox(49)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[50].src}
            alt={images[50].alt}
            onClick={() => openLightbox(50)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[51].src}
            alt={images[51].alt}
            onClick={() => openLightbox(51)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[52].src}
            alt={images[52].alt}
            onClick={() => openLightbox(52)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[53].src}
            alt={images[53].alt}
            onClick={() => openLightbox(53)}
          />

          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[54].src}
            alt={images[54].alt}
            onClick={() => openLightbox(54)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[55].src}
            alt={images[55].alt}
            onClick={() => openLightbox(55)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[56].src}
            alt={images[56].alt}
            onClick={() => openLightbox(56)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={images[57].src}
            alt={images[57].alt}
            onClick={() => openLightbox(57)}
          />
        </div>

        <div className="headingWoody">
          <span className="spanTitle">BUSINESS CARD</span>
        </div>

        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
          <div className="rowIMGWTF flex w-full">
            <SmartImage
              className="w-1/2 h-auto cursor-pointer"
              src={images[58].src}
              alt={images[58].alt}
              onClick={() => openLightbox(58)}
            />

            <SmartImage
              className="w-1/2 h-auto cursor-pointer"
              src={images[59].src}
              alt={images[59].alt}
              onClick={() => openLightbox(59)}
            />
          </div>
          <div className="rowIMGWTF flex w-full">
            <SmartImage
              className="w-1/2 h-auto bg-contain cursor-pointer"
              src={images[60].src}
              alt={images[60].alt}
              onClick={() => openLightbox(60)}
            />
            <SmartImage
              className="w-1/2 h-auto bg-contain cursor-pointer"
              src={images[61].src}
              alt={images[61].alt}
              onClick={() => openLightbox(61)}
            />
          </div>
          <div className="rowIMGWTF flex w-full">
            <SmartImage
              className="w-1/2 h-auto bg-contain cursor-pointer"
              width={800}
              height={200}
              src={images[62].src}
              alt={images[62].alt}
              onClick={() => openLightbox(62)}
            />
            <SmartImage
              className="w-1/2 h-auto bg-contain cursor-pointer"
              width={800}
              height={200}
              src={images[63].src}
              alt={images[63].alt}
              onClick={() => openLightbox(63)}
            />
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">FLYER DESIGN</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
          <SmartImage
            className="w-full h-auto bg-cover cursor-pointer"
            width={800}
            height={200}
            src={images[64].src}
            alt={images[64].alt}
            onClick={() => openLightbox(64)}
          />
          <div className="rowIMGWTF flex">
            <SmartImage
              className="w-1/2 h-auto bg-cover cursor-pointer"
              width={800}
              height={200}
              src={images[65].src}
              alt={images[65].alt}
              onClick={() => openLightbox(65)}
            />
            <SmartImage
              className="w-1/2 h-auto bg-cover cursor-pointer"
              width={800}
              height={200}
              src={images[66].src}
              alt={images[66].alt}
              onClick={() => openLightbox(66)}
            />
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">FOOD TRUCK</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
          <SameHeightRow
            images={[images[67], images[68]]}
            onImageClick={(idx) => openLightbox(67 + idx)}
          ></SameHeightRow>
          <SameHeightRow
            images={[images[69], images[70]]}
            onImageClick={(idx) => openLightbox(69 + idx)}
          ></SameHeightRow>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">PIZZA QUATTRO FORMAGGI</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-[--wood-cream]">
          <SameHeightRow
            images={[images[71], images[72]]}
            onImageClick={(idx) => openLightbox(71 + idx)}
          ></SameHeightRow>
          <SameHeightRow
            images={[images[73], images[74]]}
            onImageClick={(idx) => openLightbox(73 + idx)}
          ></SameHeightRow>
        </div>

        <div className="BannerWTF bg-(--wood-dark) rounded-3xl p-16 py-36 my-16 relative">
          <div className="flex flex-col justify-center items-center p-0 gap-12 grow">
            <div className="headingWoody" style={{ padding: "0px" }}>
              <span className="spanTitle">HAVE A PIZZASTIC DAY</span>
            </div>
            <SmartImage
              className="max-w-[320px] hover:animate-bounce cursor-pointer"
              width={800}
              height={200}
              src={images[75].src}
              alt={images[75].alt}
              onClick={() => openLightbox(75)}
            />
          </div>
          <div className="absolute left-0 right-0 top-0 bottom-0 m-16">
            <SmartImage
              className="max-w-[100px] opacity-10 rotate-45 absolute right-0 animate-pulse cursor-pointer"
              width={800}
              height={200}
              src={images[76].src}
              alt={images[76].alt}
              onClick={() => openLightbox(76)}
            />
            <SmartImage
              className="max-w-[100px] opacity-10 -rotate-45 absolute left-0 animate-pulse cursor-pointer"
              width={800}
              height={200}
              src={images[77].src}
              alt={images[77].alt}
              onClick={() => openLightbox(77)}
            />
            <SmartImage
              className="max-w-[100px] opacity-10 rotate-135 absolute bottom-0 right-0 animate-pulse cursor-pointer"
              width={800}
              height={200}
              src={images[78].src}
              alt={images[78].alt}
              onClick={() => openLightbox(78)}
            />
            <SmartImage
              className="max-w-[100px] opacity-10 -rotate-135 absolute bottom-0 animate-pulse cursor-pointer"
              width={800}
              height={200}
              src={images[79].src}
              alt={images[79].alt}
              onClick={() => openLightbox(79)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
