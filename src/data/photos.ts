export interface Photo {
    id?: string;
    url: string;
    title?: string;
    category: 'landscape' | 'portrait' | 'event' | 'black-and-white' | 'animal' | 'architecture' | 'client' | 'cars' | 'street' | 'various' | 'travel';
    camera: string;
    tags: string[];
    date?: string;
    place?: string;
    titleKey?: string;
    placeKey?: string;
    blogPostId?: string;
    objectTop?: boolean;
}

export const photoData: Photo[] = [
//2020 
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2020/DSC-006_etxrT-csp.avif?updatedAt=1768648548488&ik-s=49ef1189b32c9e49adbd4fc276b467b72d3eaea8",
        "title": "Osowa",
        "category": "portrait",
        "camera": "Nikon",
        "tags": [
            "portrait",
            "session",
            "forest",
            "nature",
            "black-and-white"
        ],
        "date": "2020-08-08",
        "place": "Osowa"
    },

//2020 random
//2020 mobile
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2020/IMG_20201225_124421_5R6ZjKUbOf.avif?updatedAt=1768648609647&ik-s=64677ef0b5b42bd5c47cd25554b19c45354505bf",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2020-12-25",
        "place": ""
    },

//2021
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9171_Y5vdroAoF.avif?updatedAt=1768420783213&ik-s=4a348ca4ed0dfeac6107704e38f9b6d7742e1351",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "people",
            "travel",
            "sunset",
            "nature",
            "landscape"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9178_dtEWkBLCD.avif?updatedAt=1768420783115&ik-s=a0c32153d56f8e41c0f16a5f35001bc7a34d194a",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "travel",
            "nature"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9183-3_FiI79mFwDx.avif?updatedAt=1768419282928&ik-s=9a08ce0aa3077896668eeb6347ca96139f1d2ae8",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "landscape",
            "travel",
            "forest"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9188-3_B7Imd18iBF.avif?updatedAt=1768419282738&ik-s=421b94334c8b77d747b53ad7b0572d4ec5f448e8",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "landscape",
            "travel",
            "nature"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },   
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197_m2Ef-1U7Y.avif?updatedAt=1768419282660&ik-s=bc33f3fd1d0467b99de44eeb4f6ae3a32e1aaadb",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "people",
            "travel",
            "nature",
            "landscape"
        ],
        "date": "2021-05-01",
        "place": "Leba",
        "blogPostId": "1"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197-2_-h9WHwt2y.avif?updatedAt=1768419282116&ik-s=fbbddb89e336bdaef70d62b0d4477828c32462df",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "people",
            "travel",
            "nature",
            "landscape"
        ],
        "date": "2021-05-01",
        "place": "Leba",
        "blogPostId": "1"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9281_KGrCrvi2X.avif?updatedAt=1768419282995&ik-s=91fa09bc300bf316b76cd5c29a61eb80ff249def",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "nature",
            "landscape",
            "travel",
            "people"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },
        {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9291-3_RlVz2BLBq.avif?updatedAt=1768419282853&ik-s=904ed760e9a4bbec3fc05bdddc35296459daf6c5",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "people",
            "travel",
            "sunset",
            "nature",
            "landscape"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9301-2_7wGEDrWMy.avif?updatedAt=1768420782833&ik-s=b6e2512c931046faf8b4cf3d1d88993073f7f42d",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "forest",
            "nature",
            "travel"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9303-Edit_wQr2xozK4.avif?updatedAt=1768419282601&ik-s=2a6bedbbc0a7a405b4bb5671403ee4212a4db830",
        "title": "Leba - Travel",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "landscape",
            "travel",
            "nature"
        ],
        "date": "2021-05-01",
        "place": "Leba"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-14_6YdULUkja.avif?updatedAt=1768419251731&ik-s=2236d9086ddc1295fea6283ea7372439f8e30b2e",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-07-04",
        "place": "Olowianka",
        "blogPostId": "2"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-29_EJt75y2LGn.avif?updatedAt=1768419252724&ik-s=d4a552edf982399de5798d3d80fdbda26378f978",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "abstract",
            "street"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-35_biooUhwQdY.avif?updatedAt=1768419252524&ik-s=9c5730bcbd1636c4033d5ddcf6fe791092c4a1c5",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "people",
            "street",
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-37_1_SlETXaR.avif?updatedAt=1768419251431&ik-s=652c23558d74cbf47cbc799192519af14278b94e",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "street",
            "people",
            "architecture",
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-51_X9y-Vnosd.avif?updatedAt=1768419252686&ik-s=8669fbde172794a56e1b332cfcad9c1f8e72e32d",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban",
            "wildlife",
            "street"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-55_BL9Utb53aQ.avif?updatedAt=1768419252791&ik-s=cc42cab0fa7d500268f8168b742ac40537cbdfe7",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "street",
            "flora",
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-71_2mCtpIL8_.avif?updatedAt=1768419252287&ik-s=b6272c4952bd1f92ac0723016908585f8e022443",
        "title": "Urbex2",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban",
            "street",
            "people"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-73_pw4TcZgP6k.avif?updatedAt=1768419252812&ik-s=26bfe84a0143725e5f3efbe89f6d3489480ae48c",
        "title": "Urbex",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various"
        ],
        "date": "2021-07-04",
        "place": "Olowianka"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-109_e_nouMTiS.avif?updatedAt=1768419252639&ik-s=ff43a600ccfec69f9d142b54743221ebbefeb229",
        "title": "Urbex",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "nature",
            "flora",
            "forest"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-132_WUdor3DLV.avif?updatedAt=1768419252823&ik-s=487f69918f011852ab3002687a24aa8d465d38fd",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "architecture",
            "minimal"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-137_6rJBQEP5kr.avif?updatedAt=1768419252698&ik-s=a8ac9b0842bbe92081e11c142511106a9275085a",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-162_hRovAvNaVw.avif?updatedAt=1768419252630&ik-s=6089e177a020ad3ec89730af7c2759ca2bc49bad",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-169_sQOCr_ltS.avif?updatedAt=1768419252335&ik-s=7d55375f31162bf1a18b1078896350c410dc8185",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-182_ftXNOGRm8N.avif?updatedAt=1768419252754&ik-s=2bc8edc22de240f857cd567976c918467ca5e896",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-188_GHHKHAk0Gd.avif?updatedAt=1768419253015&ik-s=7249940e9a46d7c6e94cd6e9393f928196555096",
        "title": "Urbex2",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban",
            "people"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-193_6Qht-8rYfG.avif?updatedAt=1768419252934&ik-s=23e7f65de1660675e5e5422c261f095e1d390fbd",
        "title": "Urbex2",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "urban",
            "people"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-214_okNLK3Faa.avif?updatedAt=1768419252983&ik-s=47966a20cb5b211cf3e8e4c279ea4d4ac235af48",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "abstract"
        ],
        "date": "2021-07-04",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-215_NZOl6QdTB.avif?updatedAt=1768419252610&ik-s=a1598827da6ec90c198c8f98b3247cd7302e3daa",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "abstract"
        ],
        "date": "2021-07-04",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-217@0.75x_IuQtdj-2F.avif?updatedAt=1768419251325&ik-s=69f69ac8669cad289c7558a91d187e3d278f139e",
        "title": "Urbex2",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "model",
            "portrait",
            "night"
        ],
        "date": "2021-07-04",
        "place": "Rusocin"
    },
      {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_VquUXqy3xA.avif?updatedAt=1768419349578&ik-s=bb78b6ae28e57c21516abae8b5ad13d3b20ef891",
        "title": "Jarmark",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "people",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02319-2_8g8TT5S1T.avif?updatedAt=1768419350113&ik-s=b8e99da784f241d6b39f766d3cf220f61d292efd",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "night",
            "street"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02364-2_ljMOJo10DL.avif?updatedAt=1768419350146&ik-s=d5257e3e5bd5b264caaa08bcb0757bd3e2273353",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "street",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02401-5_iVcw30Ijh.avif?updatedAt=1768419350124&ik-s=b3730b5a6b13e4a4b11e895a516795b6ef6f54c6",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02403-Edit_8j2EAI93FN.avif?updatedAt=1768419350042&ik-s=5232d36d1f1c0b03b5e1ce1d10362c9fae21b531",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "street",
            "black-and-white"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02408-2_jyaSdug23.avif?updatedAt=1768419349974&ik-s=d64907ab17221fc5073b88fb5ef389395b0824ce",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "street",
            "night",
            "black-and-white"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02411_jEzYThGJ_.avif?updatedAt=1768419349910&ik-s=26fe9829a51d0ca980b05c42b8d8bbbc63715710",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "street",
            "night",
            "black-and-white"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02425-2_5rom123bw.avif?updatedAt=1768419349950&ik-s=d22bc960986f518dec40980a4b4dcbffc130b8b9",
        "title": "Jarmark",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "architecture"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02430-3_nOpQOnpf4q.avif?updatedAt=1768419349960&ik-s=0293d04a637fbe5d4b0b609c2d555d057145051e",
        "title": "Jarmark",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "architecture",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02434-2_thiL5s14t.avif?updatedAt=1768419350218&ik-s=7f700509e98eaedc0533594989b8ce16f0a346cd",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "people",
            "street",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02460-2_YwzOUtX4M.avif?updatedAt=1768419349976&ik-s=ab80b1d99dfa60ca610318b87b37a4d1d3e78f4b",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "car",
            "people",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04078-Edit_7J3GWQlES.avif?updatedAt=1768419312257&ik-s=c98fac40cb7109a579a124c1d4f8bea4bdd2b6b1",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "session",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04091-Edit_OSO_cPm0yq.avif?updatedAt=1768419312696&ik-s=a453baa154420c99e33e101465473d01eea680bc",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "session",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04159_gRrT85VdtG.avif?updatedAt=1768419312661&ik-s=bbb87ccae6fe2db13f232e5cadbd844290a9397b",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "black-and-white",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04185-Edit_Hp_-RbbfkO.avif?updatedAt=1768419312772&ik-s=08e6bb3ee238983dc0cc5e7a41e874d11579f78b",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "model",
            "black-and-white",
            "session"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04193-2_2EnTP3Wlck.avif?updatedAt=1768419312910&ik-s=f74e9002b2164d32ad721a4a727d6aba9b111c18",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "black-and-white",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_QHgZ6tY7u.avif?updatedAt=1768419312233&ik-s=af0507a8d661c6f128e17bbcc2e778af2de3f380",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-10-08",
        "place": "Politechnika Gdanska",
        "blogPostId": "4"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_QHgZ6tY7u.avif?updatedAt=1768419312233&ik-s=af0507a8d661c6f128e17bbcc2e778af2de3f380",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "black-and-white",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk",
        "blogPostId": "4"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04282-2_-pz6ldcJph.avif?updatedAt=1768419312520&ik-s=baa025f1bae81c0812ccf9a3d381dce30a22b05b",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "session",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04285_VtxeF_oAr.avif?updatedAt=1768419312763&ik-s=22ca3d7fe4dfc808d5d4041030956dda8de93634",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "session",
            "model",
            "black-and-white"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04316_zRNOk_6qdV.avif?updatedAt=1768419312999&ik-s=59cf24384a8dda7fe728eb34742a69c1ba77fa7d",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04317_jk7rHzFB6.avif?updatedAt=1768419312938&ik-s=cc74fb84bfd94f4550280378ad44ab35fe3b1832",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04381-Edit_IxrQhaISc.avif?updatedAt=1768419312555&ik-s=0ed25a6526e09883f1238aa4f431268e32596803",
        "title": "Allan - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "model",
            "session"
        ],
        "date": "2021-10-08",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04394-3_E7rk92VbR.avif?updatedAt=1768419379228&ik-s=e50420323621da1b483f195c0821e8932272c35b",
        "title": "",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "architecture",
            "black-and-white"
        ],
        "date": "2021-10-08",
        "place": "Politechnika Gdanska"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04765_p32P0QGDW.avif?updatedAt=1768419515131&ik-s=5d62bd026e15c323490dcaad1133fa826fdefaf2",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04767-Edit_58uAEGhHt.avif?updatedAt=1768419514740&ik-s=1e80915b1b1f13256bb2e8360ff53295df8fd735",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04773-Edit_gK74Y6WNW.avif?updatedAt=1768419515358&ik-s=45d4c6fffcc06694ac45fd2045c51de2bbb93059",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "abstract",
            "street"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04823-Edit_uWdeH6cPVB.avif?updatedAt=1768419515845&ik-s=49ab58717b8d9c13ed4aa5439e7bef98adc1da5f",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04881-2_QFsTHcLXd.avif?updatedAt=1768419515829&ik-s=dcbdb53b5c4de75f3e677190a029fbc253c62e8d",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04883-2_4bubo2Esv.avif?updatedAt=1768419515491&ik-s=9d963f511a033e1f06d5866dff89e282fa404c01",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04886_Z_INsGlf7.avif?updatedAt=1768419515412&ik-s=7de9aa6aedbdb884cebca0abf3639da530245d7d",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04889_dLNM4-eWu.avif?updatedAt=1768419515414&ik-s=c600e035ceb6076193fe83853ba1931e4ebf9ccf",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
