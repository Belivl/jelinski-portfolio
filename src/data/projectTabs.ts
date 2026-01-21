

export type ProjectTabId = "projects" | "design" | "art" | "3d";

export interface ProjectTab {
  id: ProjectTabId;
  image: string;
}

const rawProjectTabs: ProjectTab[] = [
  {
    id: "projects",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/TestRenderV4_yTNNfidzc.avif",
  },
  {
    id: "design",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/FBBanner2018State_PH5YhA_2g3.avif?updatedAt=1769087488242",
  },
  {
    id: "art",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/Satyra1_fv43ErsuZJ.avif?updatedAt=1769089272211",
  },
  {
    id: "3d",
    image: "https://ik.imagekit.io/j3l1n5k1/gfx/2021/MichalJelinski-WSB-MartwaNatura2_JgaCJp1PtT.avif?updatedAt=1769089169502",
  },
];

export const PROJECT_TABS: ProjectTab[] = rawProjectTabs.map((tab) => ({
  ...tab,
  image: tab.image,
}));

export const rawProjectCategoryImages: Record<string, string> = {
  all: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4_bOibHM2gT.avif?updatedAt=1769087528102",
  Branding: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_brHGwjJF0B.avif?updatedAt=1769088245453",
  "UI/UX": "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_3ypFa2THm.avif?updatedAt=1769090151530",
  Design: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki_tf0wBtPBJ.avif?updatedAt=1769087687323",
  "3D": "https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Part2fix2_SkY9yPzkM.avif?updatedAt=1769088130147",
};

export const PROJECT_CATEGORY_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(rawProjectCategoryImages).map(([key, value]) => [key, value])
);
