import { useState } from "react";
import { SameHeightRow } from "@/components/ui/SameHeightRow";
import { SimpleLightbox } from "@/components/gallery/SimpleLightbox";

export function BukPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  const bukPath = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/DzienKobiet_7e5ygZ_4h.avif?updatedAt=1769087687370",
      alt: "DzienKobietFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/DzienKobietA4_G5HBrhVXE.avif?updatedAt=1769087687699",
      alt: "DzienKobietA4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/StudenckiCzwartekA4_Kc_JLwUmi.avif?updatedAt=1769087687243",
      alt: "StudenckiCzwartekA4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/StudenckiCzwartekb_9Y8VhiQoxV.avif?updatedAt=1769087686927",
      alt: "StudenckiCzwartekFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW2_3uxIMSXHuL.avif?updatedAt=1769087687771",
      alt: "MikolajkiAMW2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW2A4_fiKhfTOiUx.avif?updatedAt=1769087687613",
      alt: "MikolajkiAMW2A4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMWA4_Rri7MPBNN.avif?updatedAt=1769087687877",
      alt: "MikolajkiAMWA4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW_CY2rCwU6wb.avif?updatedAt=1769087687579",
      alt: "MikolajkiAMW",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/IntegracjaStudenckaFB_6YfFopoFAl.avif?updatedAt=1769087687600",
      alt: "IntegracjaStudenckaFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/IntegracjaStudenckaPlakat_OoHOUIJSMN.avif?updatedAt=1769087687514",
      alt: "IntegracjaStudenckaPlakat",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/HalloweenParty2_k1N8wejz5p.avif?updatedAt=1769087687303",
      alt: "HalloweenPartyA4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/CostumePartyFB60_xAE2edRT2k.avif?updatedAt=1769087687248",
      alt: "CostumePartyFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/CostumePartyv2FB60_2Jw6LEFUG.avif?updatedAt=1769087687227",
      alt: "CostumePartyv2FB60",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/HalloweenParty_lP9yKudQjs.avif?updatedAt=1769087687786",
      alt: "HalloweenParty2A4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki_tf0wBtPBJ.avif?updatedAt=1769087687323",
      alt: "KaraokeCzwartkiFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartkiA4_p2Psrs7jl-.avif?updatedAt=1769087687630",
      alt: "KaraokeCzwartkiA4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/Andrzejki_0WqCrs0JOw.avif?updatedAt=1769087687369",
      alt: "AndrzejkiFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/OtrzesinyFB_b_3S0LLJDi.avif?updatedAt=1769087687018",
      alt: "OtrzesinyFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/UMGDisney_RaLOApc0GP.avif?updatedAt=1769087688270",
      alt: "UMGDisneyA4",
    },
  ];

  return (
    <>
      <SimpleLightbox
        images={bukPath}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <div className="flex flex-col gap-8">
        {[0, 2, 4, 6, 8, 10, 12, 14, 16].map((startIndex) => (
          <SameHeightRow
            key={startIndex}
            roundEvery
            images={[bukPath[startIndex], bukPath[startIndex + 1]]}
            gap={16}
            onImageClick={(idx) => openLightbox(startIndex + idx)}
          />
        ))}
        <SameHeightRow
          roundEvery
          images={[bukPath[18]]}
          gap={16}
          onImageClick={(idx) => openLightbox(18 + idx)}
        />
      </div>
    </>
  );
}