//2021 Random
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8125-15_79o4OsZ0-.avif?updatedAt=1768419486837&ik-s=1d791e92a271ef985cad68c8b65f240c7efd7abf",
        "title": "",
        "category": "street",
        "camera": "Canon EOS 350D",
        "tags": [
        ],
        "date": "2021-01-13",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8332-2_BDXQY_QbV.avif?updatedAt=1768419488268&ik-s=deba898b7a109aed827ddc215a7d0e3adfe409c8",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "nature",
            "landscape",
            "night"
        ],
        "date": "2021-01-17",
        "place": "Sopot"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8369-6_g5raekuOB.avif?updatedAt=1768419486451&ik-s=3be11d01bdf7f308b3b5052d085b5bb4497b9f55",
        "title": "",
        "category": "street",
        "camera": "Canon EOS 350D",
        "tags": [
        ],
        "date": "2021-01-17",
        "place": "Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8409-Edit-2-1_gjPssP6_zZ.avif?updatedAt=1768419488965&ik-s=e1a60f841c3260138006c196c0e45e5dead50608",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-01-18",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8409-Edit-2_VqlC2UAcX.avif?updatedAt=1768419487606&ik-s=cc826e424ae3f3171363351c527b4144d0dcfebd",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-01-18",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_9506-2_5_e7Hb-iE.avif?updatedAt=1768598810187&ik-s=4b12894e201cd36f78eb8cc2658fc99d81cca9b0",
        "title": "Urbex1",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "abstract",
            "night",
            "street"
        ],
        "date": "2021-05-14",
        "place": "Wrzeszcz"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/JEL00769-Edit_0gnGPx75_.avif?updatedAt=1768598969121&ik-s=d836f230a5d741195b9a0921773617b5b09f972d",
        "title": "Mario",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-07-24",
        "place": "Jelitkowo"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8598-2_L-xOxjXNLq.avif?updatedAt=1768419486556&ik-s=4ac502e437d610a2889925ab9f4ad63a5363b628",
        "title": "Suprise",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-04-10",
        "place": "Jastarnia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/20210625-70_ixApv6hyB.avif?updatedAt=1768599823556&ik-s=e0c8f7f88e8e6ce10b4e2e087c6acba96375d370",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "event"
        ],
        "date": "2021-06-25",
        "place": "Osowa"
    },
   
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8867-Edit-1_bp6mhFgreA.avif?updatedAt=1768419486518&ik-s=693e167c7072dd26ab0ecda441ad8f88d50ca8a6",
        "title": "Sopot",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "abstract",
            "street",
            "night"
        ],
        "date": "2021-04-24",
        "place": "Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/random/IMG_8960_uR-98tL83.avif?updatedAt=1768758755709&ik-s=c0020bc983bbc9123cdf216221f1d9842ee20370",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "street",
            "people",
            "action",
            "sports"
        ],
        "date": "2021-04-28",
        "place": "Gdansk Ergo Arena"
    },
     //2021 mobile
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/mobile/IMG_20210116_200844_ItK6MWQJY.avif?updatedAt=1768419417511&ik-s=0edef0528689bc0989879c3ca0308cbe7e67fb61",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "snow",
            "night"
        ],
        "date": "2021-01-16",
        "place": "Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/mobile/IMG_20210419_171244_B1eHpbdKW.avif?updatedAt=1768419417886&ik-s=6878f1e819d4dfa74d10f5286003b8e1922db397",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "abstract",
            "food",
            "water",
            "lifestyle"
        ],
        "date": "2021-04-19",
        "place": "Sopot"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/mobile/IMG_20210202_221914_Z7k3UYicB.avif?updatedAt=1768419417478&ik-s=1c15069b4e58a1b2f6f425c0b14beed4dc5694cd",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "landscape",
            "nature",
            "snow",
            "night"
        ],
        "date": "2021-02-02",
        "place": "Sopot"
    },

//2022
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08235-2_L1HHvU1I8.avif?updatedAt=1768418932317&ik-s=b27666f8817038fbae46e4eb894a784d98949d7b",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08242_WFQ5tQH-Gp.avif?updatedAt=1768418933664&ik-s=40ab879280222835a978ec0c126fe444a364479e",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "people",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08250-2_eS19Rfuy8n.avif?updatedAt=1768418932860&ik-s=045353622266f0216f6d13e4f053c85102c47ef6",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08267_5ahbtoDeH.avif?updatedAt=1768418932456&ik-s=5f3604116cc57354289f4bf00833bb5345311806",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "abstract",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08271-2_UgU7VqpdN.avif?updatedAt=1768418933333&ik-s=e31fbc48d3ddb0d8b563953bbd63cfedbb90dfe0",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08296_aRAMvMoD5K.avif?updatedAt=1768418933645&ik-s=e7035ce09413ec57fdc713f6c88c66bd4558d110",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08307-2_Qu6M4FAa8J.avif?updatedAt=1768418933684&ik-s=31024ca21cdeb2a48dda14be8227cfd334891956",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08318_De-RN6dTgS.avif?updatedAt=1768418933429&ik-s=71fc920842a2f9c30e103c439177481033653261",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "car",
            "event",
            "people"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08363_nFbhnhvjy.avif?updatedAt=1768418932931&ik-s=60dd0ebebedd4a7c75f038fdd4cf72119bf8f6f1",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08413-2_r7ENwZ58zS.avif?updatedAt=1768418933650&ik-s=c6a0960d26879f9a2cb66c3b976182ed4296953e",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "car",
            "event"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08416_0vu2MdUST.avif?updatedAt=1768418933267&ik-s=9ff92a7d65a86ac28efc503f4ba7546678242c1e",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "people",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08467-2_8DEvp38d7S.avif?updatedAt=1768418933654&ik-s=f96cf741b34f22df6cba3109070af4857da4bad5",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08471_1bGrk7gx0f.avif?updatedAt=1768418933458&ik-s=bddba9cd9d2939e0dc65d04b4cb7b8634415968d",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08472-2_MHfzzIS1T.avif?updatedAt=1768418933120&ik-s=2002212a08940434ae344f911749af4f4a6b63f2",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08475_GeyDRCDw9U.avif?updatedAt=1768418933610&ik-s=acb1b1775c198763de7cfb2d2e4ca8dc99d3702e",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08489_nUuVH6wToF.avif?updatedAt=1768418933779&ik-s=0da346db0a90c6704d540e876c008459afbaefe9",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "people",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08491_4ZXU9ytbZB.avif?updatedAt=1768418933752&ik-s=6cc76d5dc2c39d98271d8fa6505799e3cb88fe2c",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "people",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08779_1hAWbmTNYN.avif?updatedAt=1768418933498&ik-s=4e43c74a73c20f4843ca47c5888c24b9f3972c55",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car",
            "action"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08914-2_XA1S3_LkK.avif?updatedAt=null&ik-s=53ad8464a287afa9f37533f20ede0a124d1f7be7",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "action",
            "car",
            "event"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_m7tt94_Nb.avif?updatedAt=1768658287338&ik-s=735d6f3922c4fc1d64148461c7ea0161f5ca07c0",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "action",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
 
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09046_03sjox-lua.avif?updatedAt=1768418933547&ik-s=fd1cb55e8a4b2b67655c872d8ae4b55b300055c6",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "event"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09051_YnT9OOx9Ay.avif?updatedAt=1768418933102&ik-s=167aef377d26f91f4c47630d9e30e02521055a2c",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09083-2_uAw9-TgXt.avif?updatedAt=1768418933086&ik-s=f2d2eaca84f724de9bb619a3add78a38be09c155",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09088_x20SbMhjxe.avif?updatedAt=1768418933605&ik-s=05a688808fdbe7bb55a962a1d01e14d9ffeaa349",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "documentary",
            "people"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09092_DQdTWpTA3D.avif?updatedAt=1768418933419&ik-s=b57503da4587ebb691bf6117dfa2aa8461dae7e8",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "documentary"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09103_Bumbnu_1-.avif?updatedAt=1768418933482&ik-s=2184085dcd549047bea88bd495ee1da7357a899e",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "vehicle",
            "people",
            "portrait"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09111_oFugSWbIV.avif?updatedAt=1768418932971&ik-s=69c1a8e7f74e3449107df226a987d3242de12421",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
             {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-8352-2_wpKylyNzP.avif?updatedAt=1768418933230&ik-s=0723d5723196e9f8cdc205f5ae820ebe1e2cb385",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "car",
            "minimal",
            "event"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena",
        "blogPostId": "6"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-8434-2_nolHWz_3Qf.avif?updatedAt=1768418933680&ik-s=ebe62c905c9b014d895a1f995397c2cc73119cd4",
        "title": "MotoShow - Event",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "car"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL--5_wGkLq4BUQ0.avif?updatedAt=1768418787700&ik-s=26ea212d9bc1002e43a3ad3e36183f43b2ff6078",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "travel",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00178_HRjI2OHryd.avif?updatedAt=1768418790113&ik-s=5d577abf8f33f4ec0d89537ecbda4444723980a6",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "travel",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00203-3_9mpkKqVUnJ.avif?updatedAt=1768418789540&ik-s=67f2116d7cb2e4dded8195a527e0a3a10e7c8830",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "street",
            "water",
            "animal",
            "sunset"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00226-3_2f75m11IL.avif?updatedAt=1768418788697&ik-s=919a4eb5311de55cea21c56e6ccc45c23a54b0fd",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "street"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00227-2_TNvnKIBql.avif?updatedAt=1768418790656&ik-s=610873b2537dc812d51ea80325c39d680d6987b6",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00228-2_3BVAdZ1Cy.avif?updatedAt=1768418790309&ik-s=62cf153e66962cc047c442b9548f593866752329",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00245_AKl-Rp41Ro.avif?updatedAt=1768418789956&ik-s=8d68b8cdb2e0b663d9e7471a1f4eea28dc95db41",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "architecture",
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00290_FRN0qBxvd.avif?updatedAt=1768418788243&ik-s=d76ba471374a4a15ef99e91ed34c152777886770",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "architecture",
            "city",
            "travel",
            "street"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00349-2_7oPo-a1I_.avif?updatedAt=1768418789125&ik-s=7a50eb0a035a5e8c32ea214bfd17b406170cb920",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "architecture",
            "black-and-white",
            "travel",
            "street",
            "night"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00408_BEsLtG6X7T.avif?updatedAt=1768418789618&ik-s=8e9a011d23ae85967d450b9c2793d420567ecee7",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "architecture",
            "night"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00410_o2eX4t79q.avif?updatedAt=1768418789395&ik-s=e0723d807786865a3fed6a1519bab5f8f7adbf24",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "people",
            "travel",
            "street",
            "architecture",
            "vehicle"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00455-2_Op2mSzQCK.avif?updatedAt=1768418789507&ik-s=427e80d64b420b68dc42bfff020f950287d20e68",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "travel",
            "night"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00504_dx7OQiih0.avif?updatedAt=1768418789371&ik-s=45b1b7c09c6bcb9e7dce14ea083b159b846fd2f6",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel",
            "street",
            "night"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },

{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00580_RiU5_tNADY.avif?updatedAt=1768501307131&ik-s=5a66fd039ad00d047260ed8cf3f122e67361a59b",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "abstract",
            "night",
            "travel",
            "street",
            "black-and-white"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00667-2_T8gXsP4AS.avif?updatedAt=1768418789805&ik-s=caef79f40b6a0b7c7d64e6ef0d56dfe78079b70a",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "people",
            "street",
            "city",
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berllin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00694_4biAy_Ovx.avif?updatedAt=1768418789223&ik-s=1570e3623097cc0938efe78341d3f5403d0fbeb0",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "travel",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00932_GSMX10H9o.avif?updatedAt=1768418788913&ik-s=41b4b517ae1a7c15fd26be20193e38917a8df0bf",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01132-2_Nt034nhBG.avif?updatedAt=1768418788171&ik-s=e65c0e93428a65db2e9f290f2d701cd818adc81f",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "model",
            "street",
            "travel",
            "black-and-white"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01134-2_TGIjytdcfr.avif?updatedAt=1768418790428&ik-s=c3606d5242bdf911c3181fba89c04511d4144ac7",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "architecture",
            "travel",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01162_wBAQ_L6sDf.avif?updatedAt=1768418790443&ik-s=d0343dd0d3fcf812a165b3950a4a41da6368e808",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel",
            "architecture"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
       {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01167_ftE2tq5DZV.avif?updatedAt=1768418789637&ik-s=fe608da024c160e92e3670855d905530996ffa7a",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel",
            "architecture"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_xQzLTIS_Ve.avif?updatedAt=1768418788883&ik-s=8218a6ac0f1ae302fa960516cb32ef6f41ebb934",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel",
            "architecture",
            "black-and-white"
        ],
        "date": "2022-08-08",
        "place": "Berlin",
        "blogPostId": "7"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01310-5_sIsQ8xtB98.avif?updatedAt=1768418790027&ik-s=8c14b1c3cd5f24619d9e697df0a2d073590d667b",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "travel",
            "nature",
            "street"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01386_gnc_Wr5jO.avif?updatedAt=1768418789387&ik-s=0bd2a8c8c0e1b49b24308b60dcf01bb4c263586e",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "people",
            "architecture",
            "street"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01561_NqfQ2MpUoO.avif?updatedAt=1768418789539&ik-s=7044878ce3c95a7ecd568e8c864ea91604321140",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "travel",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01572_Ac6s0dT1om.avif?updatedAt=1768418790102&ik-s=45286791578583aba2537a13c72079612cb46a62",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "car",
            "travel",
            "street"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01614-2_CBn-DHL70Q.avif?updatedAt=1768418789990&ik-s=2c7d857153e8ddc00b3433aa9d49900e4e92f310",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel",
            "street"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01705-2_LRYdl6C_y.avif?updatedAt=1768418788437&ik-s=6462220bec556c5eb25cb5495995c1f604b81648",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "architecture",
            "black-and-white"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01734_GXkgaEqL3.avif?updatedAt=1768418790320&ik-s=c7b4d8576bf9f4badadf82f7443c4de689c6070d",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "travel",
            "street",
            "people"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01744-3_pGTx1jhvVG.avif?updatedAt=1768418789895&ik-s=ec4767ed3d36e0d4be7c1f6bf56493924a744b11",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01853-2_hGQH6Jv1E.avif?updatedAt=1768418790327&ik-s=c65d699b37b2ec392c8748a94e11e3ffa9398343",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "street",
            "people",
            "nature"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01995-2_eTilx8kAZ.avif?updatedAt=1768418787682&ik-s=6d52a53127bc6a9b87b75eb00aceba96a449786d",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "travel",
            "documentary"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-1466-EDIT4_MwIs5J3VGI.avif?updatedAt=1768418787857&ik-s=4310f51ed0d09fc5ccffa6820df6a88de53ae16a",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city",
            "night",
            "people",
            "black-and-white",
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berlin",
        "blogPostId": "7"
    },
      {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-1657-2_M24wePzr3c.avif?updatedAt=1768418790057&ik-s=c6f2b45c9d671b103c2a9679bb502c136c579fea",
        "title": "Berlin - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "travel",
            "architecture",
            "vehicle"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03601_1Vut9LW9O9.avif?updatedAt=1768418873700&ik-s=36c068a9afd4aaec5fe9a18dbfa3a989bb37f71f",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "water"
        ],
        "date": "2022-08-28",
        "place": "Gdansk",
        "blogPostId": "8"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03918_DxCUE6ERnY.avif?updatedAt=1768418873407&ik-s=ad255026887c6a23ac937df8b1ba4d8251d20c47",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "water"
        ],
        "date": "2022-08-28",
        "place": "Gdansk",
        "blogPostId": "8"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03921_-B-u8y0dGE.avif?updatedAt=1768418873351&ik-s=51bfe7255bb5c320a508b763eac35147c879c5eb",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "water"
        ],
        "date": "2022-08-28",
        "place": "Gdansk",
        "blogPostId": "8"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03957_KmaS8vsyc.avif?updatedAt=1768600231493&ik-s=c6176b32b8487083b6dd842186cb23733fd724ac",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "water"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04073_fpzZH44kON.avif?updatedAt=1768418873415&ik-s=93081c96b28d1b79a4f7897ba2ed769b256afcb3",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04078-2_w4vM493BIX.avif?updatedAt=1768418873403&ik-s=9d11aa030e068b496fdabfcda762e0be2f3aba70",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04147-2_Hkbt_WIJX.avif?updatedAt=1768418873350&ik-s=940d98ed0e392a2a1644781faf8e0d3b7807442f",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "black-and-white",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04768_w44rNWkmq.avif?updatedAt=1768418873466&ik-s=777ba42c9b8fe20d0be0355533ae019eea6f99a2",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04857_-46osXaj7.avif?updatedAt=1768418873282&ik-s=d46e0e44bef383f50628e6853d6e2b0e926b20cc",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "street",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04983_qbUbesRsf.avif?updatedAt=1768418873138&ik-s=d7e8610cbea0ec9acfc985a41de148d5d71c166b",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04999_VB7rCsDpt.avif?updatedAt=1768418873127&ik-s=f823623038b95eff0db2845e2d479d9accfd90f2",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05007_mxowdZbpL.avif?updatedAt=1768418873094&ik-s=e4d66a7e9b25a5bac872258c77d9b28edf7b14b0",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05127_3b92D7-8u.avif?updatedAt=1768418873418&ik-s=d52099ba1f11daeca1861abe123d1d717a9c2b80",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05182__cRq_fpbF.avif?updatedAt=1768418873280&ik-s=afa3bed09ccc8b6a81ec3fea6926e7957df92ab5",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "event",
            "people"
        ],
        "date": "2022-08-28",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06224_ZmN3YMKTQS.avif?updatedAt=1768418904581&ik-s=c27188b94ef843bbc5eb39f91bb9c41e39045e83",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "architecture",
            "model"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06242-neo_uYv7keIGRi.avif?updatedAt=1768418904443&ik-s=669525cab6284f41a2ed008e8410d8da6ef2a6ba",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "model",
            "vehicle"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06245-2_75GMDukWJc.avif?updatedAt=1768418904248&ik-s=c7459eb8a87f169bbe5d02dc1fc2bb42c0449de4",
        "title": "Stocznia Magda",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "minimal"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06291_EUM9iLDAWm.avif?updatedAt=1768418904325&ik-s=3b617c5009d25ecf9b87e3371a034b1bb07fbc9d",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street",
            "abstract"
        ],
        "date": "2022-09-24",
        "place": "Gdansk",
        "blogPostId": "9"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06335_Xz78kjUJk.avif?updatedAt=1768418904431&ik-s=fc2b5d4815620dfb5ed144dc74d440d11aabf200",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "urban",
            "model"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06348_ePaRlq3dxR.avif?updatedAt=1768418904348&ik-s=78384212966d10ee944b48b6e618577d5a4d2ab7",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk",
        "blogPostId": "9"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06428-2_uUmE7Gnz70.avif?updatedAt=1768418904371&ik-s=feffa3baa99b7e584e638a6d7a5a13d5235d2ee2",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06443-2_-oZR16Knj.avif?updatedAt=1768418904303&ik-s=a70f9bae759ae9541e51525deda9f8771841a17b",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model",
            "night"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06537-neo_9Dd-myfR32.avif?updatedAt=1768418904431&ik-s=e68ca9fb3b25d6ea5dc7b0e80b3a2b5c63e1f8dc",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "portrait",
            "model"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06563-2_AZLWzIlA1.avif?updatedAt=1768418904274&ik-s=f0b9bd206bf31882284b92e3449da03ffc59bfb2",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "model",
            "portrait",
            "night"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06567__IcSMN8LA.avif?updatedAt=1768418904173&ik-s=212d9476e6a57e7c4d39186df72226187c6e1a7e",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "people",
            "abstract",
            "night"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6193-2_vkcWvOd47R.avif?updatedAt=1768418903709&ik-s=93180fb069c95b147612fff8ab34e0408c1a56d7",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6198-2_X8ZggPuQu.avif?updatedAt=1768418904019&ik-s=492f4bc9af23222a3f1843e46c400378b8f5edef",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6234-2_xjjuHSG7i6.avif?updatedAt=1768418904548&ik-s=aaf5ec3eec1728968e87bf73c82aa217ffbaab88",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model",
            "vehicle"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-2_0boZsZeb-o.avif?updatedAt=1768418904432&ik-s=5f940931def9d11ca7d9c44142b7f0bff7a322ae",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-3_d5HNK7fHy.avif?updatedAt=1768418903765&ik-s=b9742991d11c511f8bc4ebe8c57831b2ad66ed4a",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "model",
            "street"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6364-2_wS34hBaJ9.avif?updatedAt=1768418904320&ik-s=6ea9a01806a4ee5adfed84d0d2d286da19f60bde",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2022-09-24",
        "place": "Gdansk Stocznia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6420-2_wliGfBNWla.avif?updatedAt=1768418904374&ik-s=46ba16210ea345c8c7710d98c2955433c17d614a",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model",
            "night"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6424-2_BMBTwIkH1.avif?updatedAt=1768418904189&ik-s=d6f95f6432b6eb0cfda9df679718552d54e02a01",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6444+2_ZJn4_IpFQj.avif?updatedAt=1768418904533&ik-s=6f5b01d764b2453995ba63469bd5873a79aedff0",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model",
            "night"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6454-2_e1Jz4dxEqh.avif?updatedAt=1768418904443&ik-s=760be33fb3b3e67ee4d3bb246bcb252bb295ac0d",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "night",
            "model",
            "abstract",
            "street"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6483-2_Hkp2pZ543R.avif?updatedAt=1768418904284&ik-s=1391ddc2ba99900d501f3a30d307e3ece998ff93",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model",
            "night",
            "street"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6576-2_yyqjlM11E.avif?updatedAt=1768418903370&ik-s=84ef56eb3e44938a08da147b1987ba9b6cc5d72c",
        "title": "Stocznia Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
