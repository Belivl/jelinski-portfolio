
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
  street: "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_rs6mnSDWd.avif?updatedAt=1769026295022",
  various: "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_RLRHU7k5t-.avif?updatedAt=1769025614519",
  travel: "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09071_unbdSFM3_.avif?updatedAt=1769019321809",
  session: "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_9P1xUigWyR.avif?updatedAt=1769026403675",
};

export const CATEGORY_COVERS: Record<string, string> = Object.fromEntries(
    Object.entries(rawCategoryCovers).map(([key, value]) => [key, value])
);
