import { type Photo, photoData } from "./photos";




const photographerImages = [
  "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394_wrU-VA-Mw.avif",
  "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_TcF_jjytB.avif?updatedAt=1769014578263",
  "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_0LpjHoSlN.avif",
];

const designerImages = [
  "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_3ypFa2THm.avif?updatedAt=1769090151530",
  "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/Visa2v6_43Jh2pkKX.avif?updatedAt=1769088245482",
  "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_4__fHN9eEG51.avif?updatedAt=1769087011869",
];


const featuredUrls = [
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif", //  (Daldehog) 24
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_TcF_jjytB.avif?updatedAt=1769014578263", //  (fizjotusia) 25
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197_STNi1A5yY.avif", //  (Leba Typ) 1
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_9P1xUigWyR.avif?updatedAt=1769026403675", //  (Allan) 4
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-8352-2_QblSD0PKFw.avif?updatedAt=1769025614989", //  (Bee) 6
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-1466_IblHbiOkj.avif?updatedAt=1769024187309", //Berlin Orange 7
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_WA5bRgyXEW.avif?updatedAt=1769024187446", //Berlin Tower 7
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03921_QpiP6g-69.avif?updatedAt=1769023301004", //Sail 8
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06348_im_Ishk7pw.avif?updatedAt=1769022715865", //Madzia Sto 9
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_0LpjHoSlN.avif?updatedAt=1769022051888", //Ruda 10
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00291-Edit_rsRvCnmLX.avif?updatedAt=1769022051876", //Madzia Jez 10
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394_wrU-VA-Mw.avif", //Adam 12
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05953-2_4iAVBqmUJb.avif?updatedAt=1769020789012", //Smile 13
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05683-2_W7IU07awlT.avif?updatedAt=1769020788694", //Wiki 13
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554_x44Cbn05r.avif?updatedAt=1769019321702", //Chata Gory 18
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987_9uv8pgCck.avif?updatedAt=1769018838546", //JuliaMaciek 20
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_7UN4WQmN8.avif?updatedAt=1769018687969", //Sunflowers 21
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_adQgL1S4P.avif?updatedAt=1769018379505", //Santo 22
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_t1JgNVJas.avif?updatedAt=1769018104414", //Dynie 23
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_AuiU0fTRj.avif?updatedAt=1769014191823", //Barto 26
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_wTB4VdC0-Z.avif?updatedAt=1769013803803", //Tomek 27
  ];



export type LoadingPhoto = string | { url: string; objectTop: boolean };

export const loadingPhotos: LoadingPhoto[] = [
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_TcF_jjytB.avif?updatedAt=1769014578263", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_BjgCqE9dD.avif?updatedAt=1769014192475",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_AuiU0fTRj.avif?updatedAt=1769014191823",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_VdAjKDRHt.avif?updatedAt=1769013368084",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05898-edit_J8VnnzZSL.avif?updatedAt=1769020020329", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554_x44Cbn05r.avif?updatedAt=1769019321702", objectTop: false },
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08867_APRsUCgx-.avif?updatedAt=1769019321858",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08942-2_aAiH3wSrrd.avif?updatedAt=1769019321813",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09223-2_0Rfkmuesu.avif?updatedAt=1769019321817",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09322-3_BaSHQkC7rI.avif?updatedAt=1769019321858",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_ozGSzPSL2.avif?updatedAt=1769019064326",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987_9uv8pgCck.avif?updatedAt=1769018838546", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02516_7BvmnOcPv.avif?updatedAt=1769018838363",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_xY2hM8Fiq.avif?updatedAt=1769018687893",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_7UN4WQmN8.avif?updatedAt=1769018687969", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_adQgL1S4P.avif?updatedAt=1769018379505", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_0LpjHoSlN.avif?updatedAt=1769022051888", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00291-Edit_rsRvCnmLX.avif?updatedAt=1769022051876",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01750_vbghwheYV.avif?updatedAt=1769021301069",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394_wrU-VA-Mw.avif", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05705-2_zHCdVRGXQ.avif?updatedAt=1769020788503",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09320_XFvnZg8Vn.avif?updatedAt=1769020623195", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08296_wUdcqtYCbx.avif?updatedAt=1769025614817",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_RLRHU7k5t-.avif?updatedAt=1769025614519",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08489_Mpnd69CEuy.avif?updatedAt=1769025614802",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_WA5bRgyXEW.avif?updatedAt=1769024187446",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01162_LS3OltTydt.avif?updatedAt=1769024108645",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00667-2_7UT-vB49em.avif?updatedAt=1769024108692", objectTop: false} ,
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL01053_8iX7Ta112c.avif?updatedAt=1769024108628",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03957_gkwAxU--_E.avif?updatedAt=1769023301054",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05007_FKTrSWsAk.avif?updatedAt=1769023301028",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-2_0NmdG4_M1i.avif?updatedAt=1769022715788", objectTop: true } ,
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06567_75BazDTic.avif?updatedAt=1769022716333",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9171_o-WVm0btCp.avif?updatedAt=1769027173624",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9183-3_mg-4Nf4UM.avif?updatedAt=1769027173604",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9188-3__2V79b7A7.avif?updatedAt=1769027173577",
   "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-132_Bm3XW64RYT.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-109_TopCUrLy0.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_rs6mnSDWd.avif?updatedAt=1769026295022",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02460-2_8nBLL9r64.avif?updatedAt=1769026294952",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_rs6mnSDWd.avif?updatedAt=1769026295022", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04883-2_0aJ4aKu1k.avif?updatedAt=1769031148018",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04773_jic46LWsV.avif?updatedAt=1769031147990",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL02669_Asb2eSSYxz.avif?updatedAt=1769026542726",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-08010_U3OTEiHMF.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05623-2_thVKP4HEhr.avif",
];