//2022 random

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05623-2_yO7xS17cnd.avif?updatedAt=1768418977914&ik-s=03a85555bed5ea18aa3b06f3b756eee71755e6b0",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-09-04",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05711_UBbEobYnlW.avif?updatedAt=1768418977550&ik-s=ff863f6bf30774bec6484d1a7848cc3ec949ea8f",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-09-07",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05725_gxXu8OZZn.avif?updatedAt=1768418977651&ik-s=f09cda8ebe27058f0877ef051e110b6e497e8405",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-09-07",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05828-2_O6OMes42pB.avif?updatedAt=1768418978421&ik-s=1571d86d92ddfae2903d12b95dcc00f78f860d82",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-05-11",
        "place": "Gdansk"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-05849_dBeBry_Y23.avif?updatedAt=1768418977950&ik-s=c76c9fc3b9398e123a951152b406ce842e9304c6",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-05-11",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-06694_htNV86-V8.avif?updatedAt=1768418977609&ik-s=720d163fd039340655d46bb304ffb7abbed96a9d",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-06-23",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-06728-1_qY2z5QX_s.avif?updatedAt=1768418977218&ik-s=62d387e38c8387040a00a60caaf1b0937cbaf80d",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-06-23",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-07985_uz4PJG-YG.avif?updatedAt=1768418977777&ik-s=61e1b05bdb5a6bab111af080aa7697c3981178ab",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-08-07",
        "place": "Gdansk"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-07998_2L19Rznxf.avif?updatedAt=1768418977654&ik-s=330d993293a4a86f2cf5c85b3e018c6c1c95c812",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2022-08-07",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-08010_YygoCYWu0.avif?updatedAt=1768418977812&ik-s=a256bd5cdbdaefcb9fa51570c75e51a01e62923a",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "documentary"
        ],
        "date": "2022-08-07",
        "place": "Gdansk, Plenum"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-08064_uDTSarq8kD.avif?updatedAt=1768418977674&ik-s=9696afe585f6b30e5ed633f0b1e319d54d14ae53",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "documentary"
        ],
        "date": "2022-08-07",
        "place": "Gdansk, Plenum"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-09366_mL1PLlY-X.avif?updatedAt=1768418976709&ik-s=7247793ad33e7e7f6da29916995213a88b276d6d",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "documentary"
        ],
        "date": "2022-07-22",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-09570-2_DES6gxGZZo.avif?updatedAt=1768418977698&ik-s=8880aae5cf1accf3065a28f7568068df6e0ebded",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2022-07-23",
        "place": "Jelitkowo"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-09976_QGjOl2cI8.avif?updatedAt=1768418977193&ik-s=f082867f8d08310fe69e200b2abae39d497dbffc",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2022-07-23",
        "place": "Jelitkowo"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-5512-2_YVLF2mcNJO.avif?updatedAt=1768418977746&ik-s=217a3386744339f1f8955878744aff7f5416e430",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2022-09-04",
        "place": "Jelitkowo"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL08061-Edit-1_OhaT4k_ZyE.avif?updatedAt=1768418978077&ik-s=a231c89514c37b6b40f55ed7159cd290f26d3e45",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "city"
        ],
        "date": "2022-12-09",
        "place": "Sopot"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-07129_JLSSSu2Rk.avif?updatedAt=null&ik-s=d9796577905da690035ccc035de6284346253227",
        "title": "Wiktor",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2022-10-21",
        "place": "Gdansk Osowa",
        "blogPostId": "0"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-07389_hfxgxo_sHEgq8V7-.avif?updatedAt=null&ik-s=a4b824a7f9d07cc6de2048b102757e2082f03bc9",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "people",
            "street",
            "city"
        ],
        "date": "2022-06-30",
        "place": "Oliwa"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/random/JEL-07765_pQuyDg_Uk.avif?updatedAt=null&ik-s=e1e500478315ab70582dc755117dd08163109d41",
        "title": "Rogale",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "food"
        ],
        "date": "2022-10-11",
        "place": "Osowa"
    },
//2022 mobile
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220715_222530_dzuIBbk13.avif?updatedAt=1768419083723&ik-s=91300395ae87ae621523a8400a49489b6986bf50",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people"
        ],
        "date": "2022-07-15",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220715_225050_5v2xW4HjI.avif?updatedAt=1768419083519&ik-s=cf9ddeff98ad84241789305d7cfc95600ea1e7a6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people"
        ],
        "date": "2022-07-15",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220715_230543__01_q702Dr1TVx.avif?updatedAt=1768419084336&ik-s=4c9bf2763b8a251a1b9bb5728bf4360eec532e80",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people"
        ],
        "date": "2022-07-15",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220715_231446_wnUnb0EVD.avif?updatedAt=1768419083596&ik-s=1ff94db1020dd2964d1a933bce5dbdc61c2225e5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city"
        ],
        "date": "2022-07-15",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220719_202755_N0qWA4EGyz.avif?updatedAt=1768419084095&ik-s=139c2fbb1b27175f8a633c1aa1f733c4d21386c9",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "city"
        ],
        "date": "2022-07-19",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220720_003836_poqAAPyLEu.avif?updatedAt=1768419084399&ik-s=d54b9c05bd8b6a036393b4ae944619efcb3f558c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "abstract",
            "city"
        ],
        "date": "2022-07-20",
        "place": "Zaspa, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220720_225208_xrMCNolitl.avif?updatedAt=1768419083987&ik-s=5375bb5c47cd35617a54c62904d4949f8eedf196",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "animal",
            "macro"
        ],
        "date": "2022-07-20",
        "place": "Osowa, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220720_225313_y-FFODRht6.avif?updatedAt=1768419084176&ik-s=75678184d34a98702d25f398448d96c362b79536",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "macro",
            "animal"
        ],
        "date": "2022-07-20",
        "place": "Osowa, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220801_214743_V_KXYubAc.avif?updatedAt=1768419083973&ik-s=18521194781e74b2d0fefa4a4b9c14bf4e282f74",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "sky",
            "city"
        ],
        "date": "2022-08-01",
        "place": "Matarnia, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220827_093008_vIoCOuylIu.avif?updatedAt=1768419084134&ik-s=5ce3068212f79db572465afc1e694feb71afc4e5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "flora",
            "city",
            "macro"
        ],
        "date": "2022-08-27",
        "place": "Osowa, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220901_210107_SU2dBi1Oz.avif?updatedAt=1768419084321&ik-s=391e83e09c05732ff697dadb45869c21a82fba75",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "food",
            "people"
        ],
        "date": "2022-09-01",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220901_214825_HAWbz-2n47.avif?updatedAt=1768419084066&ik-s=275c73df9f4971768656986b665bf2f5beecd40c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "event",
            "people"
        ],
        "date": "2022-09-01",
        "place": "Elektrykow, Gdansk"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220901_220648_PLubW5W5z.avif?updatedAt=1768419083788&ik-s=675b694704c9fcd0c37bfb8cfe489120e168e595",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "people",
            "event",
            "street",
            "night"
        ],
        "date": "2022-09-01",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220901_221207_cUWdn7k1T7.avif?updatedAt=1768419084726&ik-s=9fd1ccc19c869aa09867e6b64f67cc4ce301b24c",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "night",
            "lightpainting"
        ],
        "date": "2022-09-01",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220901_221218_fS-q3X6uR7.avif?updatedAt=1768419084412&ik-s=dee5fd4ae455e624feab616b153785630400de28",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "night",
            "lightpainting"
        ],
        "date": "2022-09-01",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220901_224311_oM9Es9T66K.avif?updatedAt=1768419083959&ik-s=a8921738542adc93f44dd9867e970aa736a547d1",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "people",
            "model",
            "night",
            "city",
            "portrait"
        ],
        "date": "2022-09-01",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220903_193407_gMDMskUhKK.avif?updatedAt=1768419084534&ik-s=108c85c38e0440a90b9179adf6b4bb569d56c1e0",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "sunset",
            "city",
            "architecture"
        ],
        "date": "2022-09-03",
        "place": "Osowa, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220910_223528_1RijOsypta.avif?updatedAt=1768419084164&ik-s=7cdafe28f7aacc4762cbe664a0c5e37ef79f79f4",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "lifestyle",
            "food",
            "water"
        ],
        "date": "2022-09-10",
        "place": "Osowa, Gdansk"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220911_203659_YDV-ZofYj.avif?updatedAt=1768419083994&ik-s=1d4293d4a639eff818d915018ee264bf03a65884",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "sky",
            "night",
            "black-and-white",
            "abstract"
        ],
        "date": "2022-09-11",
        "place": "Osowa, Gdansk"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220915_180434_ECTyqvD_lR.avif?updatedAt=1768419084404&ik-s=0482dd1d3c44bcc367d5db403b840a766ba00206",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "people",
            "city"
        ],
        "date": "2022-09-15",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220915_180436_Qj7m4l87hL.avif?updatedAt=1768419084318&ik-s=30efafced43ca3c8eefdeb27c44df4e8ac6880fe",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2022-09-15",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20220915_184616_CocxvC44V.avif?updatedAt=1768419083939&ik-s=5cb0cca092a519e1203bdba80c72a9e244ac78d5",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2022-09-15",
        "place": "Matarnia, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20221001_205712_wcegLswJT3.avif?updatedAt=1768419084035&ik-s=bf02bd40d5a89fd7e7a981dbea435e3e3c398037",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night"
        ],
        "date": "2022-10-01",
        "place": "Elektrykow, Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20221014_132736_ZSTSbO3HlB.avif?updatedAt=1768419084357&ik-s=7acdb6af1fb5fe44ba9314d8149c465810261bf8",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "water",
            "lifestyle"
        ],
        "date": "2022-10-14",
        "place": "Zatoka, Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20221014_135708_NrIOk9AuXV.avif?updatedAt=1768419084330&ik-s=812086e1e3b0d7a677e9eeefd873566a7dd3a370",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "vehicle",
            "lifestyle"
        ],
        "date": "2022-10-14",
        "place": "Zatoka, Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20221014_135710_fljXDcX3q.avif?updatedAt=1768419084371&ik-s=9cbf396449aca68bd221b7ce135b23242b75b143",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "water",
            "lifestyle",
            "sunset",
            "vehicle"
        ],
        "date": "2022-10-14",
        "place": "Zatoka, Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/mobile/IMG_20221217_004112_ydyYvdXfYE.avif?updatedAt=1768419084564&ik-s=aa9782251a9227098a119630c649c3531bca2b6f",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "night",
            "snow",
            "car",
            "nature"
        ],
        "date": "2022-12-17",
        "place": "Osowa, Gdansk"
    },
