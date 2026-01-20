import { motion } from "motion/react";
import { SameHeightRow } from "@/components/mdx/SameHeightRow";
import Comparison2 from "@/components/gallery/Comparison";
import { GalleryAccordion } from "@/components/galleries/GalleryAccordion";
import { SmartImage } from "@/components/ui/SmartImage";
import { useState } from "react";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

const DESIGN_IMAGES = [
  // 2020
  {
    id: "marketing_woda2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/MarketingWodaV2_bnkix-717c.avif?updatedAt=1768494042142&ik-s=4c1756c0247d682847f8d8ecabf1d3e51c21162f",
    alt: "MarketingWodaV2",
    year: "2020",
  },
  {
    id: "marketing_woda1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2020/MarketingWodaV1_a5ndyvUlHP.avif?updatedAt=1768494041817&ik-s=72b9e62a4a65b4bb61d61c8f97aacd7df49a435c",
    alt: "MarketingWodaV1",
    year: "2020",
  },
  // 2018
  {
    id: "aurea1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/FORXST%20x%20JUTR%C3%98%20-%20AUREA_iJjiztflHN.avif?updatedAt=1768493879958&ik-s=18e144d187ebbc9756d62ab0dcb1769bd0b8ec38",
    alt: "AUREA",
    year: "2018",
  },
  {
    id: "aurea2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FBBanner2018State_SB4XHorR6K.avif?updatedAt=1768495109617&ik-s=78c4138da6f9dcea35648f9fc5a57f66e98523c1",
    alt: "AUREABanner",
    year: "2018",
  },
  {
    id: "sang_bleu_scene",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2018/Sang%20Bleu%20Scene_l0pYv6IwAd.avif?updatedAt=1768493879911&ik-s=60a57620cde5cfba28e3d906011302c3773bf7c3",
    alt: "Sang Bleu",
    year: "2018",
  },
  // 2017
  {
    id: "out_of_black1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Out%20of%20the%20Black%20002%20-min_6iN6Ku0L5O.avif?updatedAt=1768495110058&ik-s=7fb85fce18a052ef5316e455759e2bb577a9c3ad",
    alt: "Out of the Black",
    year: "2017",
  },
  {
    id: "out_of_black2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Out-of-the-Black-002-BACKGROUNDv0WEB_PA9ojq3ty.avif?updatedAt=1768495109834&ik-s=ce9931591a683ad92000f91928e558cbffa31650",
    alt: "Out of the Black",
    year: "2017",
  },
  {
    id: "belial_design1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/BelialDesignv2_n0AWs0gLWx.avif?updatedAt=1768495109559&ik-s=699a04c36c4c16add95d24ef45fb8844f0bfa2d9",
    alt: "Belial",
    year: "2017",
  },
  {
    id: "belial_design2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/BelialdesignBGv2_Cn-XNr7LGO.avif?updatedAt=1768495109655&ik-s=5b3b74630d80e7f7403a3af4ab05f3069aa79033",
    alt: "Belial",
    year: "2017",
  },
  {
    id: "fb_banner_2017",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FBBanner2017v4_v4Xf2QiHry.avif?updatedAt=1768495109607&ik-s=f292783c079952faf98cf162ec40e767dbc24cf6",
    alt: "FBBanner2017",
    year: "2017",
  },
  {
    id: "zso_banner",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/BanerZSO1-minSmaller@0.75x_RmVu5aihR.avif?updatedAt=1768495406227&ik-s=e6c83adfa7145f93113b16d1e3f2633853bb38ef",
    alt: "ZSO",
    year: "2017",
  },
  {
    id: "zso_plakat",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/PlakatZSOA3_0IXw-AHzR.avif?updatedAt=1768495405772&ik-s=3266b594125f559ab04631a92e581f2a6455b1ea",
    alt: "ZSO",
    year: "2017",
  },
  {
    id: "krzych_tlo",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/KrzychTlov1-min_TmTmCdQ1R.avif?updatedAt=1768495405870&ik-s=fefb648faf71efc53773e8d8f436fec15efe24be",
    alt: "Krzych",
    year: "2017",
  },
  {
    id: "emka_logo",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/emka/EMKAsquared%20Logo_IcZRkvVNV.avif?updatedAt=1768495405765&ik-s=5d9f73668c7da206bc44fed9904f5491a8f66313",
    alt: "EMKA",
    year: "2017",
  },
  {
    id: "belial_part1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/part1-min_5F_Rb7aDhu.avif?updatedAt=1768495109604&ik-s=21b5ca9c81dc9f9c0a91ac1fb5bb2c281646cbd9",
    alt: "BelialPart1",
    year: "2017",
  },
  {
    id: "belial_part2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/part2-min_njtxgkW0Sx.avif?updatedAt=1768495109642&ik-s=3e9087453bfad785716eb0720706e9b621e052e0",
    alt: "BelialPart2",
    year: "2017",
  },
  {
    id: "belial_part3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/part3-min_AV0Zho35LY.avif?updatedAt=1768495109640&ik-s=6a3aea56afd7033981ec9e35ab0b36f87d2f6107",
    alt: "BelialPart3",
    year: "2017",
  },
  // 2016
  {
    id: "personal_bgfb2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/PersonalBGFB2_4P9cbvaruJ.avif?updatedAt=1768495109539&ik-s=f71b29a31583437a3eb4fd78f0124889130a7d92",
    alt: "Personal",
    year: "2016",
  },
  {
    id: "8mj_pro",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/8MJProv2_DIpoxvl8i.avif?updatedAt=1768495109615&ik-s=12fd93abec768dbc8abc0a4fe46cbfcf090f09c3",
    alt: "8MJ",
    year: "2016",
  },
  {
    id: "hbb_icon",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/husaryabb/HBB%20Icon-min_1odzmURal.avif?updatedAt=1768495283848&ik-s=342ff0547dca068b4a6bb0a2a67dd550cb629d8d",
    alt: "HBB",
    year: "2016",
  },
  {
    id: "hbb_icon_v3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/husaryabb/HBB%20Iconv3-min_vu4d0lH5a.avif?updatedAt=1768495283787&ik-s=5c95acd83648e8a8ba2e08fcf1f1f7bbb241c93c",
    alt: "HBB",
    year: "2016",
  },
  {
    id: "mesotiq_fb_v3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/mesotiq/facebook%20banner%20v3clean_3Isugwh5h.avif?updatedAt=1768495358258&ik-s=050a172b161579345dca92636f55d3248303e402",
    alt: "MesotiqBanner",
    year: "2016",
  },
  {
    id: "mesotiq_avi_v1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/mesotiq/MesotiqAviv1-min_vCIxrMxGo.avif?updatedAt=1768495358357&ik-s=189bdfeb7b976d1e3e08c3e2b8625ab2664651c3",
    alt: "MesotiqAvi",
    year: "2016",
  },
  {
    id: "mesotiq_avi_gold",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/mesotiq/Mesotiq%20Avi%20GOLD-min_2Qb7t5uv7.avif?updatedAt=1768495358252&ik-s=9ddec5f9e7ac1ce533a95813c3028f957e5b6e15",
    alt: "MesotiqAviGold",
    year: "2016",
  },
  {
    id: "stiggi_banner",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/stiggi/facebookbannerStiggi98v1_29vm3WYLI.avif?updatedAt=1768926195974&ik-s=129f3aaa428d9a5d8b3cf902e524383535570c50",
    alt: "Stiggi98",
    year: "2016",
  },
  {
    id: "stiggi_icon",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/stiggi/IconStiggi98v1-min_lRk4BiZre.avif?updatedAt=1768926247708&ik-s=f2ebbff67f1a0532e68684ac10fc556299895cf8",
    alt: "Stiggi98",
    year: "2016",
  },
  {
    id: "mj_banner",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/jelinska/MJ%20Jewellery%20banner%20fb%20v1_ozZm9qJZt.avif?updatedAt=1768495326796&ik-s=f5fb0c05cfbc6fd62d9e375fd6ae248735ab790b",
    alt: "MJ",
    year: "2016",
  },
  {
    id: "mj_icon",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/jelinska/Icon%20Mjlogov3_7xYKHTBrJ.avif?updatedAt=1768495326512&ik-s=eeb2fdd43b793756d2c784e6b2d8c65a0ee154fd",
    alt: "MJ",
    year: "2016",
  },
  // 2015
  {
    id: "fb_img_2015",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FB_IMG_1444131108649_cOpuyG2jjK.avif?updatedAt=1768495109525&ik-s=c6b39acbd32f17ef67a085f26aa72c0dffff306a",
    alt: "Placeholder",
    year: "2015",
  },
  {
    id: "banner4",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2015/Banner4_mokyd4mV8.avif?updatedAt=1768493741154&ik-s=82d364a1ea56c373911f16c2fdd60bf73a8a63cd",
    alt: "Placeholder",
    year: "2015",
  },
  {
    id: "szachovy_logo",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/szachovy/Szachovy%20logo24_O5JRnj3C2N.avif?updatedAt=1768495567348&ik-s=8414af64ce77c215cec6beb367906fe034a4f172",
    alt: "Szachovy",
    year: "2015",
  },
  {
    id: "darth_bg",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv2BG_c0_Bh2wTe.avif?updatedAt=1768495178175&ik-s=e41f6bc890140e1e17ea6e1afe1879713f0093f4",
    alt: "DarthClean",
    year: "2015",
  },
  {
    id: "darth_logo1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv1LOGO_0aCSLC1bY.avif?updatedAt=1768495178181&ik-s=c48de40bcc2bb69a9d144f0826ebee92b5ba15d9",
    alt: "DarthClean",
    year: "2015",
  },
  {
    id: "darth_bg_v1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv1BG_Bye9Kib6O.avif?updatedAt=1768495178228&ik-s=8429714aa4701ac3b701e23493108836c966c6e8",
    alt: "DarthClean",
    year: "2015",
  },
  {
    id: "darth_logo2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/DarthCleanv2LOGO_DLslYGz4i.avif?updatedAt=1768495178181&ik-s=b72a7e04669e96bbb5d788c646d3571b747f261e",
    alt: "DarthClean",
    year: "2015",
  },
  {
    id: "darth_banner_v1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/darth/Dlogobannerv1_BknLlr96v.avif?updatedAt=1768495178276&ik-s=7133c20f1dbd0a979b676477a7527723dfe34b2d",
    alt: "DarthClean",
    year: "2015",
  },
  {
    id: "personal_header_v3",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/PersonalHeaderv3_inqifL-42e.avif?updatedAt=1768926066043&ik-s=da60651ed3b2262ac102c89564da02782c60bc80",
    alt: "Personal",
    year: "2015",
  },
  {
    id: "belial_icon_v1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/IconBelialv1_OFPiyA50JE.avif?updatedAt=1768495109691&ik-s=cda6c82bcf26e7ad5ea54f003d0d6c7e3aff49aa",
    alt: "Personal",
    year: "2015",
  },
  {
    id: "belial_header_v4",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Header%20Belial%20v4-min_KbbNlUL4CE.avif?updatedAt=1768495109578&ik-s=b38ff2f80cf1bc10b5e3a9c7cd27fa5aa396a4ff",
    alt: "Personal",
    year: "2015",
  },
  {
    id: "belial_icon_v4",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Iconv4_34wg0lebOq.avif?updatedAt=1768926119368&ik-s=437d0b30026641e840263e62ef013a1285b62f79",
    alt: "Personal",
    year: "2015",
  },
  // 2014
  {
    id: "img_2014_1",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2014/1429548504624_UVptvQj1L.avif?updatedAt=1768493688558&ik-s=0014c27bd78b358f2e7902ee54171873eeb7e337",
    alt: "Placeholder",
    year: "2014",
  },
  {
    id: "img_2014_2",
    src: "https://ik.imagekit.io/j3l1n5k1/gfx/2014/M%20logopaper1_FnAPGEOeq.avif?updatedAt=1768493688698&ik-s=bb410e57ccee639601915b7b12206de2d9ad39bd",
    alt: "Placeholder",
    year: "2014",
  },
];

