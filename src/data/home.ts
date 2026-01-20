import { getPhotos, type Photo } from "./photos";
import { getDevImageUrl } from "@/lib/utils";

const photographerImages = [
  "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394-Enhanced-NR_SBIsc2Ad2.avif?updatedAt=1768418450785&ik-s=2d097335f0570653257b00b8c77b87954ad863e4",
  "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_qH1Q7rsxk.avif?updatedAt=1768344210783&ik-s=d1a5a9c39aff0f046d5c665f6e4af4953cd02d0d",
  "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_CNVpHuUUR.avif?updatedAt=1768418383993&ik-s=5938e66ae05250117773aa57e0f01fe18868780e",
];

const designerImages = [
  "https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_VxVdLR-Ll7.avif?updatedAt=1768490680345&ik-s=98ed2986c5893e1012aa652b423da07f525057a9",
  "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_ziOsUPV0q.avif?updatedAt=1768489347991&ik-s=e36a4d55bf42912917d6c5e2e11acdbf9501e2af",
  "https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_4_SkPMsmURfM.avif?updatedAt=1768490637807&ik-s=e2c3004d65df8f48aae4293304da0fcde4fdbc0b",
];


const featuredUrls = [
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b", //  (Daldehog) 24
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_qH1Q7rsxk.avif?updatedAt=1768344210783&ik-s=d1a5a9c39aff0f046d5c665f6e4af4953cd02d0d", //  (fizjotusia) 25
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197_m2Ef-1U7Y.avif?updatedAt=1768419282660&ik-s=bc33f3fd1d0467b99de44eeb4f6ae3a32e1aaadb", //  (Leba Typ) 1
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_QHgZ6tY7u.avif?updatedAt=1768419312233&ik-s=af0507a8d661c6f128e17bbcc2e778af2de3f380", //  (Allan) 4
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-8352-2_wpKylyNzP.avif?updatedAt=1768418933230&ik-s=0723d5723196e9f8cdc205f5ae820ebe1e2cb385", //  (Bee) 6
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-1466-EDIT4_MwIs5J3VGI.avif?updatedAt=1768418787857&ik-s=4310f51ed0d09fc5ccffa6820df6a88de53ae16a", //Berlin Orange 7
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_xQzLTIS_Ve.avif?updatedAt=1768418788883&ik-s=8218a6ac0f1ae302fa960516cb32ef6f41ebb934", //Berlin Tower 7
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03921_-B-u8y0dGE.avif?updatedAt=1768418873351&ik-s=51bfe7255bb5c320a508b763eac35147c879c5eb", //Sail 8
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06348_ePaRlq3dxR.avif?updatedAt=1768418904348&ik-s=78384212966d10ee944b48b6e618577d5a4d2ab7", //Madzia Sto 9
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_CNVpHuUUR.avif?updatedAt=1768418383993&ik-s=5938e66ae05250117773aa57e0f01fe18868780e", //Ruda 10
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00291-Edit_Bh40-gc3l.avif?updatedAt=1768418383953&ik-s=861fc3f31095b62f6bd6a543835e19d1631d3dfb", //Madzia Jez 10
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394-Enhanced-NR_SBIsc2Ad2.avif?updatedAt=1768418450785&ik-s=2d097335f0570653257b00b8c77b87954ad863e4", //Adam 12
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05953-2_Uu6qBd4NR.avif?updatedAt=1768418475180&ik-s=37fa6266688ea4e7c6c4e26a1f3f19ab13df845b", //Smile 13
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05683-2_4xg1kNKfC.avif?updatedAt=1768418474949&ik-s=dfb80dcb4bfa014c2d6433125c60db27d8620d1f", //Wiki 13
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554-edit2_JINvBLdZtu.avif?updatedAt=1768418161880&ik-s=f7aab0442db7752f74d6e004a8ea447db9f06272", //Chata Gory 18
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987-Edit-538_akGBZ2tDt.avif?updatedAt=1768418002602&ik-s=06c4f952ee159c7df92bf1b927d5870fdc5bece6", //JuliaMaciek 20
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_VzLOJb1RX.avif?updatedAt=1768417968649&ik-s=7d93d0025bd373953c0b2aec4915161e25c76736", //Sunflowers 21
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_QxnPI292X.avif?updatedAt=1768418207216&ik-s=08ab566f42af083a128454a520af752efd4b549c", //Santo 22
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_C-wwMaCiP.avif?updatedAt=1768417875355&ik-s=2809750b7f978701c9848974d34fce71b25cbc8f", //Dynie 23
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_f1IkJTveI.avif?updatedAt=1768417165173&ik-s=d8fd3cc9063dc56f4a5037784048c081c0279d6e", //Klohs 26
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_w1J8QN9Z2x.avif?updatedAt=1768417209487&ik-s=4a559d8519ccd11a142c82ab2735200e750f1cf8", //Tomek 27
  ];