//2023
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00071_ZAr-jEkET.avif?updatedAt=1768418384003&ik-s=800f9e2150427ea701dd7d2eec551c895aa432db",
        "title": "Jeziorne nimfy",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "forest",
            "session",
            "model"
        ],
        "date": "2023-04-22",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00088_FrMNxsC0hL.avif?updatedAt=1768418383942&ik-s=7d50cf9a84ebd7406d17f98845d6c3e8e84bd206",
        "title": "Jeziorne nimfy",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "forest",
            "session",
            "model"
        ],
        "date": "2023-04-22",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00151_uvT_chPk0.avif?updatedAt=1768418383757&ik-s=07b6c9c97290242899e6a696460cc0b8c0c9f8bd",
        "title": "Osowa",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "nature",
            "forest"
        ],
        "date": "2023-04-22",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00245-Edit-2_kKPgxwlMJ0.avif?updatedAt=1768418383982&ik-s=5499a9a9e4833edce362fdd75a8d746efef1c9e3",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2023-04-22",
        "place": "Osowa"    
    },
       {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00291-Edit_Bh40-gc3l.avif?updatedAt=1768418383953&ik-s=861fc3f31095b62f6bd6a543835e19d1631d3dfb",
        "title": "Jeziorne nimfy",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "forest",
            "session",
            "model",
            "water",
            "sunset"
        ],
        "date": "2023-04-22",
        "place": "Gdansk Osowa",
"blogPostId": "10"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00375-Enhanced-NR_95mUAIXe_.avif?updatedAt=1768418383851&ik-s=0cb93bee673056ff6bb8284f2579829838fa5dd0",
        "title": "Jeziorne nimfy",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "forest",
            "session",
            "model"
        ],
        "date": "2023-04-22",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00388-Edit_Wez0THEVG.avif?updatedAt=1768418384279&ik-s=d35a659c9866b08a1be935d066bb04c8d001a116",
        "title": "Jeziorne nimfy",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "forest",
            "session",
            "model"
        ],
        "date": "2023-04-22",
        "place": "Gdansk Osowa"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00475_VGR5P5wKT.avif?updatedAt=1768418384064&ik-s=7fdc67967a973be182824d27363b51ea28aa989a",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "nature",
            "forest"
        ],
        "date": "2023-04-22",
        "place": "Osowa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00499-2_041Oh87Qm.avif?updatedAt=1768418384177&ik-s=7724c9a20bc1be1c73dbedcbcca080752566235e",
        "title": "Jeziorne nimfy",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "forest",
            "session",
            "water",
            "animal",
            "model",
            "sunset"
        ],
        "date": "2023-04-22",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_CNVpHuUUR.avif?updatedAt=1768418383993&ik-s=5938e66ae05250117773aa57e0f01fe18868780e",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model",
            "forest",
            "nature"
        ],
        "date": "2023-04-22",
        "place": "Osowa",
        "blogPostId": "10"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01387-Edit_sqO0kLBFk.avif?updatedAt=1768418432367&ik-s=d75031eae674f72cef9dc0e0f78344fd4cfe923c",
        "title": "Kaszubski Urbex",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "urban",
            "black-and-white"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01462_dFNvvNTHi.avif?updatedAt=1768418431796&ik-s=a761fbc97afc526120c083e2bfe0cde9ea3a0b97",
        "title": "Urbex",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "urban",
            "black-and-white"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01498-2_C9RZzct_s.avif?updatedAt=1768418431761&ik-s=05a35788e9b24eccc5405fd6e7f10f5af77008ef",
        "title": "Kaszubski Urbex",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "urban"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01508-3_PlL3z273xQ.avif?updatedAt=1768418432179&ik-s=1924b59eb578980464cb88d21ef5292d7d5f9e91",
        "title": "Urbex",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "urban"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
      {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01514_nkp_-D-lQ.avif?updatedAt=1768418432210&ik-s=d51694b06611b1d92a34b78d68823d9c83dd91dd",
        "title": "Urbex",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "people"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01599_nohmmCfph.avif?updatedAt=1768418432248&ik-s=6846cd81c01593f593dc3d95331fa659d042ee97",
        "title": "Kaszubski Urbex",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "urban"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01600_hJyNbM-sj2.avif?updatedAt=1768418432158&ik-s=ed83d91fce0100a041a6aca457c8db0407d5d53b",
        "title": "Kaszubski Urbex",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "black-and-white",
            "urban"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01691-2_Ej3xtaxzE1.avif?updatedAt=1768418431961&ik-s=66fc159271adfc9604fd46d95407ccb689ce68aa",
        "title": "Urbex",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "urban"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01699-2_GCbsYAYa9E.avif?updatedAt=1768418431905&ik-s=d1fa16695c43019ee9409a07c879f062d8cd2e6d",
        "title": "Kaszubski Urbex",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "urban",
            "black-and-white",
            "portrait",
            "abstract"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01750-Enhanced-NR-Edit_wfexUfy9X.avif?updatedAt=1768418432059&ik-s=fc110db3af68c179d46b4728520266cd9c6f7991",
        "title": "Urbex",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "nature",
            "forest"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01810-2_3AlfUMe5I.avif?updatedAt=1768418432179&ik-s=cf8fd93853f594db689c4f71ef7317be61cf49a9",
        "title": "Urbex",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "nature",
            "minimal"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01832-2_at_JGLe0g.avif?updatedAt=1768418431684&ik-s=60259268fec94ff71dc9d3e306d3f9f66d28841c",
        "title": "Urbex",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "minimal",
            "nature"
        ],
        "date": "2023-05-18",
        "place": "Kolano"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL01957_GRF_1ivz4.avif?updatedAt=1768418450571&ik-s=abc66ab8efd5b8868c7385e6d9ddec3ff3cc4970",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2023-05-21",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394-Enhanced-NR_SBIsc2Ad2.avif?updatedAt=1768418450785&ik-s=2d097335f0570653257b00b8c77b87954ad863e4",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model",
            "street"
        ],
        "date": "2023-05-21",
        "place": "Gdynia Marriott",
        "blogPostId": "12"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05550-2_jMTeCrcdv.avif?updatedAt=1768418474651&ik-s=e00f5c5bd996ae8c8f1390adcb0ba0030f896920",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05551-2_b03I9ixMol.avif?updatedAt=1768418475113&ik-s=ef67e220f8a84cac7a8aed32f3b1a7402997c4f1",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05683-2_4xg1kNKfC.avif?updatedAt=1768418474949&ik-s=dfb80dcb4bfa014c2d6433125c60db27d8620d1f",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "model",
            "event"
        ],
        "date": "2023-06-30",
        "place": "Osowa",
        "blogPostId": "13"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05684-2_qxRHWPQ78.avif?updatedAt=1768418474282&ik-s=1d8d9affacfb4877026d99f5450bc31230625355",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05705-2_VRCSjKmEJ.avif?updatedAt=1768418475102&ik-s=ae66a19c5066c955e3023040f296efb6572cd561",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05756-2_zCASIKzxs.avif?updatedAt=1768418474984&ik-s=a753e7493b42b52f47dda725aaf99fd2c9b732d0",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "event",
            "people"
        ],
        "date": "2023-06-30",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05769-2_qJRxjDkG4.avif?updatedAt=1768418475044&ik-s=57b0fa5e9369588d24d3b4a5a3e29f765d9927c5",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05845-2_skU_vg1Pe.avif?updatedAt=1768418475035&ik-s=0311e9d7ab5fbf2047fbc8b458a6d65473a6a13b",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05852-2_1wUzRRw3QP.avif?updatedAt=1768418475054&ik-s=ac8b74697f76f08d56b44cb60b13c4125e340549",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05854-2_aKVkn_vPiv.avif?updatedAt=1768418475076&ik-s=21cac69db0caedc67a521b46a6c20ad2809c6d14",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white"
        ],
        "date": "2023-06-30",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05871-2_j3H9_VQht.avif?updatedAt=1768418475105&ik-s=25b5c9055630cd53b098943d8f0a02be6103139b",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05926-2_q9mTXDIM_.avif?updatedAt=1768418475055&ik-s=31fc7734bd1e70d6d435f61ecfd58ecb107096cc",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05953-2_Uu6qBd4NR.avif?updatedAt=1768418475180&ik-s=37fa6266688ea4e7c6c4e26a1f3f19ab13df845b",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "event"
        ],
        "date": "2023-06-30",
        "place": "Osowa",
        "blogPostId": "13"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL06048_RB7OgX_jY.avif?updatedAt=1768418474211&ik-s=9024b33e79f66608fecbc642330038a45f06bdd5",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "party"
        ],
        "date": "2023-06-30",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09320-Enhanced-NR_cGtliFYK9.avif?updatedAt=1768418501488&ik-s=a8f4bf157d21c08848ee4f51b0b862b331dcba51",
        "title": "Wiktoria Murat",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "urban",
            "portrait",
            "model"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09331-Enhanced-NR_EaPMOMYV5.avif?updatedAt=1768418501349&ik-s=9aed476695779c2581571c5fd217c0fd07d9fcc6",
        "title": "Wiktoria Murat",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "urban",
            "black-and-white",
            "session",
            "model"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09391-Enhanced-NR_Uw7giJJCv.avif?updatedAt=1768418501072&ik-s=03f29d032cc709b8bb833e347843c5c3a0f27000",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2023-08-31",
        "place": "Hotel Murat"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09558-Enhanced-NR_5aO972Eyr.avif?updatedAt=1768418501143&ik-s=bea26423961134d262d8c847b6fc8285d68a3204",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street",
            "model"
        ],
        "date": "2023-08-31",
        "place": "Hotel Murat"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09574-Enhanced-NR_Cuia3d-sT.avif?updatedAt=1768418500703&ik-s=274385558eaacfe626411de551dbd369d2b6190e",
        "title": "Wiktoria Murat",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "urban",
            "model",
            "session"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09583-Enhanced-NR-Edit_kweTmAVcC.avif?updatedAt=1768418501359&ik-s=0cd13c3d5c0040a81d40908da0f22bb959e62682",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model",
            "street"
        ],
        "date": "2023-08-31",
        "place": "Hotel Murat"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09634-Enhanced-NR-Edit_8IfFIs9Gq.avif?updatedAt=1768418501218&ik-s=62bd391cbd02ec34c61aa959777070d622899272",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street"
        ],
        "date": "2023-08-31",
        "place": "Hotel Murat"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL02080_dhrcbk_Ptyy5TVjU.avif?updatedAt=null&ik-s=2a51c87e0c9a20b188e08869138d7015cf8c5ac9",
        "title": "Turkey",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "mountains",
            "nature"
        ],
        "date": "2023-09-28",
        "place": "Turcja, Alanya"
    },
      {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL00445_5ElBxfBj4.avif?updatedAt=null&ik-s=39eb1c914425dec3c6bf55bda293be5a61e00652",
        "title": "Turkey",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "flora",
            "street",
            "architecture",
            "people"
        ],
        "date": "2023-09-28",
        "place": "Turcja"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL00339-Edit_ZSSc3-ni8.avif?updatedAt=null&ik-s=056564d4ead0afff87ed22ae4df31d00d021611f",
        "title": "Turkey",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "fashion",
            "nature"
        ],
        "date": "2023-09-28",
        "place": "Turcja"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL02921_Oj4BviU5R.avif?updatedAt=null&ik-s=ef21ba528fa5b4f7ab5d7aaa2f63136f0a2f9235",
        "title": "Turkey",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "fashion",
            "nature"
        ],
        "date": "2023-09-28",
        "place": "Turcja Pamukkale"
    },
//2023 random
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL-05263_HP7Gf08fXm.avif?updatedAt=1768418542320&ik-s=bf1012c244610ed27324d6bb86914cfc096da3a2",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "people",
            "street",
            "urban",
            "city"
        ],
        "date": "2024-01-01",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL-05326_Bx4Mv_f8H.avif?updatedAt=1768418542309&ik-s=659bf0a034ef2ed9c4c42053401707b068fa4947",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "people",
            "street",
            "urban",
            "city"
        ],
        "date": "2024-01-01",
        "place": "Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL-234_GzXCwpcK9.avif?updatedAt=1768598603079&ik-s=8ae21fdd15d0695fcf27b1a6cacc22653ba892db",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model"
        ],
        "date": "2023-05-03",
        "place": "Osowa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL-339_sgQVPFoBL.avif?updatedAt=1768599527594&ik-s=43932eb98e339de94a81de33ec48b6dc648ca676",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2023-05-03",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL01038-Edit_skhSDUrTwD.avif?updatedAt=1768418543096&ik-s=1770552bd9608aed32e8a744825ebbdc4aad58cd",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "people",
            "street",
            "urban",
            "city"
        ],
        "date": "2023-05-14",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL01312_kahOI7svM.avif?updatedAt=1768587769119&ik-s=769d9a4cc2e8fdb382a10b3ad44bd8dccec2715e",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "architecture"
        ],
        "date": "2023-05-14",
        "place": "Gdansk 100cznia",
        "blogPostId": "0"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL01335_zw-EwJeAY.avif?updatedAt=1768418542289&ik-s=8092b33de2ab5e88d76beeaaa656d1fdbcbf3041",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "architecture"
        ],
        "date": "2023-05-14",
        "place": "Gdansk 100cznia",
        "blogPostId": "0"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL03435-Edit-2_f9pSg0Pl4G.avif?updatedAt=1768418542903&ik-s=39242fef058d5533d9e64f4a9ff6269229527e4e",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "architecture"
        ],
        "date": "2023-10-22",
        "place": "Gdansk Osowa",
        "blogPostId": "0"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08160_uzBMM1ati.avif?updatedAt=1768587769366&ik-s=c90c3036e5fb5b856a7253430b4b3d9781327c81",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "street",
            "night"
        ],
        "date": "2023-01-31",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08299_HSFuXEt3o.avif?updatedAt=1768587769327&ik-s=1296f99d25bdae5f575f7cbbcb82527d2734dc9a",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "street",
            "night"
        ],
        "date": "2023-08-10",
        "place": "Taborz"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08347_0gcax3JGS.avif?updatedAt=1768418543185&ik-s=279c5d75d021c12262f7a3dfc0bbeda54c375aff",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "animal"
        ],
        "date": "2023-08-10",
        "place": "Taborz"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08353-Enhanced-NR_KJNk2tnAG.avif?updatedAt=1768418541878&ik-s=af02585dd2efcd4825916056ba07610b847f882a",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "animal",
            "macro",
            "nature"
        ],
        "date": "2023-08-10",
        "place": "Taborz"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08355_Lc1mE4WOV.avif?updatedAt=1768587769331&ik-s=9336001422f5c325aed2064bbf0b84bac7534d9f",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "animal",
            "macro",
            "nature"
        ],
        "date": "2023-08-10",
        "place": "Taborz"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08884_KpU1uQVK-.avif?updatedAt=1768418542374&ik-s=9d5faa7ef06e0fb8f38d6e669139018ce6201f05",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "travel"
        ],
        "date": "2023-08-15",
        "place": "Torun"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL08891_r8rGpXYrfA.avif?updatedAt=1768418542368&ik-s=d5a4183b8c91d09d2976d7e39d7ff54b25bc85f2",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "travel",
            "architecture",
            "city"
        ],
        "date": "2023-08-15",
        "place": "Torun"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL09773-Edit_FarD-NxcR.avif?updatedAt=1768587437158&ik-s=e6b5ddfbabcee9f3609edf57e34d63dc43ef04d8",
        "title": "Pieklo",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "minimal",
            "landscape"
        ],
        "date": "2023-04-10",
        "place": "Pieklo"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/random/JEL09638_TVKxbOZeZ.avif?updatedAt=null&ik-s=91afffca5f81b8c65f918c12c5460da7d72f1f7a",
        "title": "",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "nature",
            "animal"
        ],
        "date": "2023-04-07",
        "place": "Gdansk Olowianka"
    },

