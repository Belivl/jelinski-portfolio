import { getDevImageUrl } from "@/lib/utils";

export type ProjectTabId = "projects" | "design" | "art" | "3d";

export interface ProjectTab {
  id: ProjectTabId;
  image: string;
}

const rawProjectTabs: ProjectTab[] = [
  {
    id: "projects",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/TestRenderV4_nRk7aKyPU.avif?updatedAt=1768492291973&ik-s=77d870f916ce7e886b0372a128e4e60ffe3ea22f",
  },
  {
    id: "design",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FBBanner2018State_SB4XHorR6K.avif?updatedAt=1768495109617&ik-s=78c4138da6f9dcea35648f9fc5a57f66e98523c1",
  },
  {
    id: "art",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/Satyra1_dWKViARHSt.avif?updatedAt=1768494648784&ik-s=a4872941b6f350e3a4618a28f113318c3e803225",
  },
  {
    id: "3d",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MichalJelinski-WSB-MartwaNatura2_zaHkC5ps7.avif?updatedAt=1768494532982&ik-s=c32136b4e8c989fd963938209459da98fed06ab2",
  },
];

export const PROJECT_TABS: ProjectTab[] = rawProjectTabs.map((tab) => ({
  ...tab,
  image: getDevImageUrl(tab.image),
}));

export const rawProjectCategoryImages: Record<string, string> = {
  all: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4_Fm9ppWJ5I.avif?updatedAt=1768490544944&ik-s=0ea3cfac2d0de1b5420870b87026a038bfe8d369",
  Branding: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_ziOsUPV0q.avif?updatedAt=1768489347991&ik-s=e36a4d55bf42912917d6c5e2e11acdbf9501e2af",
  "UI/UX": "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_VxVdLR-Ll7.avif?updatedAt=1768490680345&ik-s=98ed2986c5893e1012aa652b423da07f525057a9",
  Design: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki_MZJs7xUAQ.avif?updatedAt=1768489623176&ik-s=27602c24df9bca722797668066c3c1e06474e3a7",
  "3D": "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Part2fix2_Cuf3YUn9C.avif?updatedAt=1768495630931&ik-s=96523f901b803c93e0a0ab079569ca7808d5962d",
};

export const PROJECT_CATEGORY_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(rawProjectCategoryImages).map(([key, value]) => [key, getDevImageUrl(value)])
);