export type LoadingPhoto = string | { url: string; objectTop: boolean };

export const loadingPhotos: LoadingPhoto[] = [
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_qH1Q7rsxk.avif?updatedAt=1768344210783&ik-s=d1a5a9c39aff0f046d5c665f6e4af4953cd02d0d", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_uwzfn3cso.avif?updatedAt=1768344348897&ik-s=5c4467cf85e2369fdee752c1d2bd719d323945e0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_f1IkJTveI.avif?updatedAt=1768417165173&ik-s=d8fd3cc9063dc56f4a5037784048c081c0279d6e",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_bGF2DC9o1.avif?updatedAt=1768344465709&ik-s=9df6cbc602ee9283eba9234cef5ce38b596bb2d1",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05898-edit_ybGBXL1ci.avif?updatedAt=1768417910327&ik-s=d3430a6a50a518135ecc2098963d156df768cd33", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554-edit2_JINvBLdZtu.avif?updatedAt=1768418161880&ik-s=f7aab0442db7752f74d6e004a8ea447db9f06272", objectTop: false },
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08867_Ca88j7gUu.avif?updatedAt=1768418161024&ik-s=fcb2d35591c1e3c8aaefb46c0a843d1157d9fd7b",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08942-2_h2Y5BC2EZ.avif?updatedAt=1768418161302&ik-s=ba67363e01a6500dcdaccef91d1232512cfad0aa",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09223-2_mywVXgfoA.avif?updatedAt=1768418161279&ik-s=ecc091213259103d6f239a9d1dea11a9fb27a0d9",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09322-3_87AaZDg7G.avif?updatedAt=1768418161145&ik-s=f1b461ed90a1dac9914db42a5f2abc382b1f979b",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_YXsDOh2xZ.avif?updatedAt=1768418032988&ik-s=7574e7cc4bbbaed6f35e40b8778902caacb96fe5",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987-Edit-538_akGBZ2tDt.avif?updatedAt=1768418002602&ik-s=06c4f952ee159c7df92bf1b927d5870fdc5bece6", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02516-133_sptL_j7Ir.avif?updatedAt=1768418003007&ik-s=6080f398260c3ec47a5a5c3fc1e252de469f413f",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_SAWiT_yJw.avif?updatedAt=1768417968690&ik-s=88efc3a5010417730b2fb7f48264456491b2be32",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_VzLOJb1RX.avif?updatedAt=1768417968649&ik-s=7d93d0025bd373953c0b2aec4915161e25c76736", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_QxnPI292X.avif?updatedAt=1768418207216&ik-s=08ab566f42af083a128454a520af752efd4b549c", objectTop: true },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_CNVpHuUUR.avif?updatedAt=1768418383993&ik-s=5938e66ae05250117773aa57e0f01fe18868780e", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00291-Edit_Bh40-gc3l.avif?updatedAt=1768418383953&ik-s=861fc3f31095b62f6bd6a543835e19d1631d3dfb",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01750-Enhanced-NR-Edit_wfexUfy9X.avif?updatedAt=1768418432059&ik-s=fc110db3af68c179d46b4728520266cd9c6f7991",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394-Enhanced-NR_SBIsc2Ad2.avif?updatedAt=1768418450785&ik-s=2d097335f0570653257b00b8c77b87954ad863e4",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05705-2_VRCSjKmEJ.avif?updatedAt=1768418475102&ik-s=ae66a19c5066c955e3023040f296efb6572cd561",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09320-Enhanced-NR_cGtliFYK9.avif?updatedAt=1768418501488&ik-s=a8f4bf157d21c08848ee4f51b0b862b331dcba51", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08296_aRAMvMoD5K.avif?updatedAt=1768418933645&ik-s=e7035ce09413ec57fdc713f6c88c66bd4558d110",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_m7tt94_Nb.avif?updatedAt=1768658287338&ik-s=735d6f3922c4fc1d64148461c7ea0161f5ca07c0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08489_nUuVH6wToF.avif?updatedAt=1768418933779&ik-s=0da346db0a90c6704d540e876c008459afbaefe9",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_xQzLTIS_Ve.avif?updatedAt=1768418788883&ik-s=8218a6ac0f1ae302fa960516cb32ef6f41ebb934",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01162_wBAQ_L6sDf.avif?updatedAt=1768418790443&ik-s=d0343dd0d3fcf812a165b3950a4a41da6368e808",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00667-2_T8gXsP4AS.avif?updatedAt=1768418789805&ik-s=caef79f40b6a0b7c7d64e6ef0d56dfe78079b70a", objectTop: false} ,
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL--5_wGkLq4BUQ0.avif?updatedAt=1768418787700&ik-s=26ea212d9bc1002e43a3ad3e36183f43b2ff6078",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03957_KmaS8vsyc.avif?updatedAt=1768600231493&ik-s=c6176b32b8487083b6dd842186cb23733fd724ac",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05007_mxowdZbpL.avif?updatedAt=1768418873094&ik-s=e4d66a7e9b25a5bac872258c77d9b28edf7b14b0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-3_d5HNK7fHy.avif?updatedAt=1768418903765&ik-s=b9742991d11c511f8bc4ebe8c57831b2ad66ed4a",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06567__IcSMN8LA.avif?updatedAt=1768418904173&ik-s=212d9476e6a57e7c4d39186df72226187c6e1a7e",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197_m2Ef-1U7Y.avif?updatedAt=1768419282660&ik-s=bc33f3fd1d0467b99de44eeb4f6ae3a32e1aaadb",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9183-3_FiI79mFwDx.avif?updatedAt=1768419282928&ik-s=9a08ce0aa3077896668eeb6347ca96139f1d2ae8",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9188-3_B7Imd18iBF.avif?updatedAt=1768419282738&ik-s=421b94334c8b77d747b53ad7b0572d4ec5f448e8",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-132_WUdor3DLV.avif?updatedAt=1768419252823&ik-s=487f69918f011852ab3002687a24aa8d465d38fd",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-109_e_nouMTiS.avif?updatedAt=1768419252639&ik-s=ff43a600ccfec69f9d142b54743221ebbefeb229",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_VquUXqy3xA.avif?updatedAt=1768419349578&ik-s=bb78b6ae28e57c21516abae8b5ad13d3b20ef891",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02460-2_YwzOUtX4M.avif?updatedAt=1768419349976&ik-s=ab80b1d99dfa60ca610318b87b37a4d1d3e78f4b",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_QHgZ6tY7u.avif?updatedAt=1768419312233&ik-s=af0507a8d661c6f128e17bbcc2e778af2de3f380", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04317_jk7rHzFB6.avif?updatedAt=1768419312938&ik-s=cc74fb84bfd94f4550280378ad44ab35fe3b1832",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04883-2_4bubo2Esv.avif?updatedAt=1768419515491&ik-s=9d963f511a033e1f06d5866dff89e282fa404c01",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04773-Edit_gK74Y6WNW.avif?updatedAt=1768419515358&ik-s=45d4c6fffcc06694ac45fd2045c51de2bbb93059",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL02669_coaahaoWS.avif?updatedAt=null&ik-s=896840391d93dae9dff92cef509977e81f5741f0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-08010_YygoCYWu0.avif?updatedAt=1768418977812&ik-s=a256bd5cdbdaefcb9fa51570c75e51a01e62923a",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL03435-Edit-2_f9pSg0Pl4G.avif?updatedAt=1768418542903&ik-s=39242fef058d5533d9e64f4a9ff6269229527e4e",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05623-2_yO7xS17cnd.avif?updatedAt=1768418977914&ik-s=03a85555bed5ea18aa3b06f3b756eee71755e6b0",
];