//2023 mobile
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230705133403_loV_NMu7L.avif?updatedAt=1768418562593&ik-s=d1442773a1e35625212e6cbca55a4213a2790a29",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "macro",
            "flora"
        ],
        "date": "2023-07-05",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230706195653_kkQW6zHdy5.avif?updatedAt=1768418567202&ik-s=acf928b67cbc2597cc40faba238a6e760aab2fff",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract",
            "sky"
        ],
        "date": "2023-07-06",
        "place": "Oliwa OBC"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230708175144-2_27E8vkXnK.avif?updatedAt=1768588729584&ik-s=73769569b2dce1054e824e5dfbd320ebd1276b67",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "city",
            "architecture"
        ],
        "date": "2023-07-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230708175144_5Us79J11I.avif?updatedAt=1768588729623&ik-s=8353909707f6f8b99e43e75f841b301ad1d70a3f",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2023-07-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230714230926_5vi0o9qOH.avif?updatedAt=1768418564989&ik-s=91889de28c6d8e502f78ed491f21b7f5dbe774fe",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sky",
            "sunset"
        ],
        "date": "2023-07-14",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230716175424_on6zYTrV2d.avif?updatedAt=1768418566580&ik-s=d974f6a203295fb81a92a33eeee57f64793f678a",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "car",
            "city",
            "nature"
        ],
        "date": "2023-07-16",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230803123838_ESmgnryihg.avif?updatedAt=1768418566419&ik-s=3d38015a9b0c366c821ebfadd83e399b3cf30e80",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "landscape",
            "city",
            "sky"
        ],
        "date": "2023-08-03",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230810114508_bir1aqHjNN.avif?updatedAt=1768418565550&ik-s=0095a12a5d12ce6158edf233b0e3789fa292a2f5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "abstract"
        ],
        "date": "2023-08-10",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230819213702_KsSJhryah.avif?updatedAt=1768418565058&ik-s=26401ca4528e29415ddb7453bd0026f249fcea26",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "rain",
            "city"
        ],
        "date": "2023-08-19",
        "place": "100cznia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230819215405_n61pZGO4v.avif?updatedAt=1768418564495&ik-s=057f823fe39d791235b3c8582c956c01b12c488c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-08-19",
        "place": "W4"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20230831131401x_ch5lRaYe2.avif?updatedAt=1768588729301&ik-s=d2ff104e6f867b3fc0851ade15e398a079afc98e",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "city",
            "nature"
        ],
        "date": "2023-08-31",
        "place": "Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20231231184216_d4hsaYPyX.avif?updatedAt=1768418564210&ik-s=aea37260aeb502b2f6f43250f6f86e4b6ad97b2c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "fog",
            "city"
        ],
        "date": "2023-12-31",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG20231231185033_xoAzg69Hr.avif?updatedAt=1768418565944&ik-s=ae18faf108e719abf59ef7a5a9469aa7b3e0c70d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "night",
            "fog"
        ],
        "date": "2023-12-31",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230101_000830_aqQ7LT8VS.avif?updatedAt=1768418563243&ik-s=e76e9cd4963c1a742012de1228e811a826337f82",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "lightpainting"
        ],
        "date": "2023-01-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230101_000930_J2_P8hHdW.avif?updatedAt=1768418562423&ik-s=89ef1e67718624816b951d7ba55434e6b6c46761",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lightpainting",
            "lifestyle",
            "night"
        ],
        "date": "2023-01-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230101_001032_wYeinBqBA.avif?updatedAt=1768418566919&ik-s=3e05fccf619e9cc9fdf3175b28de54f6f9b90e2c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night"
        ],
        "date": "2023-01-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230121_172512_otEODiuEPG.avif?updatedAt=1768418564439&ik-s=bc8a7d4303783e95a63e3e693f4eb453262b9882",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "macro",
            "water"
        ],
        "date": "2023-01-21",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230204_173955_HddV079dTy.avif?updatedAt=1768418566929&ik-s=efd658c361adad9809fb6403983643abf2480c2b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "animal",
            "lifestyle"
        ],
        "date": "2023-02-04",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230330_222312_z7a4LbbRJ.avif?updatedAt=1768418566862&ik-s=19f5d74ba9f323e9939d0d4aaf1e1454b8717ecc",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "fog",
            "vehicle",
            "car",
            "city",
            "architecture"
        ],
        "date": "2023-03-30",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230331_220309_oS2auc70UJ.avif?updatedAt=1768418566623&ik-s=4ceee038e4ce1b7bc8070a513a71dc6290d1dc16",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "vehicle",
            "car",
            "night",
            "fog"
        ],
        "date": "2023-03-31",
        "place": ""
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230401_003438_dTSduFDw_z.avif?updatedAt=1768418566589&ik-s=6af4809131bbef22d8d12f00a908a27af484862e",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city"
        ],
        "date": "2023-04-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230417_090741_leNafHzc0E.avif?updatedAt=1768418564766&ik-s=06b4e2bd49c4af4ae25fedf717ee4f36ca397d06",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "wildlife"
        ],
        "date": "2023-04-17",
        "place": ""
    },
         {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230531_205446.jpg_l2nGcMQDI.avif?updatedAt=1768418564999&ik-s=fbcfa9b7f2489f8bae1512b5a8f8fd73f3b56878",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "lifestyle"
        ],
        "date": "2023-05-31",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230718_100004_cDGTX2XZPv.avif?updatedAt=1768418566038&ik-s=b34e335dac2a30a556832bc43e0cf898a2f86248",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset",
            "sky",
            "city",
            "architecture"
        ],
        "date": "2023-07-18",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230726_140109_t5Vt-9GUp.avif?updatedAt=1768418564893&ik-s=f64a72ddd4884d2a1f48a74555bbc566d236d524",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "flora",
            "macro"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230801_102747_UhVIRqBJr.avif?updatedAt=1768418566328&ik-s=37039215711ef576827c3448ccc0660c33e0111d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people",
            "city"
        ],
        "date": "2023-08-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230804_002813_lV1jCIsYq5.avif?updatedAt=1768418566923&ik-s=748f9644597e54cf90c534141aa973745c4b5c41",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "architecture"
        ],
        "date": "2023-08-04",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230805_000311_IqPmuRpI_I.avif?updatedAt=1768418566653&ik-s=b83512983462068c9d4cc0bf3a22be058d6b3b1e",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2023-08-05",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230817_212516_pJRelPw0v.avif?updatedAt=1768418566198&ik-s=ce3b47633f16d9ce29e7e8afa9139ea20abfb42b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "macro",
            "rain"
        ],
        "date": "2023-08-17",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230817_212516_pJRelPw0v.avif?updatedAt=1768418566198&ik-s=ce3b47633f16d9ce29e7e8afa9139ea20abfb42b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "landscape"
        ],
        "date": "2023-08-17",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230903_223123_xYf9DFw9q3.avif?updatedAt=1768418564702&ik-s=33fd50214a9a255017f84d103aef9b4bdb083254",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people",
            "flora",
            "nature",
            "city",
            "macro"
        ],
        "date": "2023-09-03",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230917_025620__0wAS8uTB.avif?updatedAt=1768418565202&ik-s=81fef22ac7ebe8d0e2ab732f6527e5031edb5268g",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event",
            "people"
        ],
        "date": "2023-09-17",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230917_155207_VN2FNB3g9A.avif?updatedAt=1768418565756&ik-s=50f1cd2ab3775cb6b50a5e4b7526a214d6cd407d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "architecture",
            "city"
        ],
        "date": "2023-09-17",
        "place": ""
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230921_152746_bynsi-53Q-.avif?updatedAt=1768418566437&ik-s=cea290ae231706270519a8ce26ef1821bad45dcc",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
            "wildlife"
        ],
        "date": "2023-09-21",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230921_152754_a6avykUJWh.avif?updatedAt=1768418564860&ik-s=5dff6bef19a1108b369702a947be45be7b4ac844",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "flora",
            "macro"
        ],
        "date": "2023-09-21",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230922_150234_TuKLWlu5co.avif?updatedAt=1768418567137&ik-s=46f54bc91c40d7ba035e8de9ee711a745daf6e3e",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "food",
            "abstract"
        ],
        "date": "2023-09-22",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230928_071128_lle0yZ1FfM.avif?updatedAt=1768418566824&ik-s=5e86201aead4ebbede1cc6dd222a866665763b6b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset",
            "city",
            "people"
        ],
        "date": "2023-09-28",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230928_105936_kfZGdHQVB.avif?updatedAt=1768418566436&ik-s=dd7d6d40064f1ce3e89afc9e7fbd6779b44cb2f4",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "vehicle",
            "black-and-white"
        ],
        "date": "2023-09-28",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20230929_013142__YMVOzSnk.avif?updatedAt=1768418564753&ik-s=648d806b5ad7681b7277eee11228b0a7af5209ed",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "stars",
            "travel",
            "water",
            "nature"
        ],
        "date": "2023-09-29",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231010_084936_bkVevhwVr.avif?updatedAt=1768418563346&ik-s=e331b19d37868d8af43396593f60ca314e98d9d2",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2023-10-10",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231016_195729_3PKdqteyq.avif?updatedAt=1768588729595&ik-s=16b74c7eced24535f859f974be44b007279d16a6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract",
            "nature"
        ],
        "date": "2023-10-16",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231016_201015_7wAJpoNrA2.avif?updatedAt=1768418566667&ik-s=dcb3612b3e0aebade8123472eccd71c0c24e3264",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "nature",
            "abstract"
        ],
        "date": "2023-10-16",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231101_194124_ETSnq4t6l.avif?updatedAt=1768418564680&ik-s=10c2edff582f457921f74b4ecaca6de8cc443b9d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "animal"
        ],
        "date": "2023-11-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231101_194154_eu3mZZFkRO.avif?updatedAt=1768418565819&ik-s=d75cbf0f06fedc50b2504bb21dc7d265a3ad0d6c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract",
            "animal"
        ],
        "date": "2023-11-01",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231101_194158_1SD79-LCz.avif?updatedAt=1768588729602&ik-s=fe66d0bd7459ae44fd265e56ca92f25cbfb3b33d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "sunset"
        ],
        "date": "2023-11-01",
        "place": ""
    },

 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231101_194204_HS8fNjcgkb.avif?updatedAt=1768418565020&ik-s=5065e60c166b172695eac50258f1a13a8ed06b83",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2023-11-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231105_173020_1VA7zOKtQq.avif?updatedAt=1768418566702&ik-s=254388e3da0907075305c5df20238355ed1d6846",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "black-and-white",
            "food",
            "lifestyle"
        ],
        "date": "2023-11-05",
        "place": ""
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231108_021446_3tsPoVU2F.avif?updatedAt=1768418565530&ik-s=616de20aba604cda7114b5c59557c6dc913d9178",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "stars",
            "sky"
        ],
        "date": "2023-11-08",
        "place": ""
    },
        {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231108_021458_xlTSqAS0a.avif?updatedAt=1768418566174&ik-s=65e9a40a70f137ea56178b78faeab9cab19df451",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sky",
            "stars",
            "night"
        ],
        "date": "2023-11-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231108_021510_lTtIJC4S-.avif?updatedAt=1768418565664&ik-s=56a97edf98156e3d21e3c06c7b2dfac04b8da186",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "city",
            "people",
            "nature",
            "night"
        ],
        "date": "2023-11-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231113_180729_HPJbn2rVSL.avif?updatedAt=1768418566838&ik-s=93a6bd2aaef518b718ed5000b46f4624b1770a07",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-11-13",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231118_133655_14H2XmtVm.avif?updatedAt=1768418566784&ik-s=fce9e8d8835b5536687f4d59f7fa5fa06b6551a7",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "flora",
            "abstract"
        ],
        "date": "2023-11-18",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231119_112026_Osxv7MgZGq.avif?updatedAt=1768418565617&ik-s=c72a53734401bd096e9d7f566799d1dd0849a812",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "night",
            "rain"
        ],
        "date": "2023-11-19",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231127_090958_wsrXKPdU7w.avif?updatedAt=1768418567069&ik-s=8b085620ae23515ca45cc4dbf9a799252b950927",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "sunset",
            "snow",
            "nature"
        ],
        "date": "2023-11-27",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231202_090631_2ZTkRga-ZN.avif?updatedAt=1768418565815&ik-s=a5a832817f2706e7652bd83f3c50b99671bbd8af",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city"
        ],
        "date": "2023-12-02",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231229_001832_AOSmY7Lug.avif?updatedAt=1768588729579&ik-s=a4fb89eefd528c384b34b91b93862e8a0cd74b0d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "architecture",
            "city",
            "people"
        ],
        "date": "2023-12-29",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231229_001832_AOSmY7Lug.avif?updatedAt=1768588729579&ik-s=a4fb89eefd528c384b34b91b93862e8a0cd74b0d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "lifestyle",
            "night"
        ],
        "date": "2023-12-29",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/mobile/IMG_20231229_001842_vYeF6hQbtt.avif?updatedAt=1768418564751&ik-s=3dae03fd12d23e955f19304170958d223a518053",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "lifestyle",
            "food"
        ],
        "date": "2023-12-29",
        "place": ""
    },
