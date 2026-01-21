import { motion } from "motion/react";
import { SameHeightRow } from "@/components/ui/SameHeightRow";
import Comparison2 from "@/components/gallery/Comparison";
import { GalleryAccordion } from "@/components/galleries/GalleryAccordion";
import { SmartImage } from "@/components/ui/SmartImage";
import { useState } from "react";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

const DESIGN_IMAGES = [
  // 2020
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/MarketingWodaV2_SqKyrM_cf.avif?updatedAt=1769089088993",
    alt: "marketingwodav2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/MarketingWodaV1_Y4qphmuo_.avif?updatedAt=1769089088864",
    alt: "marketingwodav1",
  },
  // 2018
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/FORXSTJUTRoAUREA_yHMPC9ToW.avif?updatedAt=1769089869763",
    alt: "aurea",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FBBanner2018State_PH5YhA_2g3.avif?updatedAt=1769087488242",
    alt: "aureabanner",
  },
  // 2017
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Out%20of%20the%20Black%20002%20-min_CQ9sGtM0Tp.avif?updatedAt=1769087488222",
    alt: "outoftheblack1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Out-of-the-Black-002-BACKGROUNDv0WEB_bIMK-Ckukr.avif?updatedAt=1769087488517",
    alt: "outoftheblack2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/BelialDesignv2_HctD1ZIdWm.avif?updatedAt=1769087488190",
    alt: "belial1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/BelialdesignBGv2_toHHuVgHJ.avif?updatedAt=1769087488175",
    alt: "belial2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FBBanner2017v4_j4drt6hgSu.avif?updatedAt=1769087488215",
    alt: "fbbanner2017",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/BanerZSO1_-tHu7lDc1.avif?updatedAt=1769087817191",
    alt: "zso1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/PlakatZSOA3_F-6TzYkN07.avif?updatedAt=1769087816636",
    alt: "zso2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/KrzychTlov1-min_OS-Jkcyvt.avif?updatedAt=1769087816487",
    alt: "krzych",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/EMKAsquared%20Logo_AVc9sG1YZb.avif?updatedAt=1769087829762",
    alt: "emka",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/BelialdesignBGv2_toHHuVgHJ.avif?updatedAt=1769087488175",
    alt: "belialpart1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/part2-min_M3oIUHbgT.avif?updatedAt=1769087488131",
    alt: "belialpart2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/part3-min_aFH0pR1ox.avif?updatedAt=1769087488087",
    alt: "belialpart3",
  },
  // 2016
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/PersonalBGFB2_iF4YTbgLIU.avif?updatedAt=1769087488258",
    alt: "personal1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/8MJProv2_uFWgPeL0H.avif?updatedAt=1769087487892",
    alt: "8mj",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/husaryabb/HBB%20Icon-min_ugERlDFYd.avif",
    alt: "hbb1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/husaryabb/HBB%20Iconv3-min_dqKnSOkiW.avif",
    alt: "hbb2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/mesotiq/facebookbannerMes_bshxTApRh.avif",
    alt: "mesotiqbanner",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/mesotiq/MesotiqAviv1_rhx_gIkBB.avif",
    alt: "mesotiqavi",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/mesotiq/MesotiqAviGOLD_Ry5X0_Eeu.avif",
    alt: "mesotiqavigold",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/stiggi/fbannerStiggi98_1ZWasWUlkb.avif?updatedAt=1769088047286",
    alt: "stiggi98_1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/stiggi/IconStiggi98_wn82WGZnQ.avif?updatedAt=1769088047344",
    alt: "stiggi98_2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/jelinska/MJjewellerybannerfb_3mx6IlB9-.avif",
    alt: "mj1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/jelinska/IconMjlogov3_KASABne1iL.avif",
    alt: "mj2",
  },
  // 2015
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FB_IMG_1444131108649_CNOidCP4T.avif?updatedAt=1769087488135",
    alt: "placeholder1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/szachovy/SzachovyBanner_q7VLsYHaH.avif?updatedAt=1769088088603",
    alt: "placeholder2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/szachovy/szachovy_logo_u5uJvt3q1.avif?updatedAt=1769088090153",
    alt: "szachovy",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv2BG_rDBfRnGuW.avif?updatedAt=1769110144824",
    alt: "darthclean1",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv1LOGO_uS96kF6xQA.avif?updatedAt=1769110144834",
    alt: "darthclean2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv1LOGO_uS96kF6xQA.avif?updatedAt=1769110144834",
    alt: "darthclean3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv2LOGO_ftOBF4vAhS.avif?updatedAt=1769110144821",
    alt: "darthclean4",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/Dlogobannerv1_23Uqmaru-.avif?updatedAt=1769110144757",
    alt: "darthclean5",
  },
  {
    src: "/gfx/project/belial/PersonalHeaderv3_inqifL-42e.avif?updatedAt=1768926066043&ik-s=da60651ed3b2262ac102c89564da02782c60bc80",
    alt: "personal2",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/IconBelialv1_m-GOWSKXfu.avif?updatedAt=1769087488227",
    alt: "personal3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/HeaderBelial%20v4-min_-Ljf8yiW7k.avif?updatedAt=1769087488232",
    alt: "personal4",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Iconv4_SOLI06f1y6.avif?updatedAt=1769087488185",
    alt: "personal5",
  },
  // 2014
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2014/1429548504624_Z4Tt7Xq-I.avif?updatedAt=1769089621128",
    alt: "placeholder3",
  },
  {
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2014/M%20logopaper1_4_JJSxLeS.avif?updatedAt=1769089621138",
    alt: "placeholder4",
  },
];