const heroPhotos = [
  "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_qH1Q7rsxk.avif?updatedAt=1768344210783&ik-s=d1a5a9c39aff0f046d5c665f6e4af4953cd02d0d", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_uwzfn3cso.avif?updatedAt=1768344348897&ik-s=5c4467cf85e2369fdee752c1d2bd719d323945e0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_f1IkJTveI.avif?updatedAt=1768417165173&ik-s=d8fd3cc9063dc56f4a5037784048c081c0279d6e",
    "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_bGF2DC9o1.avif?updatedAt=1768344465709&ik-s=9df6cbc602ee9283eba9234cef5ce38b596bb2d1",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554-edit2_JINvBLdZtu.avif?updatedAt=1768418161880&ik-s=f7aab0442db7752f74d6e004a8ea447db9f06272", objectTop: false },
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08867_Ca88j7gUu.avif?updatedAt=1768418161024&ik-s=fcb2d35591c1e3c8aaefb46c0a843d1157d9fd7b",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09223-2_mywVXgfoA.avif?updatedAt=1768418161279&ik-s=ecc091213259103d6f239a9d1dea11a9fb27a0d9",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09322-3_87AaZDg7G.avif?updatedAt=1768418161145&ik-s=f1b461ed90a1dac9914db42a5f2abc382b1f979b",
    "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_YXsDOh2xZ.avif?updatedAt=1768418032988&ik-s=7574e7cc4bbbaed6f35e40b8778902caacb96fe5",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_VzLOJb1RX.avif?updatedAt=1768417968649&ik-s=7d93d0025bd373953c0b2aec4915161e25c76736", objectTop: false },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_QxnPI292X.avif?updatedAt=1768418207216&ik-s=08ab566f42af083a128454a520af752efd4b549c", objectTop: false },
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_CNVpHuUUR.avif?updatedAt=1768418383993&ik-s=5938e66ae05250117773aa57e0f01fe18868780e", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01750-Enhanced-NR-Edit_wfexUfy9X.avif?updatedAt=1768418432059&ik-s=fc110db3af68c179d46b4728520266cd9c6f7991",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394-Enhanced-NR_SBIsc2Ad2.avif?updatedAt=1768418450785&ik-s=2d097335f0570653257b00b8c77b87954ad863e4", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05705-2_VRCSjKmEJ.avif?updatedAt=1768418475102&ik-s=ae66a19c5066c955e3023040f296efb6572cd561",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09320-Enhanced-NR_cGtliFYK9.avif?updatedAt=1768418501488&ik-s=a8f4bf157d21c08848ee4f51b0b862b331dcba51", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08296_aRAMvMoD5K.avif?updatedAt=1768418933645&ik-s=e7035ce09413ec57fdc713f6c88c66bd4558d110",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_m7tt94_Nb.avif?updatedAt=1768658287338&ik-s=735d6f3922c4fc1d64148461c7ea0161f5ca07c0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08489_nUuVH6wToF.avif?updatedAt=1768418933779&ik-s=0da346db0a90c6704d540e876c008459afbaefe9",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_xQzLTIS_Ve.avif?updatedAt=1768418788883&ik-s=8218a6ac0f1ae302fa960516cb32ef6f41ebb934",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01162_wBAQ_L6sDf.avif?updatedAt=1768418790443&ik-s=d0343dd0d3fcf812a165b3950a4a41da6368e808",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00667-2_T8gXsP4AS.avif?updatedAt=1768418789805&ik-s=caef79f40b6a0b7c7d64e6ef0d56dfe78079b70a", objectTop: false},
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL--5_wGkLq4BUQ0.avif?updatedAt=1768418787700&ik-s=26ea212d9bc1002e43a3ad3e36183f43b2ff6078",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03957_KmaS8vsyc.avif?updatedAt=1768600231493&ik-s=c6176b32b8487083b6dd842186cb23733fd724ac",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05007_mxowdZbpL.avif?updatedAt=1768418873094&ik-s=e4d66a7e9b25a5bac872258c77d9b28edf7b14b0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-3_d5HNK7fHy.avif?updatedAt=1768418903765&ik-s=b9742991d11c511f8bc4ebe8c57831b2ad66ed4a",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06567__IcSMN8LA.avif?updatedAt=1768418904173&ik-s=212d9476e6a57e7c4d39186df72226187c6e1a7e",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197_m2Ef-1U7Y.avif?updatedAt=1768419282660&ik-s=bc33f3fd1d0467b99de44eeb4f6ae3a32e1aaadb",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9183-3_FiI79mFwDx.avif?updatedAt=1768419282928&ik-s=9a08ce0aa3077896668eeb6347ca96139f1d2ae8",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9188-3_B7Imd18iBF.avif?updatedAt=1768419282738&ik-s=421b94334c8b77d747b53ad7b0572d4ec5f448e8",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-132_WUdor3DLV.avif?updatedAt=1768419252823&ik-s=487f69918f011852ab3002687a24aa8d465d38fd",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-109_e_nouMTiS.avif?updatedAt=1768419252639&ik-s=ff43a600ccfec69f9d142b54743221ebbefeb229",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02460-2_YwzOUtX4M.avif?updatedAt=1768419349976&ik-s=ab80b1d99dfa60ca610318b87b37a4d1d3e78f4b",
    { url: "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_QHgZ6tY7u.avif?updatedAt=1768419312233&ik-s=af0507a8d661c6f128e17bbcc2e778af2de3f380", objectTop: true },
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04883-2_4bubo2Esv.avif?updatedAt=1768419515491&ik-s=9d963f511a033e1f06d5866dff89e282fa404c01",
    "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04773-Edit_gK74Y6WNW.avif?updatedAt=1768419515358&ik-s=45d4c6fffcc06694ac45fd2045c51de2bbb93059",
    "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL02669_coaahaoWS.avif?updatedAt=null&ik-s=896840391d93dae9dff92cef509977e81f5741f0",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-08010_YygoCYWu0.avif?updatedAt=1768418977812&ik-s=a256bd5cdbdaefcb9fa51570c75e51a01e62923a",
    "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05623-2_yO7xS17cnd.avif?updatedAt=1768418977914&ik-s=03a85555bed5ea18aa3b06f3b756eee71755e6b0",
]


const allPhotos = getPhotos();

export const HOME_PHOTOGRAPHER_IMAGES = photographerImages;
export const HERO_IMAGES = heroPhotos;

export const HOME_DESIGNER_IMAGES = designerImages;

export const HOME_FEATURED_PHOTOS = featuredUrls
 .map((url) => allPhotos.find((p) => p.url === getDevImageUrl(url)))
  .filter((photo): photo is Photo => !!photo);