//2024 
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05880-soft_wAgqAIpYE.avif?updatedAt=1768417910054&ik-s=8c055b5d69b060e0dfa2502e1969801e35fcadf7",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05888-2ed-soft_pHmBQ9t5y.avif?updatedAt=1768417910451&ik-s=78bf2ebb091b6e70b5e66f9462e28a41e6a86ccd",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05898-edit_ybGBXL1ci.avif?updatedAt=1768417910327&ik-s=d3430a6a50a518135ecc2098963d156df768cd33",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05940-edit-soft_izozT6ey1.avif?updatedAt=1768417910131&ik-s=e089f0bd79a815e54745b2f0bb88a9367dbba728",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06210-soft_FkL4XjNsn.avif?updatedAt=1768417910554&ik-s=6bc7f6dd0d5602b95d14e749bf2422f0684ddc0c",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06247-soft_1-upQAfMV.avif?updatedAt=1768417910355&ik-s=6f6143dd7831984ea09ee73a807204e912a6dd2f",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06262-soft_1yyE_SvTF.avif?updatedAt=1768417910316&ik-s=37562dd660a4f31bb37103d6bd80d46cfa74e82d",
        "title": "Karola - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "vintage"
        ],
        "date": "2024-02-25",
        "place": "UG"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06614_IwUbGkYlV.avif?updatedAt=1768418081924&ik-s=555bf7658b073de7ad3e21e2ddbb5c75ef6697fa",
        "title": "Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "night",
            "fog"
        ],
        "date": "2024-03-12",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06622_5E3VM8h2E.avif?updatedAt=1768418082133&ik-s=f394b3efd79fe6f5392503f9c7aac01a44ca10d6",
        "title": "Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "night",
            "fog"
        ],
        "date": "2024-03-12",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06657_FYzklOFFx.avif?updatedAt=1768418081937&ik-s=fd4aded6e6865e17e35f1d04dcca04d42a580c0b",
        "title": "Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "fog",
            "night"
        ],
        "date": "2024-03-12",
        "place": "Gdansk Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06702_hBPQWWJ3f.avif?updatedAt=1768418082114&ik-s=89f959d6d9b10b39a209faff45f6a26d68d1b800",
        "title": "Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "night",
            "fog",
            "street"
        ],
        "date": "2024-03-12",
        "place": "Gdansk Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06762_HW2yEN0_B.avif?updatedAt=1768418082144&ik-s=65b2aefba93be122b9e6f50f0be1dbfe1bd59db5",
        "title": "Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "night"
        ],
        "date": "2024-03-12",
        "place": "Gdansk Osowa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06784_1KY2O18o6.avif?updatedAt=1768418081891&ik-s=0a88995afa7181024e3daddfdd5a052a11cfb3fe",
        "title": "Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "black-and-white",
            "night",
            "fog"
        ],
        "date": "2024-03-12",
        "place": "Gdansk Osowa"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07723_UT17xs7ev.avif?updatedAt=1768418108652&ik-s=49f199d14df4b5bfa1185b5e8a4688030642edde",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07740_2T-n_fU1K.avif?updatedAt=1768418108521&ik-s=63963f5a09d4885d8a7f8d3876ef37bfa7187246",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "landscape"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07741_NxZTUy8K2.avif?updatedAt=1768418108499&ik-s=b7741597d9304b099c770fbdcc4d938bb8f462eb",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07743_Z-T-uRB3ZE.avif?updatedAt=1768418108700&ik-s=cc82bbf05895782ea04e1ad2266570b25235fea2",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07747_FQjXn1Hw2.avif?updatedAt=1768418108466&ik-s=b7571b9e31ba72e2021aa95d13f78f17b6fccf42",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "people"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07770_kktlvost3.avif?updatedAt=1768418108457&ik-s=f678b80686246fa2bf2afd93d23f0a8664c068ef",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "portrait",
            "people"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07773_yCVnMmGRq.avif?updatedAt=1768418108388&ik-s=3f39666eb780870ebffc511db6789b3124cb665f",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "portrait"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07791_zdaC1f5rD.avif?updatedAt=1768418108212&ik-s=1b4d4fe3ed6af24f2c93c4f453d66248acf278c0",
        "title": "Rewia - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08448_IgVjRrISG.avif?updatedAt=1768418161744&ik-s=270d2eb55b00ab9cd201c3300b9a2ec914e6ed0f",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "mountains",
            "landscape",
            "travel"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08482_tCUOCQIH0i.avif?updatedAt=1768418161430&ik-s=864d2d2db42465eaef552a4a974fdbbb59c24101",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "landscape",
            "mountains",
            "forest",
            "travel"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08515-3_S2P0Yex_z.avif?updatedAt=1768418160962&ik-s=2f1c07d7e0f312443dcf2f8720f62c356e3dcba7",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "mountains",
            "travel"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08521-2_wfVuwjUNTc.avif?updatedAt=1768418161365&ik-s=6f5572dbbdc65a74be1d66a348c3089306e47cac",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "mountains",
            "travel"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554-edit2_JINvBLdZtu.avif?updatedAt=1768418161880&ik-s=f7aab0442db7752f74d6e004a8ea447db9f06272",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "landscape",
            "mountains",
            "travel"
        ],
        "date": "2024-04-15",
        "place": "Zakopane",
        "blogPostId": "18"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554-edit3_YmMoFU1Huu.avif?updatedAt=1768418161685&ik-s=726ef031c77657d3a173bb3a1e84b78b0e245025",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "black-and-white",
            "mountains",
            "landscape"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08622_2MfmWeYkgS.avif?updatedAt=1768418161131&ik-s=78d86f9fac144b9264cbe96ee9772c6886f4e737",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "landscape",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08867_Ca88j7gUu.avif?updatedAt=1768418161024&ik-s=fcb2d35591c1e3c8aaefb46c0a843d1157d9fd7b",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "mountains",
            "animal",
            "wildlife"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08895_bRfu-1tYv.avif?updatedAt=1768418161225&ik-s=f42292b23170b57e0b1e2e86cdd09e2d80caa995",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "wildlife",
            "animal",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08942-2_h2Y5BC2EZ.avif?updatedAt=1768418161302&ik-s=ba67363e01a6500dcdaccef91d1232512cfad0aa",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "mountains",
            "abstract",
            "landscape"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09062_99wt--BKU.avif?updatedAt=1768418161374&ik-s=c07e00b5aaa9cb3d8697c33f42420b21fd7ce8ea",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "mountains",
            "documentary"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09071_MxfdqD8Sz.avif?updatedAt=1768418161192&ik-s=e71ff0dd98f4d92efe95a53223d031c1f24eeebd",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "landscape",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09111-2_XeT0wo3HO8.avif?updatedAt=1768418161638&ik-s=61fe4044d04bd8eb4488360bab8269955c511da4",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "portrait",
            "black-and-white",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09189-2_3QNh3iUHoZ.avif?updatedAt=1768418161758&ik-s=0510485810df8db091572919ac05dab7831516a2",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "mountains",
            "black-and-white"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09208_MYIIR9KwS.avif?updatedAt=1768418161614&ik-s=d8709d0274406dfe0c08e5fb486c77eda20c6d93",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09208-2_ovuV4EWSt.avif?updatedAt=1768418161456&ik-s=74c96c59871cdce43a3e5cd0dc652bc269f5e462",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "black-and-white",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09217-2_zOE1BUNx6.avif?updatedAt=1768418161528&ik-s=bc1995e90c89287ec35338c27726d6a4b933dd03",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "black-and-white",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09223-2_mywVXgfoA.avif?updatedAt=1768418161279&ik-s=ecc091213259103d6f239a9d1dea11a9fb27a0d9",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "black-and-white",
            "mountains"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09287-3_B-vy4SvI2.avif?updatedAt=1768418161707&ik-s=bbf4df1ee84509f5287c7e6263728c3e1d34cb44",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "animal"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09322-3_87AaZDg7G.avif?updatedAt=1768418161145&ik-s=f1b461ed90a1dac9914db42a5f2abc382b1f979b",
        "title": "Zakopane - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "animal",
            "black-and-white"
        ],
        "date": "2024-04-15",
        "place": "Zakopane"
    },


    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737-3_jKNHZoLwI.avif?updatedAt=1768418032554&ik-s=20b638157f2bd23e4ab25c5064105e53425716c2",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737_0-tD_BBWT.avif?updatedAt=1768418032770&ik-s=7df14652f5c4d1c0f74dc9628cc974bb78d30a76",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "city"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01743_btV7h0VN5.avif?updatedAt=1768418032733&ik-s=2cbd4289a8d2eb7306c5d1463752df52fb057560",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01749_UZAtHQT5M.avif?updatedAt=1768418032930&ik-s=a7b4525f576a8ad45151110322d61b9caa4476d7",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01927_QzC_QWVkP.avif?updatedAt=1768418032926&ik-s=2ff379937ef35a0d8b101f6d561e605e1e1a1f5f",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041-2_V3xsIl_XKN.avif?updatedAt=1768418032872&ik-s=7263c014d4104926ab8478c56d33e2764a2624cf",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041_gUguzad0C.avif?updatedAt=1768418033027&ik-s=31eecc193d2b58decf5ab5caf23490c7d162c640",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "sunset"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02046_kxRKEZ3t5.avif?updatedAt=1768418032911&ik-s=7d4df9cdba7418d0604897a4f5f212c100bb8973",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "people",
            "street",
            "water"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02151_z2I6I3P65.avif?updatedAt=1768418032928&ik-s=c1a43129764a9e6b57231c8e4d7bd069dfeec96e",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "city",
            "night"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_YXsDOh2xZ.avif?updatedAt=1768418032988&ik-s=7574e7cc4bbbaed6f35e40b8778902caacb96fe5",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02191-15_0tNx0HfHO.avif?updatedAt=1768418003002&ik-s=780c96cf3ef69910097db9ba3ea3f6a82f6d7bf5",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02425-101_4_4AX2FsBBq.avif?updatedAt=1768418002930&ik-s=04ce0ad1d8391f9c53db930c953513c8eb2c3960",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white",
            "animal"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02459-112_5_yeUiawVzQ.avif?updatedAt=1768418002706&ik-s=2f574a422e4275c973245ff025d61149d3128716",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Nikon",
        "tags": [
            "event",
            "client",
            "wedding"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02462-113_3_Uxg1_MMjI.avif?updatedAt=1768418002939&ik-s=abb32b282ddb9ac7e6f30f39fd41026264843e43",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02516-133_sptL_j7Ir.avif?updatedAt=1768418003007&ik-s=6080f398260c3ec47a5a5c3fc1e252de469f413f",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white",
            "car"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02556-149_VZ2gDIV1d.avif?updatedAt=1768418002641&ik-s=81e1b7c68d45ee8fff90581dcb61ee8820ffa6fe",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white",
            "portrait"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03089-293_XjiXKp1mI.avif?updatedAt=1768418003155&ik-s=964672d1973620957b7e20975c90a5ed1c044616",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "event",
            "people",
            "documentary",
            "black-and-white"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03109-299_4_V76kpyUKI.avif?updatedAt=1768418002730&ik-s=9dbaef754f9499ab7ca3816eaecd7543e239b0cb",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Nikon",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "client"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03209-342_7iSIZ69eV.avif?updatedAt=1768418002591&ik-s=c90ade5eb874a25ca5197f4f9998b875fabc8d73",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white",
            "people"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03254-373_jed0eGV1H.avif?updatedAt=1768418002901&ik-s=4c669db06301bae8cb84a79976160a1c9a2b7e48",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "black-and-white"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987-Edit-538_akGBZ2tDt.avif?updatedAt=1768418002602&ik-s=06c4f952ee159c7df92bf1b927d5870fdc5bece6",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "wedding",
            "client",
            "event",
            "landscape",
            "nature"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy",
        "blogPostId": "20"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05095_MlvBONR16.avif?updatedAt=1768417968352&ik-s=7252771e34c44ade22be959bc821d8a9952134ce",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "flora",
            "nature",
            "sunset"
        ],
        "date": "2024-08-11",
        "place": "Blotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_VzLOJb1RX.avif?updatedAt=1768417968649&ik-s=7d93d0025bd373953c0b2aec4915161e25c76736",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "sunset",
            "nature",
            "portrait",
            "flora"
        ],
        "date": "2024-08-11",
        "place": "Blotnik",
        "blogPostId": "21"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_SAWiT_yJw.avif?updatedAt=1768417968690&ik-s=88efc3a5010417730b2fb7f48264456491b2be32",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "nature",
            "portrait",
            "sunset"
        ],
        "date": "2024-08-11",
        "place": "Blotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05380-2_SWDKpZ3Et.avif?updatedAt=1768417968661&ik-s=12158dfc4214f068a4c8d0113a8d5b32164b9f37",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "portrait",
            "nature",
            "sunset"
        ],
        "date": "2024-08-11",
        "place": "Blotnik"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05404-3_Bo3DjxHM1.avif?updatedAt=1768417968591&ik-s=694e5a5bd0b1c5a21c93c63237eaea61390a3e06",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "sunset",
            "nature",
            "flora"
        ],
        "date": "2024-08-11",
        "place": "Blotnik"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05722-2_wTbrfEbgh.avif?updatedAt=1768417968594&ik-s=4906fdd12df9e40b47263913b2f63da44c15ac87",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "nature",
            "sunset",
            "portrait"
        ],
        "date": "2024-08-11",
        "place": "Blotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-5403_bqhIoSehe.avif?updatedAt=1768417968676&ik-s=71da21bada5f8877b68772bd70ad29b71f53cbf1",
        "title": "Sloneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "flora",
            "sunset",
            "nature"
        ],
        "date": "2024-08-11",
        "place": "Blotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL--2_K9-Q38kYh.avif?updatedAt=1768418207615&ik-s=15ef19b390a91adaa71c86774d6d3e8af64f0059",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "sunset",
            "portrait"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-07360_r9R9dZkU4.avif?updatedAt=1768418207486&ik-s=80cc6b6e5e75beea61d4588d9498aa0900575151",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "portrait",
            "sunset"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_QxnPI292X.avif?updatedAt=1768418207216&ik-s=08ab566f42af083a128454a520af752efd4b549c",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "portrait",
            "street",
            "architecture",
            "sunset"
        ],
        "date": "2024-09-21",
        "place": "Santorini",
        "blogPostId": "22"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09174_qrX8YspXe.avif?updatedAt=1768418207462&ik-s=84dbce2ee10f8eb138cc913b15a4b8f9fc32f104",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "sunset",
            "architecture",
            "portrait",
            "street"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09227_MUrTju6uW.avif?updatedAt=1768418207397&ik-s=57f0b4a46e3e26482dea71627063a8e7061e3a88",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "portrait",
            "street",
            "architecture",
            "sunset"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-Oia_DQ_iYU7ST.avif?updatedAt=1768418207462&ik-s=b40a7068568c3d4dbff0e4dde9d65a1db41c01f0",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Oneplus 11",
        "tags": [
            "travel",
            "sunset",
            "water"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL06882_4h_cp9Zkg.avif?updatedAt=1768418207554&ik-s=bd7e70df654d67f1fddb10ed6192405b587c942b",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "street",
            "city",
            "architecture"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL07893-Edit_iq6ShaZJ3.avif?updatedAt=1768418207198&ik-s=6be6d85c1104af41fa3655e1934ed06ef9758089",
        "title": "Santorini - Travel",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel",
            "water",
            "portrait",
            "sunset"
        ],
        "date": "2024-09-21",
        "place": "Santorini"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09642_KSqynaPS3.avif?updatedAt=1768417875783&ik-s=cc524b51c14c53a815f7ced617368471e1128c8d",
        "title": "Dyniowelove",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "sunset",
            "session",
            "nature",
            "flora",
            "fashion",
            "portrait"
        ],
        "date": "2024-10-19",
        "place": "Rotmanka"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09682_6OucLS-Dx.avif?updatedAt=1768417875430&ik-s=572f326559b76cb8b98ab86b71763d3147232091",
        "title": "Dyniowelove",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "sunset",
            "session",
            "nature",
            "flora",
            "fashion",
            "portrait"
        ],
        "date": "2024-10-19",
        "place": "Rotmanka"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09734_IfcjWxO9h.avif?updatedAt=1768417875545&ik-s=3d9f9b86bbdc07203bdaf5f2cc95cfcb6d0d23ff",
        "title": "Dyniowelove",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "sunset",
            "session",
            "nature",
            "flora",
            "fashion",
            "portrait"
        ],
        "date": "2024-10-19",
        "place": "Rotmanka"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_C-wwMaCiP.avif?updatedAt=1768417875355&ik-s=2809750b7f978701c9848974d34fce71b25cbc8f",
        "title": "Dyniowelove",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "sunset",
            "session",
            "nature",
            "flora",
            "fashion",
            "portrait"
        ],
        "date": "2024-10-19",
        "place": "Rotmanka",
        "blogPostId": "23"
    },