export function DesignGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (alt: string) => {
    const index = DESIGN_IMAGES.findIndex((img) => img.alt === alt);
    if (index !== -1) {
      setInitialIndex(index);
      setLightboxOpen(true);
    }
  };

  const getImg = (alt: string) => DESIGN_IMAGES.find((img) => img.alt === alt)!;

  return (
    <>
      <SimpleLightbox
        images={DESIGN_IMAGES}
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
        <GalleryAccordion year="2020" defaultOpen={true}>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              // The index passed here is local to the row.
              // We need map local index to global ID
              const ids = ["marketingwodav2", "marketingwodav1"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("marketingwodav2"), getImg("marketingwodav1")]}
          ></SameHeightRow>
        </GalleryAccordion>
        <GalleryAccordion year="2018">
          <Comparison2
            className="aspect-[2.4/1]"
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["aurea", "aureabanner"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("aurea"), getImg("aureabanner")]}
          />
        </GalleryAccordion>

        <GalleryAccordion year="2017">
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["outoftheblack1", "outoftheblack2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("outoftheblack1"), getImg("outoftheblack2")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["belial1", "belial2", "fbbanner2017"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("belial1"),
              getImg("belial2"),
              getImg("fbbanner2017"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["zso1", "zso2", "krzych", "emka"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("zso1"),
              getImg("zso2"),
              getImg("krzych"),
              getImg("emka"),
            ]}
          ></SameHeightRow>
          <div className="grid grid-cols-3 w-full rounded-sm overflow-hidden border hover:shadow-sm shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["belialpart1", "belialpart2", "belialpart3"].map((id) => (
              <div
                key={id}
                onClick={() => openLightbox(id)}
                className="cursor-pointer"
              >
                <SmartImage
                  src={getImg(id).src}
                  alt={getImg(id).alt}
                  className="transition-all duration-500 ease-in-out h-auto"
                />
              </div>
            ))}
          </div>
        </GalleryAccordion>

        <GalleryAccordion year="2016">
          <SameHeightRow
            className="rounded-sm "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["personal1", "8mj"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("personal1"), getImg("8mj")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["hbb1", "hbb2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("hbb1"), getImg("hbb2")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["mesotiqbanner", "mesotiqavi", "mesotiqavigold"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("mesotiqbanner"),
              getImg("mesotiqavi"),
              getImg("mesotiqavigold"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["stiggi98_1", "stiggi98_2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("stiggi98_1"), getImg("stiggi98_2")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["mj1", "mj2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("mj1"), getImg("mj2")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2015">
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["placeholder1", "placeholder2", "szachovy"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("placeholder1"),
              getImg("placeholder2"),
              getImg("szachovy"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = [
                "darthclean1",
                "darthclean2",
                "darthclean3",
                "darthclean4",
                "darthclean5",
              ];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("darthclean1"),
              getImg("darthclean2"),
              getImg("darthclean3"),
              getImg("darthclean4"),
              getImg("darthclean5"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["personal2", "personal3"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("personal2"), getImg("personal3")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["personal4", "personal5"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("personal4"), getImg("personal5")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2014">
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["placeholder3", "placeholder4"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("placeholder3"), getImg("placeholder4")]}
          ></SameHeightRow>
        </GalleryAccordion>
      </motion.div>
    </>
  );
}