export function DesignGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (id: string) => {
    const index = DESIGN_IMAGES.findIndex((img) => img.id === id);
    if (index !== -1) {
      setInitialIndex(index);
      setLightboxOpen(true);
    }
  };

  const getImg = (id: string) => DESIGN_IMAGES.find((img) => img.id === id)!;

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
              const ids = ["marketing_woda2", "marketing_woda1"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("marketing_woda2"), getImg("marketing_woda1")]}
          ></SameHeightRow>
        </GalleryAccordion>
        <GalleryAccordion year="2018">
          <Comparison2
            className="aspect-[2.4/1]"
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["aurea1", "aurea2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("aurea1"), getImg("aurea2")]}
          />

          <div
            className=" w-full rounded-xl overflow-hidden border shadow-xl light:border-neutral-500 dark:border-neutral-800 cursor-pointer"
            onClick={() => openLightbox("sang_bleu_scene")}
          >
            <SmartImage
              src={getImg("sang_bleu_scene").src}
              alt={getImg("sang_bleu_scene").alt}
              className="transition-all duration-500 ease-in-out h-auto"
            />
          </div>
        </GalleryAccordion>

        <GalleryAccordion year="2017">
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["out_of_black1", "out_of_black2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("out_of_black1"), getImg("out_of_black2")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = [
                "belial_design1",
                "belial_design2",
                "fb_banner_2017",
              ];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("belial_design1"),
              getImg("belial_design2"),
              getImg("fb_banner_2017"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = [
                "zso_banner",
                "zso_plakat",
                "krzych_tlo",
                "emka_logo",
              ];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("zso_banner"),
              getImg("zso_plakat"),
              getImg("krzych_tlo"),
              getImg("emka_logo"),
            ]}
          ></SameHeightRow>
          <div className="grid grid-cols-3 w-full rounded-sm overflow-hidden border hover:shadow-sm shadow-xl light:border-neutral-500 dark:border-neutral-800">
            {["belial_part1", "belial_part2", "belial_part3"].map((id) => (
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
              const ids = ["personal_bgfb2", "8mj_pro"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("personal_bgfb2"), getImg("8mj_pro")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-sm"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["hbb_icon", "hbb_icon_v3"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("hbb_icon"), getImg("hbb_icon_v3")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = [
                "mesotiq_fb_v3",
                "mesotiq_avi_v1",
                "mesotiq_avi_gold",
              ];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("mesotiq_fb_v3"),
              getImg("mesotiq_avi_v1"),
              getImg("mesotiq_avi_gold"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl "
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["stiggi_banner", "stiggi_icon"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("stiggi_banner"), getImg("stiggi_icon")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["mj_banner", "mj_icon"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("mj_banner"), getImg("mj_icon")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2015">
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["fb_img_2015", "banner4", "szachovy_logo"];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("fb_img_2015"),
              getImg("banner4"),
              getImg("szachovy_logo"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = [
                "darth_bg",
                "darth_logo1",
                "darth_bg_v1",
                "darth_logo2",
                "darth_banner_v1",
              ];
              openLightbox(ids[idx]);
            }}
            images={[
              getImg("darth_bg"),
              getImg("darth_logo1"),
              getImg("darth_bg_v1"),
              getImg("darth_logo2"),
              getImg("darth_banner_v1"),
            ]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["personal_header_v3", "belial_icon_v1"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("personal_header_v3"), getImg("belial_icon_v1")]}
          ></SameHeightRow>
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["belial_header_v4", "belial_icon_v4"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("belial_header_v4"), getImg("belial_icon_v4")]}
          ></SameHeightRow>
        </GalleryAccordion>

        <GalleryAccordion year="2014">
          <SameHeightRow
            className="rounded-xl overflow-hidden"
            gap={16}
            roundEvery={true}
            onImageClick={(idx) => {
              const ids = ["img_2014_1", "img_2014_2"];
              openLightbox(ids[idx]);
            }}
            images={[getImg("img_2014_1"), getImg("img_2014_2")]}
          ></SameHeightRow>
        </GalleryAccordion>
      </motion.div>
    </>
  );
}
