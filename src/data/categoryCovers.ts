import { getDevImageUrl } from "@/lib/utils";

const rawCategoryCovers: Record<string, string> = {
 all: "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL02669_coaahaoWS.avif?updatedAt=null&ik-s=896840391d93dae9dff92cef509977e81f5741f0",
  landscape: "",
  portrait: "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_SAWiT_yJw.avif?updatedAt=1768417968690&ik-s=88efc3a5010417730b2fb7f48264456491b2be32",
  event: "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03601_1Vut9LW9O9.avif?updatedAt=1768418873700&ik-s=36c068a9afd4aaec5fe9a18dbfa3a989bb37f71f",
  "black-and-white": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_f1IkJTveI.avif?updatedAt=1768417165173&ik-s=d8fd3cc9063dc56f4a5037784048c081c0279d6e",
  animal: "",
  architecture: "",
  client: "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b",
  cars: "",
  street: "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_VquUXqy3xA.avif?updatedAt=1768419349578&ik-s=bb78b6ae28e57c21516abae8b5ad13d3b20ef891",
  various: "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_m7tt94_Nb.avif?updatedAt=1768658287338&ik-s=735d6f3922c4fc1d64148461c7ea0161f5ca07c0",
  travel: "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09071_MxfdqD8Sz.avif?updatedAt=1768418161192&ik-s=e71ff0dd98f4d92efe95a53223d031c1f24eeebd",
  session: "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_QHgZ6tY7u.avif?updatedAt=1768419312233&ik-s=af0507a8d661c6f128e17bbcc2e778af2de3f380",
};

export const CATEGORY_COVERS: Record<string, string> = Object.fromEntries(
    Object.entries(rawCategoryCovers).map(([key, value]) => [key, getDevImageUrl(value)])
);
