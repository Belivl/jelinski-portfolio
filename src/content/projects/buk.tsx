import { SameHeightRow } from "@/components/mdx/SameHeightRow.tsx";

export function BukPost() {
  const bukPath = [
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/DzienKobiet_Tyo5C8vwY.avif?updatedAt=1768489623088&ik-s=8b939ce37f163232c084995f3d583014ea3bdf60",
      alt: "DzienKobiet",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/DzienKobiet%20A4%20_fogK6Fg-m.avif?updatedAt=1768489623360&ik-s=259f574e0e5a40d0bdbb158b25b85ae0111f1b68",
      alt: "DzienKobiet_A4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/StudenckiCzwartekA4_FJZ-d0h9Bo.avif?updatedAt=1768489623442&ik-s=b1563a8ab86aea30017fe45c78b3e78645ec09db",
      alt: "StudenckiCzwartekA4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/StudenckiCzwartekb_E7r-YAbmRT.avif?updatedAt=1768489623222&ik-s=6886f8c49ab0123a02471a549f1726e4e09e7008",
      alt: "StudenckiCzwartek",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW2_26naxAkej.avif?updatedAt=1768489623151&ik-s=c311addef74b8595bb7c88e3f2046b63aa5a7970",
      alt: "MikolajkiAMW2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW2A4_cAxFi8aLj.avif?updatedAt=1768489623447&ik-s=25a8b8a90c88f35b0528f96237bf3a59f635b4fa",
      alt: "MikolajkiAMW2A4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW%20A4_epg_UDcO4j.avif?updatedAt=1768489623388&ik-s=9e3879bd2e713f776dddc1303485c595d78de954",
      alt: "MikolajkiAMW_A4",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/MikolajkiAMW_-q-LzGJAc5.avif?updatedAt=1768489623165&ik-s=571488104a68c5d57cc825fd0422f14d889b7ab3",
      alt: "MikolajkiAMW",
    },

    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/Integracja%20StudenckaFB_Gfo8N54RjE.avif?updatedAt=1768489623360&ik-s=5a39080c305f6b934400f85db4aa82f58c8e4165",
      alt: "Integracja_StudenckaFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/Integracja%20StudenckaPlakat_BpDK3gv14.avif?updatedAt=1768489623301&ik-s=75c9f584901034c6ec20025a2225ec8b1d2e0ff6",
      alt: "Integracja_StudenckaA4",
    },

    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/CostumePartyFB60_iqA-aSkQ6Y.avif?updatedAt=1768490305817&ik-s=1140169ca6d7ff16a560adfecdacfb16409c2505",
      alt: "HalloweenParty2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/CostumePartyFB60_iqA-aSkQ6Y.avif?updatedAt=1768490305817&ik-s=1140169ca6d7ff16a560adfecdacfb16409c2505",
      alt: "CostumePartyFB100",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/CostumePartyv2FB60__zDkFFCI64.avif?updatedAt=1768490305496&ik-s=a88d12c929d4b6245c54d19565a9e8fe7087fdf6",
      alt: "HalloweenParty2",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/HalloweenParty_FDKEKWfKc.avif?updatedAt=1768490306741&ik-s=85cd10d5f3b513bd373310788d6089e7d550d771",
      alt: "CostumePartyFB100",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki_MZJs7xUAQ.avif?updatedAt=1768489623176&ik-s=27602c24df9bca722797668066c3c1e06474e3a7",
      alt: "KaraokeCzwartkiFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki%20A4_XQCN9mcJ5.avif?updatedAt=1768489623398&ik-s=b45635c6463c285f1d48f189db97a0ede1d97fd0",
      alt: "KaraokeCzwartki_A4",
    },
    {
      src: "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705855132/gfx/project/buk/BannerFBcropped_0004_Andrzejki_i8iwdm.jpg",
      alt: "Andrzejki",
    },
    {
      src: "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705855142/gfx/project/buk/BannerFBcropped_0005_OtrzesinyFB_dxwv2i.jpg",
      alt: "OtrzesinyFB",
    },
    {
      src: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/UMGDisney_Qgv9URaRjK.avif?updatedAt=1768490319776&ik-s=3a621e0d305ae1e62c9dbac15e092992eb902673",
      alt: "UMGDisney",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <SameHeightRow roundEvery images={[bukPath[0], bukPath[1]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[2], bukPath[3]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[4], bukPath[5]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[6], bukPath[7]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[8], bukPath[9]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[10], bukPath[11]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[12], bukPath[13]]} gap={16} />
      <SameHeightRow roundEvery images={[bukPath[14], bukPath[15]]} gap={16} />
    </div>
  );
}