//2024 random
//2024 mobile
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240203223719_L8kdyrIqw3.avif?updatedAt=1768417797591&ik-s=5bc619f3ccf836771bd76c118027befdc8dc666c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "documentary",
            "event",
            "party",
            "black-and-white"
        ],
        "date": "2024-02-03",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240214191606_20240215233631_hk4tMRLaKp.avif?updatedAt=1768417798652&ik-s=2610a4d34086d42ab20da7d2f944d79ebd18aca5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "food",
            "lifestyle"
        ],
        "date": "2024-02-14",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240312145001_tJpcKs7hI.avif?updatedAt=1768417799329&ik-s=5275d613426623512d7745d89a5a1a358d9de303",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "macro",
            "nature",
            "forest",
            "rain"
        ],
        "date": "2024-03-12",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240321134004_dp2vOhcDux.avif?updatedAt=1768417800622&ik-s=3dc55ad309c199aeb0cd538cc897a5103bd38eb0",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "rain",
            "car"
        ],
        "date": "2024-03-21",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240328165705_2V7U3tirUm.avif?updatedAt=1768417800110&ik-s=152c207b1ab30cb107b552486e78aad0d4ad415e",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city"
        ],
        "date": "2024-03-28",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240410175047_Ognl3o0dxk.avif?updatedAt=1768417800311&ik-s=47f404c1dd98a511ee7e46b0a473ad4f6b5933b6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2024-04-10",
        "place": ""
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240422085703_WfayVfm183.avif?updatedAt=1768417799932&ik-s=848f4728cd5a841a4035d4ffd7bb0af10fe9740a",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "snow",
            "nature",
            "forest",
            "water"
        ],
        "date": "2024-04-22",
        "place": "Zakopane"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240428194343_yoU8SJnAHc.avif?updatedAt=1768417799226&ik-s=76b674216b962a073c69ef82a68459dea1cbb32f",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "city"
        ],
        "date": "2024-04-28",
        "place": "Zukowo"
    },
      {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240517104021_95Y0x-6qae.avif?updatedAt=1768417800090&ik-s=f68623c141a962271e6ad8820f58a68ddae0bffb",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "vehicle",
            "sunset",
            "city"
        ],
        "date": "2024-05-17",
        "place": "Gdynia"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240527112025_-v2OSiHjOv.avif?updatedAt=1768417800359&ik-s=ca61399d0f58b5020abcc53645cb34b33937b9b5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract"
        ],
        "date": "2024-05-27",
        "place": "Miszewko"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240529173935_nhGYOMYhL_.avif?updatedAt=1768417800477&ik-s=a1bb3940afbaf8862ebf8383eeec1da5e792bd51",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "documentary",
            "lifestyle",
            "architecture",
            "minimal"
        ],
        "date": "2024-05-29",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240529181851_ac4TFHZ7Lb.avif?updatedAt=1768417799692&ik-s=13049fb19533eeed2102d1152b1d30a6040a5098",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "documentary",
            "lifestyle",
            "sunset"
        ],
        "date": "2024-05-29",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240610120102_H83VG96dO.avif?updatedAt=1768417799084&ik-s=0e2775ca484089239c37fc3165a62b0c212bf4af",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
            "macro"
        ],
        "date": "2024-06-10",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240613230709_HBh39iBsU.avif?updatedAt=1768417797606&ik-s=343d152e7cadeb02cbb67fb762eac16b0fb610b1",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "stars",
            "sky",
            "night"
        ],
        "date": "2024-06-13",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240616183130_b4o-y23wSG.avif?updatedAt=1768417799593&ik-s=512580e391469864336fd1d98f5285ce76e3d0eb",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "food",
            "lifestyle"
        ],
        "date": "2024-06-16",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240616190211_0I909Luuu.avif?updatedAt=1768417800514&ik-s=516805e144f8a00287471f22d3b088f657cb120a",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-06-16",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240616193806_TfPyCcXJxY.avif?updatedAt=1768417800106&ik-s=aea5a8a8127dc256459d581c9a80297d20f3edec",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "portrait",
            "flora",
            "model"
        ],
        "date": "2024-06-16",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240622170829_46GWOhe0tV.avif?updatedAt=1768417800293&ik-s=ec5b64c15cc45b629417db39ffcb8f9ad4c1ce31",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "portrait",
            "flora",
            "model"
        ],
        "date": "2024-06-22",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240625165259_1MnA-J55fU.avif?updatedAt=1768417800176&ik-s=2d8babb754fc375112671c70efbe8ecdc5f571cc",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2024-06-25",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240626185350_ZtLTzz4Zf.avif?updatedAt=1768417800430&ik-s=eda39ca8de521b6bc37b7e68850059bc5bab353d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "wildlife",
            "animal",
            "city"
        ],
        "date": "2024-06-26",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240705195240__qbcXFSP97.avif?updatedAt=1768417799888&ik-s=7c75f7a5c7752e68fd9f572bd21b48603d0d8e6d",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "portrait",
            "model",
            "sunset"
        ],
        "date": "2024-07-05",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240708185349_cjeioDRe1l.avif?updatedAt=1768417798982&ik-s=227a64dc13a75aaaa952deacdec394d37432238b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "macro",
            "flora",
            "sunset"
        ],
        "date": "2024-07-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240708185447_dikAVvv-No.avif?updatedAt=1768417799530&ik-s=5192675bbe3336a65a964b8aeee084f62cdd4648",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "sunset",
            "flora"
        ],
        "date": "2024-07-08",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240718204510_tmdF0-Q3pM.avif?updatedAt=1768417798637&ik-s=3a9acb304ca26502e2ec9822ab4b15641b6b7cf2",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2024-07-18",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240729145339_w8cxNKfB7m.avif?updatedAt=1768417800455&ik-s=4ba0e59645e1d295c23e720ab044606861f800fc",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "car"
        ],
        "date": "2024-07-29",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240805203420_8a1YouM0c.avif?updatedAt=1768417799200&ik-s=c0815d09bf074283c206a1a148f50afe9054b619",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "people",
            "action"
        ],
        "date": "2024-08-05",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240805210322_6KpC2A18IU.avif?updatedAt=1768417799784&ik-s=a95654ede182480dddef82e45827528df23fd2e6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-08-05",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240809202231_lRoVkTn4jJ.avif?updatedAt=1768417797882&ik-s=238a4aacf7c906b048f9c1158273dae373cc2e66",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "abstract",
            "architecture",
            "city"
        ],
        "date": "2024-08-09",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240815195513_h23H7YxeM.avif?updatedAt=1768417798597&ik-s=5b91bea590f7e60fbd8f74e82a359c5fce134d30",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
            "macro"
        ],
        "date": "2024-08-15",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240817195924_rJo07glp1B.avif?updatedAt=1768417797184&ik-s=cc8dbec055abbbeb8b46b4abf219af632f5ba5b5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "sunset",
            "landscape",
            "nature",
            "water",
            "sky"
        ],
        "date": "2024-08-17",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240818173622_3kS5Hf2nDg.avif?updatedAt=1768417799873&ik-s=89dd76ffa45c9316c60422b77e34ea9d8277a346",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "documentary",
            "lifestyle",
            "flora",
            "sunset"
        ],
        "date": "2024-08-18",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240903121323_G2vymRCVHn.avif?updatedAt=1768417800370&ik-s=d1a14dbcb4a31d29c6e7e46129c2ded27e1a887b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-09-03",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240910184807_rCXZS27Z7.avif?updatedAt=1768417798496&ik-s=3040f7c65c76c85f7757d9557383daa39cceb766",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "flora",
            "sunset"
        ],
        "date": "2024-09-10",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240914184241_HfQcec6CCv.avif?updatedAt=1768417799497&ik-s=d57c34dc4e6cc845c9d598b155a24b7d35a8cee1",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2024-09-14",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240916180820_UbKVnuoHeT.avif?updatedAt=1768417799604&ik-s=8595e6d2630df69ebc9139070898300f3758c2de",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "architecture",
            "nature",
            "abstract"
        ],
        "date": "2024-09-16",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240916183226_t22OzSGbj.avif?updatedAt=1768417797822&ik-s=75ae2df3dea5ef854887c9274586db93f1a640dc",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset",
            "landscape",
            "forest",
            "nature",
            "architecture"
        ],
        "date": "2024-09-16",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20240929165011_8o2NPmCtO.avif?updatedAt=1768417799141&ik-s=67553117f8f1c473b01e1e95e68cda6eeceefd09",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "landscape",
            "architecture",
            "city",
            "nature",
            "forest"
        ],
        "date": "2024-09-29",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241006161851_l32-sx1vf.avif?updatedAt=1768417798235&ik-s=bfb5649d5734ffbff251319a62e9656f3a6ab2e2",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2024-10-06",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241006162539__NaTfPfO4a.avif?updatedAt=1768417798859&ik-s=c7b79c9dbbdc63247f482ea639616a4dee9a63d6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city"
        ],
        "date": "2024-10-06",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241015112016_lpJ5aqiZEn.avif?updatedAt=1768417800231&ik-s=c1089fa064526609349db27ce6a090b60ad6d809",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "abstract"
        ],
        "date": "2024-10-15",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241028173539_T8GEcr3xX.avif?updatedAt=1768417797951&ik-s=dc547c956623be65728795565410f3813772961c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "night"
        ],
        "date": "2024-10-28",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241101010647_rbMLzixUVj.avif?updatedAt=1768417798261&ik-s=a960b883e7b77349f5df13dbbbf1bec9ac1b9b44",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people",
            "night"
        ],
        "date": "2024-11-01",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241101014241_ku9Gvn4jhv.avif?updatedAt=1768417798669&ik-s=0979d9e77ff79e102183704c5ad531368c73be6a",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people",
            "night"
        ],
        "date": "2024-11-01",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241101014241_ku9Gvn4jhv.avif?updatedAt=1768417798669&ik-s=0979d9e77ff79e102183704c5ad531368c73be6a",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "night",
            "people"
        ],
        "date": "2024-11-01",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241102123229_0x1ZLuFMLe.avif?updatedAt=1768417797746&ik-s=d5692650bcb261dddbafdc60f461d642e91dba86",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-11-02",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241102203630_moCJ6BfUMr.avif?updatedAt=1768417798576&ik-s=227c1ea776d7114f9c243541d3d5f6cfe785b4d5",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "food"
        ],
        "date": "2024-11-02",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241117152854_XNN_Sm-X7Q.avif?updatedAt=1768417799667&ik-s=ea8a093b01adb98c7a2e07a33eb66999a8844bef",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "abstract"
        ],
        "date": "2024-11-17",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241121174139_FSi73qyFJ.avif?updatedAt=1768417800196&ik-s=8cd0c3bb14a8a09963af01c0cc529ce01831ccb2",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "snow"
        ],
        "date": "2024-11-21",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241208000808_Y8V6TJBMdU.avif?updatedAt=1768417797467&ik-s=56e660ff108ea18cf106e7964eace09fb3a5c0b0",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "event",
            "party",
            "people"
        ],
        "date": "2024-12-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG20241215083205_ZuE9m-BBO.avif?updatedAt=1768417800183&ik-s=4a15a3c0499dc71d6a4ae7ea8d742489fa5cdb75",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "nature"
        ],
        "date": "2024-12-15",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240103_232522_4rE2GAZqW6.avif?updatedAt=1768417798150&ik-s=c59ea39438f8bc377cc0ab9edf725e81ba35b94c",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "fog"
        ],
        "date": "2024-01-03",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240110_020017_do8fvpjjg2.avif?updatedAt=1768417800330&ik-s=bf370055688a6ef2b2f8c84b153085428d0366a6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2024-01-10",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240111_233213_PfX2LNqqeM.avif?updatedAt=1768417798856&ik-s=2edb4e224b483ab319247e5958bdff4c95fd3584",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal"
        ],
        "date": "2024-01-11",
        "place": ""
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240118_231240_Hsspuvyabs.avif?updatedAt=1768417798509&ik-s=c60ccf3ef4112440a3f4bcfcde49c4d590943c87",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal"
        ],
        "date": "2024-01-18",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240118_231252_xO_pbFbyoB.avif?updatedAt=1768417798649&ik-s=c8a5c7733207bfe24e5591f64ef2702de3e97c92",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people",
            "animal"
        ],
        "date": "2024-01-18",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240118_231322_ewP60WnhNk.avif?updatedAt=1768417800340&ik-s=508c0c4d627d884e33c4a9337e4945f05e4c1b37",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal"
        ],
        "date": "2024-01-18",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240120_031715_l7VbGtHXmI.avif?updatedAt=1768417799472&ik-s=fa81b82f3039213edfb2f1727c79a8fe5f4f15b4",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "abstract",
            "architecture"
        ],
        "date": "2024-01-20",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240120_031751_Nrdkfn92zf.avif?updatedAt=1768417799836&ik-s=f3e37340fc33749db3315f96083a04ecb070c8fd",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "people"
        ],
        "date": "2024-01-20",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240124_020516_7EtkzAjspa.avif?updatedAt=1768417798639&ik-s=de6945945973c9ec345360948ca7887ba426bebf",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city",
            "architecture",
            "abstract"
        ],
        "date": "2024-01-24",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240208_185652_Ea_-krkZw.avif?updatedAt=1768417799983&ik-s=f684209cc311595a4f27e4e5c1e1a130e4825285",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "food",
            "lifestyle"
        ],
        "date": "2024-02-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240208_185715_QBkIlhDln7.avif?updatedAt=1768417799720&ik-s=824099e536e3d01bc1a96736e00dc61d36373635",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2024-02-08",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240212_001039_WkFGzC5Cj2.avif?updatedAt=1768417797942&ik-s=153ae099421a5e82f29e4881cbdc788b5f67b1ac",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "car",
            "night",
            "abstract"
        ],
        "date": "2024-02-12",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240212_001046_Er2uZRjmqe.avif?updatedAt=1768417800238&ik-s=d7c8692347889b458e7c47f3d68ca31762b399a8",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "car",
            "city",
            "night"
        ],
        "date": "2024-02-12",
        "place": ""
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240302_024803_OzwE89c-i.avif?updatedAt=1768417797939&ik-s=3e4b60b4baf93c82fdf123def53afc98accdc2fc",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "car",
            "city",
            "night"
        ],
        "date": "2024-03-02",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240302_024819_tKhb4tmMR.avif?updatedAt=1768417799094&ik-s=b7d10d2a89a705c0c47dbc254d88a8560113fce6",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "people"
        ],
        "date": "2024-03-02",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240303_001304_fIaDHgQY9M.avif?updatedAt=1768417798731&ik-s=79e4b7da741c5b8652de3ee6077d7a6eeec8b87b",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night"
        ],
        "date": "2024-03-03",
        "place": ""
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240305_135637_XDfPpx1jb.avif?updatedAt=1768417799171&ik-s=b53436aefddd7ef8563f1dd4c83c6cb260c338c0",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset"
        ],
        "date": "2024-03-05",
        "place": "Osowa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240305_135701_bGHDHkzeww.avif?updatedAt=1768417799646&ik-s=9d93ad3f1270cd2382fe6e9574b7737924b78fc1",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset",
            "sky"
        ],
        "date": "2024-03-05",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240313_162719_OTwqrGCdml.avif?updatedAt=1768417798588&ik-s=582b07aa90bf2ea30a446ff9100b010cbbc6b458",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "macro",
            "flora",
            "nature"
        ],
        "date": "2024-03-13",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240319_151745_ikEpm6nB0.avif?updatedAt=1768417800333&ik-s=5342995f3db1a7a37e1f4d43e3276c3f5bc9f961",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event"
        ],
        "date": "2024-03-19",
        "place": ""
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/IMG_20240321_134849_86o76ml8U.avif?updatedAt=1768417800078&ik-s=67426906de510c4ea58f61bb0cfdb521b431638f",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event"
        ],
        "date": "2024-03-21",
        "place": ""
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/PXL_20241101_015644260.RAW-01.COVER_57HXRj-5_.avif?updatedAt=1768417845069&ik-s=2b92ee4e8941e6f8d981f89b1562b082fd70b283",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event"
        ],
        "date": "2024-11-01",
        "place": "Elektrykow, Gdansk"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/PXL_20241101_020059274.RAW-01.MP.COVER_rVcwO3DiJ.avif?updatedAt=1768417845085&ik-s=21d477e3e39e220169a77d041926d28a6711b6c4",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event"
        ],
        "date": "2024-11-01",
        "place": "Elektrykow, Gdansk"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/mobile/PXL_20241102_130012446.RAW-02.ORIGINAL_507iTgh7Q.avif?updatedAt=1768417845189&ik-s=b59d46088c2ccd79e70409882792cf47ae86c37f",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
        ],
        "date": "2024-11-02",
        "place": "Gdansk"
    },

