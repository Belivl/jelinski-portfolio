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
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/leafs_Xf4vJSMj5U.avif?updatedAt=1769088296297",
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
      alt: "liscotsu",
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
      alt: "truck1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190725-truck2_XZiTeGZsZ.avif?updatedAt=1769088436474",
      alt: "truck2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190730-truck4v2.jpg_MzzzggzjaE.avif?updatedAt=1769088436722",
      alt: "truck4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/20190730-truck3v2.jpg_8hZaDZQwn.avif?updatedAt=1769088436321",
      alt: "truck3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_191111_2sM_9j9YC.avif?updatedAt=1769088437502",
      alt: "pizza1",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_191125_a28YxDjKO.avif?updatedAt=1769088437474",
      alt: "pizza2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_192015__01_5N1qMbVVx.avif?updatedAt=1769088437156",
      alt: "pizza3",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/photo/IMG_20200706_192246_P9fLKNIXc.avif?updatedAt=1769088439125",
      alt: "pizza4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/truck-white_D-qLZi6jvB.avif?updatedAt=1769088288338",
      alt: "truck-white",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/elements/drink_KrujEq-9K.avif?updatedAt=1769088288024",
      alt: "drink",
    },
  ];

  const getImage = (alt: string) => {
    const index = images.findIndex((img) => img.alt === alt);
    const img = images[index];
    if (!img) {
      console.warn(`Image with alt '${alt}' not found`);
      return { src: "", alt, index: -1 };
    }
    return { ...img, index };
  };

  return (
    <>
      <SimpleLightbox
        images={images}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <div>
        <div className="BannerWTF bg-wood-dark grid grid-cols-3 items-center md:p-16 p-6 md:rounded-3xl rounded-md w-full gap-9 text-white">
          <div className="grid grid-flow-row place-items-center gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
            <h3>FIRE</h3>
            <SmartImage
              className="w-auto h-[80px] cursor-pointer object-contain"
              src={getImage("fire-white").src}
              alt={getImage("fire-white").alt}
              onClick={() => openLightbox(getImage("fire-white").index)}
            />
          </div>
          <div className="grid grid-flow-row place-items-center gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
            <h3>PIZZA</h3>
            <SmartImage
              className="w-auto h-[80px] cursor-pointer object-contain"
              src={getImage("slice-white").src}
              alt={getImage("slice-white").alt}
              onClick={() => openLightbox(getImage("slice-white").index)}
            />
          </div>
          <div className="grid grid-flow-row place-items-center gap-5 grow hover:scale-105 transition-all ease-in-out hover:translate-y-2">
            <h3>WOOD</h3>
            <SmartImage
              className="w-auto h-[80px] cursor-pointer object-contain"
              src={getImage("plank-white").src}
              alt={getImage("plank-white").alt}
              onClick={() => openLightbox(getImage("plank-white").index)}
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
                className="w-auto md:h-[80px] h-[40px] hover:scale-110 transition-all ease-in-out hover:rotate-[-15deg] cursor-pointer"
                width={200}
                height={200}
                src={getImage("salami").src}
                alt={getImage("salami").alt}
                onClick={() => openLightbox(getImage("salami").index)}
              />
              <SmartImage
                className="w-auto md:h-[80px] h-[40px] hover:scale-110 transition-all ease-in-out cursor-pointer"
                width={200}
                height={200}
                src={getImage("mushrooms").src}
                alt={getImage("mushrooms").alt}
                onClick={() => openLightbox(getImage("mushrooms").index)}
              />
              <SmartImage
                className="w-auto md:h-[80px] h-[40px] hover:scale-110 transition-all ease-in-out hover:rotate-15 cursor-pointer"
                width={200}
                height={200}
                src={getImage("leafs").src}
                alt={getImage("leafs").alt}
                onClick={() => openLightbox(getImage("leafs").index)}
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
              src={getImage("crust").src}
              alt={getImage("crust").alt}
              onClick={() => openLightbox(getImage("crust").index)}
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
              src={getImage("plank").src}
              alt={getImage("plank").alt}
              onClick={() => openLightbox(getImage("plank").index)}
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
              src={getImage("woody-brown").src}
              alt={getImage("woody-brown").alt}
              onClick={() => openLightbox(getImage("woody-brown").index)}
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
              src={getImage("fire-color").src}
              alt={getImage("fire-color").alt}
              onClick={() => openLightbox(getImage("fire-color").index)}
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
              src={getImage("brick-oven").src}
              alt={getImage("brick-oven").alt}
              onClick={() => openLightbox(getImage("brick-oven").index)}
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
        <div className="grid grid-cols-3 gap-12 justify-between mb-16 w-full text-[12px] md:text-xl">
          <div className="flex flex-col items-center max-w-[260px] place-self-start gap-12">
            <SmartImage
              className="w-auto md:h-[80px] h-[40px] scale-y-150 -scale-x-150 transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px] cursor-pointer"
              width={200}
              height={200}
              src={getImage("leafs").src}
              alt={getImage("leafs").alt}
              onClick={() => openLightbox(getImage("leafs").index)}
            />
            <div className="max-w-[260px]  font-medium text-center uppercase text-wood-cream">
              olive, spinach, arugula, basil
            </div>
          </div>
          <div className="flex flex-col items-center place-self-center max-w-[260px] gap-12">
            <SmartImage
              className="w-auto md:h-[80px] h-[40px] scale-[200%] transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px] cursor-pointer"
              width={200}
              height={200}
              src={getImage("mushrooms").src}
              alt={getImage("mushrooms").alt}
              onClick={() => openLightbox(getImage("mushrooms").index)}
            />
            <div className="H5 font-medium text-center uppercase text-wood-cream">
              champignons, mozzarella
            </div>
          </div>
          <div className="flex flex-col items-center max-w-[260px] place-self-end gap-12">
            <SmartImage
              className="w-auto md:h-[80px] h-[40px] scale-y-150 -scale-x-150 transition-all ease-in-out duration-500 hover:rotate-[-15deg] hover:translate-y-[320px] cursor-pointer"
              width={200}
              height={200}
              src={getImage("salami").src}
              alt={getImage("salami").alt}
              onClick={() => openLightbox(getImage("salami").index)}
            />
            <div className="H5 font-medium text-center uppercase text-wood-cream">
              sauce, tomatoes, salami
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full justify-center overflow-clip rounded-2xl">
          <div className="w-full flex flex-col justify-start">
            <div className="box md:w-[260px] w-full h-[600px] bg-wood-green rounded-t-2xl"></div>
            <svg height="600" className="fill-wood-green w-full md:w-[600px]">
              <polygon
                points="0,0 0,600 410,600 260,0  "
                style={{ fillRule: "nonzero" }}
              ></polygon>
            </svg>
            <div className="box w-full h-[600px] bg-wood-green "></div>
          </div>
          <div className="w-full flex flex-col justify-start items-center">
            <div className="box w-[260px] h-[600px] bg-wood-white rounded-t-2xl"></div>
            <svg height="600" className="fill-wood-white w-full md:w-[600px]">
              <polygon
                points="170,0 95,600 505,600 430,0  "
                style={{ fillRule: "nonzero" }}
              ></polygon>
            </svg>
            <div className="box w-full h-[600px] bg-wood-white"></div>
          </div>
          <div className="w-full flex flex-col justify-end items-end">
            <div className="box w-[260px] h-[600px] bg-wood-red rounded-t-2xl"></div>
            <svg
              height="600"
              className="fill-wood-red -scale-x-100 w-full md:w-[600px]"
            >
              <polygon
                points="0,0 0,600 410,600 260,0  "
                style={{ fillRule: "nonzero" }}
              ></polygon>
            </svg>
            <div className="box w-full h-[600px] bg-wood-red"></div>
          </div>
        </div>
        <div className="H3 uppercase flex justify-center mt-16 text-wood-cream">
          Italian flag
        </div>
        <div className="headingWoody">
          <span className="spanTitle">FIRE</span>
        </div>
        <div className="BannerWTF bg-wood-cream grid grid-rows-2 md:grid-cols-4 gap-9 rounded-3xl p-16">
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer "
              width={200}
              height={200}
              src={getImage("wisienka").src}
              alt={getImage("wisienka").alt}
              onClick={() => openLightbox(getImage("wisienka").index)}
            />
            <span className="text-wood-dark text-[20px] italic">cherry</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={getImage("pak").src}
              alt={getImage("pak").alt}
              onClick={() => openLightbox(getImage("pak").index)}
            />
            <span className="text-wood-dark text-[20px] italic">bud</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={getImage("gwiazda").src}
              alt={getImage("gwiazda").alt}
              onClick={() => openLightbox(getImage("gwiazda").index)}
            />
            <span className="text-wood-dark text-[20px] italic">star</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={getImage("liscotsu").src}
              alt={getImage("liscotsu").alt}
              onClick={() => openLightbox(getImage("liscotsu").index)}
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
              src={getImage("tulipan3").src}
              alt={getImage("tulipan3").alt}
              onClick={() => openLightbox(getImage("tulipan3").index)}
            />
            <span className="text-wood-dark text-[20px] italic">tulip</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={getImage("palmeta").src}
              alt={getImage("palmeta").alt}
              onClick={() => openLightbox(getImage("palmeta").index)}
            />
            <span className="text-wood-dark text-[20px] italic">palmetto</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={200}
              height={200}
              src={getImage("tulipan1").src}
              alt={getImage("tulipan1").alt}
              onClick={() => openLightbox(getImage("tulipan1").index)}
            />
            <span className="text-wood-dark text-[20px] italic">tulip</span>
          </div>
        </div>
        <div className="BannerWTF bg-wood-cream grid grid-cols-1 md:grid-flow-col items-center gap-12 rounded-3xl p-16 my-16">
          <SmartImage
            className="w-full h-auto cursor-pointer object-contain"
            src={getImage("fire0").src}
            alt={getImage("fire0").alt}
            onClick={() => openLightbox(getImage("fire0").index)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={getImage("firev2").src}
            alt={getImage("firev2").alt}
            onClick={() => openLightbox(getImage("firev2").index)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={getImage("firev3").src}
            alt={getImage("firev3").alt}
            onClick={() => openLightbox(getImage("firev3").index)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={getImage("firev4").src}
            alt={getImage("firev4").alt}
            onClick={() => openLightbox(getImage("firev4").index)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={getImage("firev5").src}
            alt={getImage("firev5").alt}
            onClick={() => openLightbox(getImage("firev5").index)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={getImage("firev6").src}
            alt={getImage("firev6").alt}
            onClick={() => openLightbox(getImage("firev6").index)}
          />
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={200}
            height={200}
            src={getImage("fire-color").src}
            alt={getImage("fire-color").alt}
            onClick={() => openLightbox(getImage("fire-color").index)}
          />
        </div>
        <div className="BannerWTF bg-wood-dark rounded-3xl md:p-16 p-6">
          <div className="flex flex-col justify-center items-center  gap-5 grow">
            <div className="headingWoody" style={{ padding: "0px" }}>
              <span className="spanTitle">CUSTOM MADE FONT</span>
            </div>
            <SmartImage
              src={getImage("customfont").src}
              alt={getImage("customfont").alt}
              onClick={() => openLightbox(getImage("customfont").index)}
              className="cursor-pointer w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="headingWoody">
          <span className="spanTitle">USED FONTS</span>
        </div>
        <div className="fontContainer flex flex-col gap-12 text-wrap overflow-hidden py-2">
          <div className="fontWrapper flex flex-row gap-6 w-full justify-between text-wrap">
            <span className="corbelNormal text-4xl text-wood-cream uppercase text-wrap">
              CORBEL
            </span>
            <div className="flex flex-col items-end gap-3 text-wrap">
              <p className="corbelNormal text-4xl text-wood-cream uppercase text-wrap">
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
        <div className="colorPalette font-semibold flex flex-col md:flex-row p-0 self-stretch rounded-3xl overflow-hidden md:h-[820px]">
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-wood-dark">
            #602626
          </div>
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-wood-brown">
            #BB8E65
          </div>
          <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-wood-cream">
            #E9BE95
          </div>
          <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-wood-light">
            #F3D8BF
          </div>
          <div className="colorStripe text-wood-dark flex flex-col justify-end items-center px-9 py-24 grow bg-wood-white">
            #FDF7F2
          </div>
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-wood-red">
            #FF3C3C
          </div>
          <div className="colorStripe flex flex-col justify-end items-center px-9 py-24 grow bg-wood-green">
            #23BE1C
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">SKETCHES</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-wood-cream">
          <SmartImage
            className="w-full h-auto cursor-pointer"
            width={800}
            height={200}
            src={getImage("Sketchs").src}
            alt={getImage("Sketchs").alt}
            onClick={() => openLightbox(getImage("Sketchs").index)}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-9">
            <SmartImage
              className="w-full h-auto cursor-pointer"
              width={800}
              height={200}
              src={getImage("logoSketch4").src}
              alt={getImage("logoSketch4").alt}
              onClick={() => openLightbox(getImage("logoSketch4").index)}
            />
            <SmartImage
              width={800}
              height={200}
              src={getImage("logoSketch3").src}
              alt={getImage("logoSketch3").alt}
              onClick={() => openLightbox(getImage("logoSketch3").index)}
              className="cursor-pointer"
            />
            <SmartImage
              width={800}
              height={200}
              src={getImage("logoSketch2").src}
              alt={getImage("logoSketch2").alt}
              onClick={() => openLightbox(getImage("logoSketch2").index)}
              className="cursor-pointer"
            />
            <SmartImage
              width={800}
              height={200}
              src={getImage("logoSketch1").src}
              alt={getImage("logoSketch1").alt}
              onClick={() => openLightbox(getImage("logoSketch1").index)}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">LOGOTYPE</span>
        </div>
        <div className="BannerWTF bg-wood-cream grid grid-flow-row md:grid-flow-col gap-9 rounded-3xl p-16">
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer object-contain"
            src={getImage("woodyv0").src}
            alt={getImage("woodyv0").alt}
            onClick={() => openLightbox(getImage("woodyv0").index)}
          />

          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woodyv1").src}
            alt={getImage("woodyv1").alt}
            onClick={() => openLightbox(getImage("woodyv1").index)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woodyv2").src}
            alt={getImage("woodyv2").alt}
            onClick={() => openLightbox(getImage("woodyv2").index)}
          />

          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woodyv3").src}
            alt={getImage("woodyv3").alt}
            onClick={() => openLightbox(getImage("woodyv3").index)}
          />

          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woodyv4").src}
            alt={getImage("woodyv4").alt}
            onClick={() => openLightbox(getImage("woodyv4").index)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woodyv5").src}
            alt={getImage("woodyv5").alt}
            onClick={() => openLightbox(getImage("woodyv5").index)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woodyv6").src}
            alt={getImage("woodyv6").alt}
            onClick={() => openLightbox(getImage("woodyv6").index)}
          />
          <SmartImage
            className="w-full h-auto hover:animate-bounce transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("woody-brown").src}
            alt={getImage("plank0").alt}
            onClick={() => openLightbox(getImage("plank0").index)}
          />
        </div>

        <div className="headingWoody">
          <span className="spanTitle">PLANK</span>
        </div>
        <div className="BannerWTF bg-wood-cream grid grid-flow-row md:grid-flow-col gap-9 rounded-3xl p-16">
          <SmartImage
            className="w-full h-auto hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("plank0").src}
            alt={getImage("plank0").alt}
            onClick={() => openLightbox(getImage("plank0").index)}
          />

          <SmartImage
            className="w-full h-auto hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("plankv1").src}
            alt={getImage("plankv1").alt}
            onClick={() => openLightbox(getImage("plankv1").index)}
          />
          <SmartImage
            className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("plankv2").src}
            alt={getImage("plankv2").alt}
            onClick={() => openLightbox(getImage("plankv2").index)}
          />
          <SmartImage
            className="w-auto h-[80px] hover:rotate-15 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("plankv3").src}
            alt={getImage("plankv3").alt}
            onClick={() => openLightbox(getImage("plankv3").index)}
          />
        </div>

        <div className="headingWoody">
          <span className="spanTitle">LOGO VARIANTS</span>
        </div>
        <div className="BannerWTF bg-wood-cream grid grid-flow-row md:grid-cols-3 gap-24 p-12 rounded-3xl">
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov0").src}
            alt={getImage("logov0").alt}
            onClick={() => openLightbox(getImage("logov0").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov1").src}
            alt={getImage("logov1").alt}
            onClick={() => openLightbox(getImage("logov1").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov2").src}
            alt={getImage("logov2").alt}
            onClick={() => openLightbox(getImage("logov2").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov4").src}
            alt={getImage("logov4").alt}
            onClick={() => openLightbox(getImage("logov4").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov5").src}
            alt={getImage("logov5").alt}
            onClick={() => openLightbox(getImage("logov5").index)}
          />

          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov6").src}
            alt={getImage("logov6").alt}
            onClick={() => openLightbox(getImage("logov6").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov7").src}
            alt={getImage("logov7").alt}
            onClick={() => openLightbox(getImage("logov7").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov8").src}
            alt={getImage("logov8").alt}
            onClick={() => openLightbox(getImage("logov8").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov9").src}
            alt={getImage("logov9").alt}
            onClick={() => openLightbox(getImage("logov9").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov10").src}
            alt={getImage("logov10").alt}
            onClick={() => openLightbox(getImage("logov10").index)}
          />

          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov11").src}
            alt={getImage("logov11").alt}
            onClick={() => openLightbox(getImage("logov11").index)}
          />
          <SmartImage
            className="w-full h-auto hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            width={800}
            height={200}
            src={getImage("logov12").src}
            alt={getImage("logov12").alt}
            onClick={() => openLightbox(getImage("logov12").index)}
          />
        </div>

        <div className="headingWoody">
          <span className="spanTitle">BUSINESS CARD</span>
        </div>

        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-wood-cream">
          <div className="rowIMGWTF flex w-full">
            <SmartImage
              className="w-1/2 h-auto cursor-pointer"
              width={800}
              height={200}
              src={getImage("Visa2v7").src}
              alt={getImage("Visa2v7").alt}
              onClick={() => openLightbox(getImage("Visa2v7").index)}
            />
            <SmartImage
              className="w-1/2 h-auto cursor-pointer"
              width={800}
              height={200}
              src={getImage("Visa2v6").src}
              alt={getImage("Visa2v6").alt}
              onClick={() => openLightbox(getImage("Visa2v6").index)}
            />
          </div>
          <div className="rowIMGWTF flex w-full">
            <SmartImage
              className="w-1/2 h-auto cursor-pointer"
              src={getImage("visa-front").src}
              alt={getImage("visa-front").alt}
              onClick={() => openLightbox(getImage("visa-front").index)}
            />

            <SmartImage
              className="w-1/2 h-auto cursor-pointer"
              src={getImage("visa2").src}
              alt={getImage("visa2").alt}
              onClick={() => openLightbox(getImage("visa2").index)}
            />
          </div>
          <div className="rowIMGWTF flex w-full">
            <SmartImage
              className="w-1/2 h-auto bg-contain cursor-pointer"
              src={getImage("Visa2v5").src}
              alt={getImage("Visa2v5").alt}
              onClick={() => openLightbox(getImage("Visa2v5").index)}
            />
            <SmartImage
              className="w-1/2 h-auto bg-contain cursor-pointer"
              src={getImage("Visa2v4").src}
              alt={getImage("Visa2v4").alt}
              onClick={() => openLightbox(getImage("Visa2v4").index)}
            />
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">FLYER DESIGN</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-wood-cream">
          <SmartImage
            className="w-full h-auto bg-cover cursor-pointer"
            width={800}
            height={200}
            src={getImage("Leafletv2").src}
            alt={getImage("Leafletv2").alt}
            onClick={() => openLightbox(getImage("Leafletv2").index)}
          />
          <div className="rowIMGWTF flex">
            <SmartImage
              className="w-1/2 h-auto bg-cover cursor-pointer"
              width={800}
              height={200}
              src={getImage("A6spec1").src}
              alt={getImage("A6spec1").alt}
              onClick={() => openLightbox(getImage("A6spec1").index)}
            />
            <SmartImage
              className="w-1/2 h-auto bg-cover cursor-pointer"
              width={800}
              height={200}
              src={getImage("A6spec").src}
              alt={getImage("A6spec").alt}
              onClick={() => openLightbox(getImage("A6spec").index)}
            />
          </div>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">FOOD TRUCK</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-wood-cream">
          <SameHeightRow
            images={[getImage("truck4"), getImage("truck3")]}
            onImageClick={(idx) => openLightbox(getImage("truck4").index + idx)}
          ></SameHeightRow>
          <SameHeightRow
            images={[getImage("truck3"), getImage("truck2")]}
            onImageClick={(idx) => openLightbox(getImage("truck3").index + idx)}
          ></SameHeightRow>
        </div>

        <div className="headingWoody">
          <span className="spanTitle">PIZZA QUATTRO FORMAGGI</span>
        </div>
        <div className="sketchContain flex flex-col items-center justify-center p-0 overflow-hidden rounded-3xl w-full bg-wood-cream">
          <SameHeightRow
            images={[getImage("pizza2"), getImage("pizza1")]}
            onImageClick={(idx) => openLightbox(getImage("pizza1").index + idx)}
          ></SameHeightRow>
          <SameHeightRow
            images={[getImage("pizza3"), getImage("pizza4")]}
            onImageClick={(idx) => openLightbox(getImage("pizza3").index + idx)}
          ></SameHeightRow>
        </div>

        <div className="BannerWTF bg-wood-dark rounded-3xl p-16 py-36 my-16 relative">
          <div className="flex flex-col justify-center items-center p-0 gap-12 grow">
            <div className="headingWoody" style={{ padding: "0px" }}>
              <span className="spanTitle">HAVE A PIZZASTIC DAY</span>
            </div>
            <SmartImage
              className="max-w-[320px] hover:animate-bounce cursor-pointer"
              width={800}
              height={200}
              src={getImage("truck-white").src}
              alt={getImage("truck-white").alt}
              onClick={() => openLightbox(getImage("truck-white").index)}
            />
          </div>
          <div className="absolute left-0 right-0 top-0 bottom-0 m-16">
            <SmartImage
              className="max-w-[100px] h-auto opacity-10 rotate-45 absolute right-0 animate-pulse cursor-pointer"
              width={200}
              height={200}
              src={getImage("drink").src}
              alt={getImage("drink").alt}
              onClick={() => openLightbox(getImage("drink").index)}
            />
            <SmartImage
              className="max-w-[100px] h-auto opacity-10 -rotate-45 absolute left-0 animate-pulse cursor-pointer"
              width={200}
              height={200}
              src={getImage("slice-white").src}
              alt={getImage("slice-white").alt}
              onClick={() => openLightbox(getImage("slice-white").index)}
            />
            <SmartImage
              className="max-w-[100px] h-auto opacity-10 rotate-135 absolute bottom-0 right-0 animate-pulse cursor-pointer"
              width={200}
              height={200}
              src={getImage("slice-white").src}
              alt={getImage("slice-white").alt}
              onClick={() => openLightbox(getImage("slice-white").index)}
            />
            <SmartImage
              className="max-w-[100px] h-auto opacity-10 -rotate-135 absolute bottom-0 animate-pulse cursor-pointer"
              width={100}
              height={100}
              src={getImage("drink").src}
              alt={getImage("drink").alt}
              onClick={() => openLightbox(getImage("drink").index)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