const heroPhotos = [
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif?updatedAt=1769015078109",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_TcF_jjytB.avif?updatedAt=1769014578263", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_BjgCqE9dD.avif?updatedAt=1769014192475",
   "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_AuiU0fTRj.avif?updatedAt=1769014191823",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_VdAjKDRHt.avif?updatedAt=1769013368084",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554_x44Cbn05r.avif?updatedAt=1769019321702",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08867_APRsUCgx-.avif?updatedAt=1769019321858",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09223-2_0Rfkmuesu.avif?updatedAt=1769019321817",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09322-3_BaSHQkC7rI.avif?updatedAt=1769019321858",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_ozGSzPSL2.avif?updatedAt=1769019064326",
     { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_7UN4WQmN8.avif?updatedAt=1769018687969", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_adQgL1S4P.avif?updatedAt=1769018379505", objectTop: false },
     { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_0LpjHoSlN.avif?updatedAt=1769022051888", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01750_vbghwheYV.avif?updatedAt=1769021301069",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394_wrU-VA-Mw.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05705-2_zHCdVRGXQ.avif?updatedAt=1769020788503",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09320_XFvnZg8Vn.avif?updatedAt=1769020623195", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08296_wUdcqtYCbx.avif?updatedAt=1769025614817",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_RLRHU7k5t-.avif?updatedAt=1769025614519",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08489_Mpnd69CEuy.avif?updatedAt=1769025614802",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_WA5bRgyXEW.avif?updatedAt=1769024187446",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01162_LS3OltTydt.avif?updatedAt=1769024108645",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00667-2_7UT-vB49em.avif?updatedAt=1769024108692", objectTop: false} ,
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL01053_8iX7Ta112c.avif?updatedAt=1769024108628",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03957_gkwAxU--_E.avif?updatedAt=1769023301054",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05007_FKTrSWsAk.avif?updatedAt=1769023301028",
     "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-2_0NmdG4_M1i.avif?updatedAt=1769022715788",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06567_75BazDTic.avif?updatedAt=1769022716333",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197-2_YyMIgEJ8H.avif?updatedAt=1769027173542",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9183-3_mg-4Nf4UM.avif?updatedAt=1769027173604",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9188-3__2V79b7A7.avif?updatedAt=1769027173577",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-132_Bm3XW64RYT.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-109_TopCUrLy0.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02460-2_8nBLL9r64.avif?updatedAt=1769026294952",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_rs6mnSDWd.avif?updatedAt=1769026295022", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04883-2_0aJ4aKu1k.avif?updatedAt=1769031148018",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04773_jic46LWsV.avif?updatedAt=1769031147990",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL02669_Asb2eSSYxz.avif?updatedAt=1769026542726",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-08010_U3OTEiHMF.avif",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05623-2_thVKP4HEhr.avif",
]





export const HOME_PHOTOGRAPHER_IMAGES = photographerImages;
export const HERO_IMAGES = heroPhotos;
export const HOME_DESIGNER_IMAGES = designerImages;


// Match against raw photoData to ensure we find the right objects even if getPhotos() transforms them for dev
export const HOME_FEATURED_PHOTOS = featuredUrls
  .map((url, index) => {
    // Strip query parameters for matching
    const searchUrl = url.split("?")[0];
    const photo = photoData.find((p) => p.url.split("?")[0] === searchUrl);
    if (photo) {
      return {
        ...photo,
        id: photo.id || `featured-${index}-${searchUrl.split("/").pop()?.split(".")[0] || "img"}`,
      };
    }
    return null;
  })
  .filter((photo): photo is Photo & { id: string } => !!photo);