//2025 
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00187_Y6qBOAwA_.avif?updatedAt=1768344183446&ik-s=6a7eaa964510f38ec346b3c0bb0b16aca38febb8",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00268_GrpHNjFqh.avif?updatedAt=1768344183449&ik-s=14134200d6610a35d458fc5103034ed3c3b760fb",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00268_GrpHNjFqh.avif?updatedAt=1768344183449&ik-s=14134200d6610a35d458fc5103034ed3c3b760fb",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00269_TFnSQ1EbA.avif?updatedAt=1768344183444&ik-s=c5009714eff354bc6702e6df4ca80e1a88c638f2",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00274_my-yn0IXI.avif?updatedAt=1768344183445&ik-s=566f7ba2ec88569276e9d4ebd098e852a14dd0bb",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00276_sFD52fV8A.avif?updatedAt=1768344183445&ik-s=1f11c19961e077b51fd94260874cb9c3dcb74bb5",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00281_RN3AnX77c.avif?updatedAt=1768344183449&ik-s=dd887ae3613b55b7381b245db9232993c3aff02d",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Gdansk Matarnia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b",
        "title": "Daldehog - IKEA",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "architecture",
            "professional",
            "daldehog",
            "city"
        ],
        "date": "2025-01-23",
        "place": "Matarnia",
        "titleKey": "data.photos.daldehog.title",
        "placeKey": "data.photos.daldehog.place",
        "blogPostId": "24"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01417_pi79XrSSFs.avif?updatedAt=1768344210734&ik-s=032184a7c4bda6b05a769a03516fc58ea648bc12",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional",
            "portrait"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01427-2_rml7UCmOP.avif?updatedAt=1768344210785&ik-s=51498129d6a4d5dab2ae9eeff96365f736386bbd",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional",
            "portrait"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01446-3_z57Tivubs.avif?updatedAt=1768344210820&ik-s=6c5925b89846eedd95584dd65a12770968229def",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional",
            "portrait"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01458_T-hp5xGcu.avif?updatedAt=1768344210557&ik-s=f77beaca54c956fdc07747b011523e0a4025e2bb",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional",
            "portrait"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-0148_9I_P8ts6y.avif?updatedAt=1768412307089&ik-s=e4df22900b9f2c3d372b45923d845da9323238fc",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },

  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01496__3xKgWtx6B.avif?updatedAt=1768344210869&ik-s=47e87b1ac15c7d7be05145bae3e8f5927a7748ac",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01537_0EbP8MSykF.avif?updatedAt=1768344210823&ik-s=d5be89b84b2c0655e689c013121c1cf8c5a20264",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01578_bpGM7un4M.avif?updatedAt=1768344210824&ik-s=07058a98f5d6031f9c27c674a166267d13b0aacd",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional",
            "portrait"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_qH1Q7rsxk.avif?updatedAt=1768344210783&ik-s=d1a5a9c39aff0f046d5c665f6e4af4953cd02d0d",
        "title": "fizjotusia",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "professional",
            "studio",
            "client",
            "portrait",
            "model",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Sopot",
        "blogPostId": "25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01631_ZpyOLBJQc.avif?updatedAt=1768344210667&ik-s=cbcaa3fff1e9d590ebfbd39104b0a65950d0d7e8",
        "title": "Marta - Session",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "session",
            "studio",
            "professional",
            "portrait"
        ],
        "date": "2025-04-24",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06535-2_vICD9k3D-9.avif?updatedAt=1768417164748&ik-s=2b376d9675a43d004b3dfa27fd4846edf2b0240d",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06557_V3hdduLRpG.avif?updatedAt=1768417165325&ik-s=8773163cd59cbb2f5910bba3df3f292ec74bb604",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06599_z50WkTw1zM.avif?updatedAt=1768417165270&ik-s=b42bc41e5993e4af95bd043d9486941e68871842",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_f1IkJTveI.avif?updatedAt=1768417165173&ik-s=d8fd3cc9063dc56f4a5037784048c081c0279d6e",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice",
        "blogPostId": "26"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06819_TEa-xV_Iv.avif?updatedAt=1768417165247&ik-s=0c8c371b4fe23251abcd8f9899b9f11509e371fe",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice",
        "blogPostId": "26"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06821_V-aPMuCxen.avif?updatedAt=1768417165306&ik-s=8f0c90d3b450bb76cc1978c1ddad9419bf6c762c",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "car"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06822_ITHhFoUcL_.avif?updatedAt=1768417165318&ik-s=f1db74e5c35f315ccc063cd953bd0cd6ed932ec8",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "car"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06824_eeBDmEYw6.avif?updatedAt=1768417165319&ik-s=ea590c1822d2b36d2c26c7118fc9940e1528972a",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "car",
            "minimal"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06867_L4hD65e6_.avif?updatedAt=1768417165046&ik-s=a3f067b853ca0be24b7c67bce2d8a559b1292d15",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "car"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06867_L4hD65e6_.avif?updatedAt=1768417165046&ik-s=a3f067b853ca0be24b7c67bce2d8a559b1292d15",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "documentary"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06913_k5Ei635Yy.avif?updatedAt=1768417165315&ik-s=625037ac9ec65bd8bfcdddf9614900030a1d3c65",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "documentary"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07095_YC7uMaRS3.avif?updatedAt=1768417165267&ik-s=4972ddd3b6d33513415dd29c53987059512bb71d",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "portrait",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
 {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07105_wCaYrAVU8.avif?updatedAt=1768417165255&ik-s=2e7f844097690bad24e1fca1f0d5a483901b09f4",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "portrait",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07109_E7986eOWvd.avif?updatedAt=1768417164918&ik-s=052f862e65e9bbefb3eb91729911eaf15975890d",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_uwzfn3cso.avif?updatedAt=1768344348897&ik-s=5c4467cf85e2369fdee752c1d2bd719d323945e0",
        "title": "Wesele Jakuba i Kasi",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "wedding",
            "people"
        ],
        "date": "2025-06-28",
        "place": "Sierakowice"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07152_5tRu8yecR.avif?updatedAt=1768417209422&ik-s=789a425e36d6d265174c0e34f7f2f3ed889fd456",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_w1J8QN9Z2x.avif?updatedAt=1768417209487&ik-s=4a559d8519ccd11a142c82ab2735200e750f1cf8",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "professional",
            "studio",
            "session",
            "client"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot",
        "blogPostId": "27",
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07170_akA6hqaSt.avif?updatedAt=1768417209287&ik-s=b6a82f76a1992113dd8f7f5ebf90c635be0ad3f3",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07202-Edit_-LsVqjx0U.avif?updatedAt=1768417209253&ik-s=e94c2bc6660ca2be58dd3850cfef810d85c4b3d9",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "client",
            "professional",
            "studio"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07207_TpR-n6WD6.avif?updatedAt=1768417209313&ik-s=4ee800094a19e0ef4ef433e2de6bcca56c5ac75e",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "client",
            "professional",
            "studio"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07230_iveshcZUh.avif?updatedAt=1768417209240&ik-s=e9ce7b96119587b8eb885226ba83fa7e0200f9c0",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07233_l8exU9eLV.avif?updatedAt=1768417209364&ik-s=f90a89b81624a21b0f00cc3c2128e82962144d45",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "client",
            "professional",
            "studio"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07233_l8exU9eLV.avif?updatedAt=1768417209364&ik-s=f90a89b81624a21b0f00cc3c2128e82962144d45",
        "title": "Tomek",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "client",
            "session",
            "studio",
            "professional"
        ],
        "date": "2025-07-05",
        "place": "Studio Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07510_AvNArNfL1.avif?updatedAt=1768344465643&ik-s=9326c49799b6cd4c32440cf858ed2a178df09467",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07513-2_zqoFl6W95.avif?updatedAt=1768417253287&ik-s=ae3f43ffbb5201cdc34d2a768a5c605c30393432",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "black-and-white",
            "event"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07528_jPDGu9UwE.avif?updatedAt=1768344465639&ik-s=a3a0c5422e52414ba77a8d759dfede3cc3129281",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "event",
            "food",
            "people"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07555_lYdfOSgFC.avif?updatedAt=1768417253198&ik-s=60161808dd64acc88f000869a4ef8a355b8c1b63",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "people",
            "sports",
            "action"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07562_Ogren0cxt.avif?updatedAt=1768417253517&ik-s=01db3925b47fee5480ade6c7836e88125b3fe5ee",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "people",
            "action",
            "sports"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
{
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07567_btatR2q3w.avif?updatedAt=1768417253394&ik-s=9cd72ed814dad174a3491550ceebc36bfeedd22f",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "people",
            "sports",
            "action"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07571_vM1ks6VLN.avif?updatedAt=1768344465891&ik-s=a4fbea295b1ee5e294665cba7357a4b830753439",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "action",
            "event",
            "sports",
            "people"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07573_srUCdLwhL.avif?updatedAt=1768344465494&ik-s=fdef7aa74bb47970766fcc265121c2b6c92fb318",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "people",
            "action",
            "sports"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07692_QGVLHRn4K.avif?updatedAt=1768344465853&ik-s=577783f8c7db3819ef7e232ca57288d4787da4dc",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "people",
            "event"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
  {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_bGF2DC9o1.avif?updatedAt=1768344465709&ik-s=9df6cbc602ee9283eba9234cef5ce38b596bb2d1",
        "title": "Festiwal Japonski",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "people"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },

//2025 random
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/random/DSC_0381_4SIyt96YJn.avif?updatedAt=1768417605727&ik-s=64afcfecace17d4eb090710acbb8da36be3a4e5e",
        "title": "Blood Moon",
        "category": "street",
        "camera": "Nikon",
        "tags": [
        ],
        "date": "2025-10-04",
        "place": "Sopot"
    },
   {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/random/JEL07955-2_c_ZHOBFgBc.avif?updatedAt=1768417295786&ik-s=87268fab2b747bd544e14541d5941c04fedd7e3d",
        "title": "KAROLA Crew",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
        ],
        "date": "2025-09-21",
        "place": "Gdynia"
    },



];


import { getDevImageUrl } from '@/lib/utils';

// Helper to ensure all photos have IDs
export const getPhotos = (): Photo[] => {
    return photoData.map((photo, index) => {
        return {
            ...photo,
            url: getDevImageUrl(photo.url),
            id: photo.id || `photo-${index}-${photo.url.split('/').pop()?.split('.')[0] || 'unknown'}`
        };
    });
};
