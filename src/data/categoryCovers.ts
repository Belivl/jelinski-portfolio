
const rawCategoryCovers: Record<string, string> = {
 all: "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL02669_Asb2eSSYxz.avif",
  landscape: "",
  portrait: "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_xY2hM8Fiq.avif?updatedAt=1769018687893",
  event: "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03601_iR7SsLUUe.avif?updatedAt=1769023300627",
  "black-and-white": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_AuiU0fTRj.avif?updatedAt=1769014191823",
  animal: "",
  architecture: "",
  client: "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif?updatedAt=1769015078109",
  cars: "",
  mobile:"https://ik.imagekit.io/j3l1n5k1/photography/2025/mobile/IMG20250529185558_HfR-_6P8Z.avif?updatedAt=1768417374249",
  street: "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_rs6mnSDWd.avif?updatedAt=1769026295022",
  various: "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_RLRHU7k5t-.avif?updatedAt=1769025614519",
  travel: "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09071_unbdSFM3_.avif?updatedAt=1769019321809",
  session: "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_9P1xUigWyR.avif?updatedAt=1769026403675",
};

export const CATEGORY_COVERS: Record<string, string> = Object.fromEntries(
    Object.entries(rawCategoryCovers).map(([key, value]) => [key, value])
);

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