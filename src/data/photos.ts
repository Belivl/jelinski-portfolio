export interface Photo {
    id?: string;
    url: string;
    title?: string;
    category: 'landscape' | 'travel' | 'portrait' | 'event' | 'black-and-white' | 'animal' | 'architecture' | 'client' | 'cars' | 'street' | 'various';
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
    //2021
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9171_o-WVm0btCp.avif?updatedAt=1769027173624",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9178_99U7d54gJ_.avif?updatedAt=1769027173613",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9183-3_mg-4Nf4UM.avif?updatedAt=1769027173604",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9188-3__2V79b7A7.avif?updatedAt=1769027173577",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197_STNi1A5yY.avif?updatedAt=1769027173548",
        "title": "Wydmy",
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
        "blogPostId": "leba21"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9197-2_YyMIgEJ8H.avif?updatedAt=1769027173542",
        "title": "Wydmy",
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
        "blogPostId": "leba21"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9281_TwGbG9H4LT.avif?updatedAt=1769027173605",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9291-3_R8bd-0M2Z.avif?updatedAt=1769027173604",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9301-2_1YCXEASN20.avif?updatedAt=1769027173629",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/05-01/IMG_9303-Edit_tOlInckDf1.avif?updatedAt=1769027173516",
        "title": "Wydmy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-14_uuUCaTzdQ2.avif?updatedAt=1769030239346",
        "title": "Urbex2",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-07-04",
        "place": "Olowianka",
        "blogPostId": "urbex221"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-29_QCYdlNC4g.avif?updatedAt=1769030239196",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-35_W_oN_kHej.avif?updatedAt=1769030239352",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-37_dLmFcHuSH.avif?updatedAt=1769030239267",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-51_6SWf5R-1v.avif?updatedAt=1769030239241",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-55_GufZw_TYYo.avif?updatedAt=1769030239328",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-71_gno66X43r.avif?updatedAt=1769030239197",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-73_IMyN5DL9nY.avif?updatedAt=1769030239347",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-109_TopCUrLy0.avif?updatedAt=1769030239315",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-132_Bm3XW64RYT.avif?updatedAt=1769030239312",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-137_IeXaoa0Y8v.avif?updatedAt=1769030239311",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-162_uUOg4rkDSj.avif?updatedAt=1769030239333",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-169_-AH0NFV52m.avif?updatedAt=1769030239427",
        "title": "Urbex2",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-182_fmEgWLAFw9.avif?updatedAt=1769030239386",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-188_LdLQRsbAL7.avif?updatedAt=1769030239358",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-193_sV4oXq-8sr.avif?updatedAt=1769030239342",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-214_UtjRQdOcF9.avif?updatedAt=1769030239422",
        "title": "Witch",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-215_mbp9YYIhpl.avif?updatedAt=1769030239314",
        "title": "Witch",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/07-04/20210704-217_70Ga3iKSA.avif?updatedAt=1769030239274",
        "title": "Witch",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "model",
            "portrait",
            "night"
        ],
        "date": "2021-07-04",
        "place": "Osowa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02312_rs6mnSDWd.avif?updatedAt=1769026295022",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02319-2_RRF_bY6X14.avif?updatedAt=1769026294906",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02364-2_U51vBWOI4.avif?updatedAt=1769026294941",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02401-5_1On1okgHiV.avif?updatedAt=1769026294971",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02403-Edit_6Lk7RUsQF-.avif?updatedAt=1769026294940",
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
    // {
    //     "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02408-2_s5m-IbC3q.avif?updatedAt=1769026294910",
    //     "title": "Jarmark",
    //     "category": "street",
    //     "camera": "Sony A6600",
    //     "tags": [
    //         "people",
    //         "street",
    //         "night",
    //         "black-and-white"
    //     ],
    //     "date": "2021-08-13",
    //     "place": "Gdansk"
    // },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02411_hLrokbUXih.avif?updatedAt=1769026295042",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02425-2_5qpMf5ZNJ.avif?updatedAt=1769026294897",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02430-3_RVzohwXLR.avif?updatedAt=1769026294916",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02434-2_0kdascQvv.avif?updatedAt=1769026294940",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/08-13/JEL02460-2_8nBLL9r64.avif?updatedAt=1769026294952",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04078-Edit_D4c5f7DqT.avif?updatedAt=1769026403361",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04091-Edit_MvyEMqpcGv.avif?updatedAt=1769026403673",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04159_44tvqsq_lT.avif?updatedAt=1769026403677",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04185-Edit_OzcexbmLTt.avif?updatedAt=1769026403754",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04193-2_8E5MRQtXM.avif?updatedAt=1769026403620",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207-2_ztpDPur4K1.avif?updatedAt=1769026403673",
        "title": "Allan",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2021-10-08",
        "place": "Politechnika Gdanska",
        "blogPostId": "allan21"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04207_9P1xUigWyR.avif?updatedAt=1769026403675",
        "title": "Allan",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "session",
            "black-and-white",
            "model"
        ],
        "date": "2021-10-08",
        "place": "Gdansk",
        "blogPostId": "allan21"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04282-2_QuUZ1O_98.avif?updatedAt=1769026403618",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04285_ka4ol5t5E.avif?updatedAt=1769026403643",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04316_bRFyXYRro.avif?updatedAt=1769026403610",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04317_FJ4-1GgzA.avif?updatedAt=1769026403724",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04381-Edit_mx5u-QIom.avif?updatedAt=1769026403622",
        "title": "Allan",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/10-08/JEL04394-3_ceBRyv-CBa.avif?updatedAt=1769026403730",
        "title": "Politechnika Gdanska",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04765_SlKoB-ZsN.avif?updatedAt=1769031147928",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04767_ylQp2qxik.avif?updatedAt=1769031147988",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04773_jic46LWsV.avif?updatedAt=1769031147990",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04823_YbExR2OaNb.avif?updatedAt=1769031148031",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04881-2_jrGEYSYAl.avif?updatedAt=1769031148044",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04883-2_0aJ4aKu1k.avif?updatedAt=1769031148018",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04886_-Z3EEMufCg.avif?updatedAt=1769031148059",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2021/12-18/JEL04889_O9LPmIKLq.avif?updatedAt=1769031148073",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    //2022
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08235-2_csaHQjgi6f.avif?updatedAt=1769025614690",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08242_vKFdRwGsF.avif?updatedAt=1769025614637",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08250-2_2JxYVUDi6h.avif?updatedAt=1769025614734",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08267_9nmMZxxxeO.avif?updatedAt=1769025614520",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08271-2_WQLFLfIMSW.avif?updatedAt=1769025614698",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08296_wUdcqtYCbx.avif?updatedAt=1769025614817",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08307-2_jnd_vB6drF.avif?updatedAt=1769025614771",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08318_zY5m3zqeRX.avif?updatedAt=1769025614771",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08363_k8SPr0HSkL.avif?updatedAt=1769025614703",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08413-2_cTGDA8FiTF.avif?updatedAt=1769025614784",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08416_0Be_LZzyV7.avif?updatedAt=1769025614826",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08467-2_oxdSIj-rvX.avif?updatedAt=1769025614806",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08471_1SWtV8VViZ.avif?updatedAt=1769025614803",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08472-2_ZtDAlFsXCF.avif?updatedAt=1769025614643",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08475_vEHpRMBkT7.avif?updatedAt=1769025614797",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08489_Mpnd69CEuy.avif?updatedAt=1769025614802",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08491_8LjQ8Daok7.avif?updatedAt=1769025614805",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08779_MUiUtWHIU.avif?updatedAt=1769025614439",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-08914-2_QUR-4IWC0.avif?updatedAt=1769025614416",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL08950-Edit_RLRHU7k5t-.avif?updatedAt=1769025614519",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09046_-Wy74Av7J.avif?updatedAt=1769025614478",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09051_2nrSYZDY2g.avif?updatedAt=1769025614669",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09083-2_YJiLNA-Fd.avif?updatedAt=1769025614484",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09088_fbqO9X4OWk.avif?updatedAt=1769025614749",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09092_TmOn2kU5fg.avif?updatedAt=1769025614731",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09103_kZxnR1aHEG.avif?updatedAt=1769025614744",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-09111_108bC0Fhav.avif?updatedAt=1769025614676",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-8352-2_QblSD0PKFw.avif?updatedAt=1769025614989",
        "title": "MotoShow",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "car",
            "minimal",
            "event"
        ],
        "date": "2022-07-09",
        "place": "Polsat Plus Arena",
        "blogPostId": "motoshow22"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/07-09/JEL-8434-2_yYhV0FKKjP.avif?updatedAt=1769025614793",
        "title": "MotoShow",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL01053_8iX7Ta112c.avif?updatedAt=1769024108628",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00178_f9mnMT0ztm.avif?updatedAt=1769024108688",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00203-3_y07TC9BDH8.avif?updatedAt=1769024108672",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00226-3_q1tdKnaZ4E.avif?updatedAt=1769024108645",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00227-2_MRY12NyVJ.avif?updatedAt=1769024108573",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00228-2_D2QIDwxnHq.avif?updatedAt=1769024108679",
        "title": "Berlin",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "travel"
        ],
        "date": "2022-08-08",
        "place": "Berlin"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00245_qLbNTYBkG-.avif?updatedAt=1769024108677",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00290_ReiIc6HeDE.avif?updatedAt=1769024108714",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00349-2_T4fr_clNn.avif?updatedAt=1769024108563",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00408_IxGwecsXhW.avif?updatedAt=1769024108618",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00410_Ih8zdaJ9a.avif?updatedAt=1769024108556",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00455-2_zzoFSHgDd.avif?updatedAt=1769024108592",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00504_jX7kR5ym9.avif?updatedAt=1769024108698",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00580_FwQawYZND.avif?updatedAt=1769024108620",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00667-2_7UT-vB49em.avif?updatedAt=1769024108692",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00694_3hiWi4cIzu.avif?updatedAt=1769024108716",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-00932_pzFPH28MI.avif",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01132-2_nMHC6Dg1d6.avif?updatedAt=1769024108612",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01134-2_rW8PWYjOi.avif?updatedAt=1769024108689",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01162_LS3OltTydt.avif?updatedAt=1769024108645",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01167_3rJ4TvOJr.avif?updatedAt=1769024187529",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01244-2_WA5bRgyXEW.avif?updatedAt=1769024187446",
        "title": "Berlin",
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
        "blogPostId": "berlin22"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01310-5_Um89ELFMS2.avif?updatedAt=1769024187553",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01386_CZGjx-Fjtw.avif?updatedAt=1769024187479",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01561__xmPy3OFG.avif?updatedAt=1769024187412",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01572_YmTUjvpfOK.avif?updatedAt=1769024187500",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01614-2_Mf69jSOwjg.avif?updatedAt=1769024187474",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01705-2_Wu7M59CMc.avif?updatedAt=1769024187305",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01734_i2EB8t3iWz.avif?updatedAt=1769024187495",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01744-3_-Qrg84uHOz.avif?updatedAt=1769024187437",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01853-2_BljaAzD48N.avif?updatedAt=1769024187466",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-01995-2_QNcLVVsbC.avif?updatedAt=1769024187468",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-1466_IblHbiOkj.avif?updatedAt=1769024187309",
        "title": "Berlin",
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
        "blogPostId": "berlin22"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-08/JEL-1657-2_8Rga2QYKh.avif?updatedAt=1769024187424",
        "title": "Berlin",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03601_iR7SsLUUe.avif?updatedAt=1769023300627",
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
        "blogPostId": "balticsail"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03918_nYIkM-9dz.avif?updatedAt=1769023301071",
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
        "blogPostId": "balticsail"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03921_QpiP6g-69.avif?updatedAt=1769023301004",
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
        "blogPostId": "balticsail"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-03957_gkwAxU--_E.avif?updatedAt=1769023301054",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04073_XRYX5L7PB.avif?updatedAt=1769023300910",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04078-2_mOxdo3AA8.avif?updatedAt=1769023300839",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04147-2_F6sFC5dbc.avif?updatedAt=1769023301024",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04147-2_F6sFC5dbc.avif?updatedAt=1769023301024",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04857_vUjnwaelxr.avif?updatedAt=1769023301050",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04983_9UEaQuN0pK.avif?updatedAt=1769023301061",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-04999_QyifK3BWI3.avif?updatedAt=1769023301092",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05007_FKTrSWsAk.avif?updatedAt=1769023301028",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05127_gE3X0brs2.avif?updatedAt=1769023300999",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/08-28/JEL-05182_UfR0S-WB2-.avif?updatedAt=1769023301107",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06224_WNnNqOnN-.avif?updatedAt=1769022715814",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06242-neo_1mG4mUE16.avif?updatedAt=1769022715678",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06245-2_Q2laqfs6T.avif?updatedAt=1769022715662",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06291_zRUmn9asqS.avif?updatedAt=1769022715796",
        "title": "Magda",
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
        "blogPostId": "mad100"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06335_h9w9RfbuT.avif?updatedAt=1769022715658",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06348_im_Ishk7pw.avif?updatedAt=1769022715865",
        "title": "Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "model",
            "portrait"
        ],
        "date": "2022-09-24",
        "place": "Gdansk",
        "blogPostId": "mad100"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06428-2_v9dEkoYw0U.avif?updatedAt=1769022715809",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06443-2_KFhddmka6.avif?updatedAt=1769022715780",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06537-neo_P23tOoZoIw.avif?updatedAt=1769022715755",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06563-2_l9ZsUvxp0.avif?updatedAt=1769022715984",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-06567_75BazDTic.avif?updatedAt=1769022716333",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6193-2_cAFjytEaU.avif?updatedAt=1769022715443",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6198-2_RjjRV9QE3.avif?updatedAt=1769022715649",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6234-2_fs65vZLHm9.avif?updatedAt=1769022716344",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-2_0NmdG4_M1i.avif?updatedAt=1769022715788",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6324-3_hdJ5vmlpHW.avif?updatedAt=1769022715795",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6364-2_CqQ2zwbgR.avif?updatedAt=1769022715996",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6420-2_Mr2X4Ir_M.avif?updatedAt=1769022716239",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6424-2_gmjxACvgx.avif?updatedAt=1769022716132",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6444-2_DeU1PBPm0.avif?updatedAt=1769022741667",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6454-2_OmdireHxX6.avif?updatedAt=1769022715788",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6483-2_xaVBY7bktl.avif?updatedAt=1769022715760",
        "title": "Magda",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2022/09-24/JEL-6576-2_sKUrEgh4dA.avif?updatedAt=1769022715766",
        "title": "Magda",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "model"
        ],
        "date": "2022-09-24",
        "place": "Gdansk"
    },
    //2023
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00071_Ol3Ap6mWs.avif?updatedAt=1769022051801",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00088_OTCp590h_.avif?updatedAt=1769022051797",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00151_P-unljn3R.avif?updatedAt=1769022051959",
        "title": "Jeziorne nimfy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00245-Edit-2_kuaLb3MlZ.avif?updatedAt=1769022051868",
        "title": "Jeziorne nimfy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00291-Edit_rsRvCnmLX.avif?updatedAt=1769022051876",
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
        "blogPostId": "jez23"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00375_AAGi7Cs0o.avif?updatedAt=1769022051786",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00388-Edit_hhliHSw40.avif?updatedAt=1769022052002",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00475_pii6tzKj5.avif?updatedAt=1769022052013",
        "title": "Jeziorne nimfy",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00499-2_716tLy06e.avif?updatedAt=1769022051924",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/04-22/JEL00592-Edit_0LpjHoSlN.avif?updatedAt=1769022051888",
        "title": "Jeziorne nimfy",
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
        "blogPostId": "jez23"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01387_CnUZ2xJAiP.avif?updatedAt=1769021302206",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01462_zElZU10__.avif?updatedAt=1769021302045",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01498-2_Vj65QWoC8D.avif?updatedAt=1769021302250",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01508-3_EtNQlARsne.avif?updatedAt=1769021302179",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01514_lgFBtRcSS.avif?updatedAt=1769021302172",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01599_odBTeooPN.avif?updatedAt=1769021302207",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01600_rIYjgt82n.avif?updatedAt=1769021302021",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01691-2_XuAWKUM6mk.avif?updatedAt=1769021302171",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01699-2_CieW5TMw0.avif?updatedAt=1769021302006",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01750_vbghwheYV.avif?updatedAt=1769021301069",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01810-2_Zb-T2r3O2.avif?updatedAt=1769021302151",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-18/JEL01832-2_lthossRPV.avif?updatedAt=1769021302128",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL02394_wrU-VA-Mw.avif",
        "title": "Adam",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/05-21/JEL01957_nG-RCxHl-.avif",
        "title": "Adam",
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
        "blogPostId": "adam23"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05550-2_bf8RN8YbP.avif?updatedAt=1769020788800",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05551-2_zrxQ-T9YG.avif?updatedAt=1769020788903",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05683-2_W7IU07awlT.avif?updatedAt=1769020788694",
        "title": "Urodziny Tymona",
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
        "blogPostId": "tym23"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05684-2_GEegcw1iE.avif?updatedAt=1769020788781",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05705-2_zHCdVRGXQ.avif?updatedAt=1769020788503",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05756-2_nKMBQ20pK.avif?updatedAt=1769020788759",
        "title": "Urodziny Tymona",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05769-2_hEuBcZLoI2.avif?updatedAt=1769020788739",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05852-2_B3R43Ztwr.avif?updatedAt=1769020788927",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05852-2_B3R43Ztwr.avif?updatedAt=1769020788927",
        "title": "Urodziny Tymona",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05871-2_KEUD278FG.avif?updatedAt=1769020788978",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05926-2_kvbhEhHLA.avif?updatedAt=1769020788969",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL05953-2_4iAVBqmUJb.avif?updatedAt=1769020789012",
        "title": "Urodziny Tymona",
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
        "blogPostId": "tym23"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/06-30/JEL06048_chxgEgFcF.avif?updatedAt=1769020788945",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09320_XFvnZg8Vn.avif?updatedAt=1769020623195",
        "title": "Wiktoria",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09331_wd_djeGby.avif?updatedAt=1769020624023",
        "title": "Wiktoria",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09391_qLR5keMus.avif?updatedAt=1769020624219",
        "title": "Wiktoria",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09558_EpWVIcnA7.avif?updatedAt=1769020624079",
        "title": "Wiktoria",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street",
            "model"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09574_lhe-hLnHm.avif?updatedAt=1769020624072",
        "title": "Wiktoria",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09583_Rppu1q2Ws.avif?updatedAt=1769020624127",
        "title": "Wiktoria",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model",
            "street"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/08-31/JEL09634_6aG87iuUUO.avif?updatedAt=1769020624035",
        "title": "Wiktoria",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street"
        ],
        "date": "2023-08-31",
        "place": "Reda"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL02080_EpLL25h5L.avif?updatedAt=1769020375692",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL00445_bbNiufdvV.avif?updatedAt=1769020375759",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL00339-Edit_GSZ_eFp4B.avif?updatedAt=1769020375536",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2023/09-28/JEL02921_DBK4cv2RF.avif?updatedAt=1769020375562",
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

    //2024 
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05880-soft_6fyzr7paU.avif?updatedAt=1769020020036",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05888-2ed-soft_0HaTuw7f0.avif?updatedAt=1769020020073",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05898-edit_J8VnnzZSL.avif?updatedAt=1769020020329",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05940-edit-soft_9ofCojKNRr.avif?updatedAt=1769020020355",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06210-soft_V0HoT9K_Oo.avif?updatedAt=1769020020252",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06247-soft_QPxa69bhx.avif?updatedAt=1769020020297",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06262-soft_gjhxwmSf-.avif?updatedAt=1769020020303",
        "title": "Karola",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06614__-UrTshP5.avif?updatedAt=1769019726007",
        "title": "Hi I'm YaO",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06622_eN6Xojx7y.avif?updatedAt=1769019726133",
        "title": "Hi I'm YaO",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06657_lv-MZGtmX0.avif?updatedAt=1769019725801",
        "title": "Hi I'm YaO",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06702_dcbZhcDAxg.avif?updatedAt=1769019725809",
        "title": "Hi I'm YaO",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06762_RO16WPmNN.avif?updatedAt=1769019726085",
        "title": "Hi I'm YaO",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06784_6lkwaOwiX.avif?updatedAt=1769019726177",
        "title": "Hi I'm YaO",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07723_sow0MYuyI.avif?updatedAt=1769019622125",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07740_m6yGBNLRQg.avif?updatedAt=1769019622726",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "landscape"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07741_Cva4f9SCX.avif?updatedAt=1769019622700",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07743_B6m5HejBLE.avif?updatedAt=1769019622702",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07747_cWaSWTlY2.avif?updatedAt=1769019622719",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "people"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07770_2EHobBBql.avif?updatedAt=1769019622773",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "portrait",
            "people"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07773_xj4wb47SUE.avif?updatedAt=1769019622796",
        "title": "Rewa",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "portrait"
        ],
        "date": "2024-04-09",
        "place": "Rewa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08448_9D2Eqxu7n.avif?updatedAt=1769019321494",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08482_oa1XUQIQ7.avif?updatedAt=1769019321699",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08515-3_zLGu1pwKK.avif?updatedAt=1769019321404",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08521-2_qr_avQ6Ju.avif?updatedAt=1769019321647",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554_x44Cbn05r.avif?updatedAt=1769019321702",
        "title": "Zakopane",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "landscape",
            "mountains",
            "travel"
        ],
        "date": "2024-04-15",
        "place": "Zakopane",
        "blogPostId": "zako24"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08554-2_VoKbus7J0i.avif?updatedAt=1769019321918",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08622_U8RQ_hjpB.avif?updatedAt=1769019321853",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08867_APRsUCgx-.avif?updatedAt=1769019321858",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08895_jH70l1ABz.avif?updatedAt=1769019321872",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-08942-2_aAiH3wSrrd.avif?updatedAt=1769019321813",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09062_oH2K2xsga1.avif?updatedAt=1769019321882",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09071_unbdSFM3_.avif?updatedAt=1769019321809",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09111-2_HNnMyz_tLG.avif?updatedAt=1769019322155",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09189-2_xUC_h-CUCI.avif?updatedAt=1769019321855",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09208-2_ztZZK2dglA.avif?updatedAt=1769019321895",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09208-2_ztZZK2dglA.avif?updatedAt=1769019321895",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09217-2_x4A47Qzip.avif?updatedAt=1769019321839",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09223-2_0Rfkmuesu.avif?updatedAt=1769019321817",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09287-3_wBB5jmY6hL.avif?updatedAt=1769019321898",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-15/JEL-09322-3_BaSHQkC7rI.avif?updatedAt=1769019321858",
        "title": "Zakopane",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737-3__e-fYCcAt.avif?updatedAt=1769019064138",
        "title": "Gdynia Street",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737_kg7O-4OKPs.avif?updatedAt=1769019064308",
        "title": "Gdynia Street",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "city"
        ],
        "date": "2024-07-15",
        "place": "Gdynia"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01743_xR4vrvlnY2.avif?updatedAt=1769019064250",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01749_dFUW4L43Bh.avif?updatedAt=1769019064360",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01927_vFKNisuXGB.avif?updatedAt=1769019064306",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041-2_cqwYEy3oZ.avif?updatedAt=1769019064302",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041_WI0URKxTA.avif?updatedAt=1769019064370",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02046_35vzBSvgN.avif?updatedAt=1769019064350",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02151_NAYJ3uQpM.avif?updatedAt=1769019064258",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_ozGSzPSL2.avif?updatedAt=1769019064326",
        "title": "Gdynia Street",
        "category": "street",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02191_EAngBVzx-h.avif?updatedAt=1769018838532",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02425_p8OlBLbIM.avif?updatedAt=1769018838507",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02459_P7uQIAJRN2.avif?updatedAt=1769018838515",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02462_dc5RpSdwu.avif?updatedAt=1769018838547",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02516_7BvmnOcPv.avif?updatedAt=1769018838363",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02556_uEJ020LMpC.avif?updatedAt=1769018838525",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03089_HzhX-IC8t.avif?updatedAt=1769018838539",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03109_YX-RyT6aL.avif?updatedAt=1769018838543",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03209_z9oC0bnmL-.avif?updatedAt=1769018838495",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03254_J46oj9TJ-.avif?updatedAt=1769018838556",
        "title": "Wesele Julii i Macieja",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987_9uv8pgCck.avif?updatedAt=1769018838546",
        "title": "Wesele Julii i Macieja",
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
        "blogPostId": "wedjulmac24"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05095_7XfKgM9-8.avif?updatedAt=1769018687891",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "flora",
            "nature",
            "sunset"
        ],
        "date": "2024-08-11",
        "place": "Błotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_7UN4WQmN8.avif?updatedAt=1769018687969",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "sunset",
            "nature",
            "portrait",
            "flora"
        ],
        "date": "2024-08-11",
        "place": "Błotnik",
        "blogPostId": "sunflowers24"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_xY2hM8Fiq.avif?updatedAt=1769018687893",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "nature",
            "portrait",
            "sunset"
        ],
        "date": "2024-08-11",
        "place": "Błotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05380-2_m0Z6vAZdq.avif?updatedAt=1769018688144",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "portrait",
            "nature",
            "sunset"
        ],
        "date": "2024-08-11",
        "place": "Błotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05404-3_81e2oE3Df.avif?updatedAt=1769018687982",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "sunset",
            "nature",
            "flora"
        ],
        "date": "2024-08-11",
        "place": "Błotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05722-2_HVpjRv5AL.avif?updatedAt=1769018687935",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "flora",
            "nature",
            "sunset",
            "portrait"
        ],
        "date": "2024-08-11",
        "place": "Błotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-5403_XN2DiqcuY.avif?updatedAt=1769018687875",
        "title": "Słoneczniki",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "flora",
            "sunset",
            "nature"
        ],
        "date": "2024-08-11",
        "place": "Błotnik"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-06882_EyWQrdBu-.avif?updatedAt=1769018379225",
        "title": "Santorini",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-07303_spVLnfWzR.avif?updatedAt=1769018379579",
        "title": "Santorini",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-07360_MlYxLx9dq.avif?updatedAt=1769018379502",
        "title": "Santorini",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_adQgL1S4P.avif?updatedAt=1769018379505",
        "title": "Santorini",
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
        "blogPostId": "santo24"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09174_Cx1Sy_APN.avif?updatedAt=1769018379493",
        "title": "Santorini",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09227_73E_H_CPaT.avif?updatedAt=1769018379539",
        "title": "Santorini",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-Oia_oSTd2Ga5u.avif?updatedAt=1769018379511",
        "title": "Santorini",
        "category": "travel",
        "camera": "Oneplus 11",
        "tags": [
            "travel",
            "sunset",
            "water"
        ],
        "date": "2024-09-21",
        "place": "Santorini, Oia"
    },

    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL07893_B7lP2cDzi.avif?updatedAt=1769018379509",
        "title": "Santorini",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09642_FqYk4fA5L.avif?updatedAt=1769018104456",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09682_moXoX-ddm.avif?updatedAt=1769018104375",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09734_Ai2QGD68W.avif?updatedAt=1769018104424",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_t1JgNVJas.avif?updatedAt=1769018104414",
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
        "blogPostId": "dyniowelove24"
    },
    //2024 random
    //2025 
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00187_1V2AsRZW3.avif?updatedAt=1769015078091",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00204_G1hBcE1AU.avif?updatedAt=1769015078222",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00268_r0emDnE39.avif?updatedAt=1769015078060",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00269_9gZdwQOaz.avif?updatedAt=1769015077882",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00274_bukfgN9P8.avif?updatedAt=1769015078102",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00276_dKcUy6ute4.avif?updatedAt=1769015078235",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00281_xzFVfxiAc.avif?updatedAt=1769015078186",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif?updatedAt=1769015078109",
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
        "blogPostId": "daldehog"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-00434_IeeiFHu6S.avif?updatedAt=1769637455617",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-00465_5_ZTu-vD09.avif?updatedAt=1769637455726",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-00490_RgLRkbWaH.avif?updatedAt=1769637455687",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-00780_wpJa5TyKm.avif?updatedAt=1769637455726",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-00821_iwgPeGqt8d.avif?updatedAt=1769637455745",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
     {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-0090_L6mlgTKSD.avif?updatedAt=1769637455630",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Canon EOS 350D",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-26/JEL-0095_8OoWjeKS4.avif?updatedAt=1769637455700",
        "title": "Zuzia - 18",
        "category": "event",
        "camera": "Canon EOS 350D",
        "tags": [
            "client",
        ],
        "date": "2025-01-26",
        "place": "Gdansk Bogatka",
        "blogPostId": "zu25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01417_r_nh87Ew3.avif?updatedAt=1769014577941",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01427-2_wqE-3pDCs9.avif?updatedAt=1769014578352",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01446-3_e-LddVxXHG.avif?updatedAt=1769014578372",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01458_HSidrJYUm.avif?updatedAt=1769014578188",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01489_PLJjJ3AX_t.avif?updatedAt=1769014578302",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01496_L6DQfH3PUW.avif?updatedAt=1769014578399",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01537_y-xOGHY3V.avif?updatedAt=1769014578195",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01578_ndLAxe9MI.avif?updatedAt=1769014578291",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_TcF_jjytB.avif?updatedAt=1769014578263",
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
        "blogPostId": "fizjotusia25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01631_T0quA2-vg.avif?updatedAt=1769014578199",
        "title": "fizjo.tusia",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL02355_2wuG57r6DZ.avif?updatedAt=1769637849051",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03263-2_PFbCds3TZ.avif?updatedAt=1769637848997",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03304_t-2a8M73ET.avif?updatedAt=1769637848739",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03415_p6qmx3degD.avif?updatedAt=1769637848996",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03459_wbDquNd4io.avif?updatedAt=1769637848944",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03546_Qx77qHgvs.avif?updatedAt=1769637848848",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03567_CejZf80cyG.avif?updatedAt=1769637848824",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03745_63uyzEKWO.avif?updatedAt=1769637849008",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL03994_VjF1i_zX7I.avif?updatedAt=1769637849044",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04030_WnYuBMjQG9.avif?updatedAt=1769637848890",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04041_LmXkhP_DG.avif?updatedAt=1769637848921",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04047_r9PdtiB_Im.avif?updatedAt=1769637848913",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04069_sDla8UTEh.avif?updatedAt=1769637848865",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04106_p1fW71PgZ.avif?updatedAt=1769637848859",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04229_yq4KM9e7fv.avif?updatedAt=1769637848905",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04377_un1mvpqEDS.avif?updatedAt=1769637849020",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04890_nj002g-6BY.avif?updatedAt=1769637849089",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL04956_9YfB4DBxlk.avif?updatedAt=1769637849015",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL05174_xgj3XkAP6.avif?updatedAt=1769637848859",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL05191_iyQ-xNoTzZ.avif?updatedAt=1769637849008",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL05240_bodcmS0Ig.avif?updatedAt=1769637848912",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/05-30/JEL05328_L6LNjS9_x.avif?updatedAt=1769637848750",
        "title": "Wesele Klaudii i Pawla",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "client",
            "wedding",
        ],
        "date": "2025-05-30",
        "place": "Rakowiec, Tczew",
        "blogPostId": "weddklapaw25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06535-2_g4oBVYsry.avif?updatedAt=1769014191682",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06557_3rnW-qq9V.avif?updatedAt=1769014191493",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06599_18VCe_tg5.avif?updatedAt=1769014191800",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_AuiU0fTRj.avif?updatedAt=1769014191823",
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
        "blogPostId": "weddkubakas25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06819_kF1NOWlR1.avif?updatedAt=1769014191731",
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
        "blogPostId": "weddkubakas25"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06821_vUatw9-w0.avif?updatedAt=1769014192449",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06822_Vt84N2qd5S.avif?updatedAt=1769014192523",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06824_Ed1Ag7Tev.avif?updatedAt=1769014192433",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06825_pzQ2L5lwD.avif?updatedAt=1769014191726",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06867_R--8JNs28m.avif?updatedAt=1769014192429",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06913_sFigtSzOx.avif?updatedAt=1769014191735",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07095_CU-trPwrW.avif?updatedAt=1769014192437",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07105_-F1bSxyGX.avif?updatedAt=1769014192399",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07109_A1UdLDkb9.avif?updatedAt=1769014191811",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_BjgCqE9dD.avif?updatedAt=1769014192475",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07152_TDu5uz9nVe.avif?updatedAt=1769013803855",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_wTB4VdC0-Z.avif?updatedAt=1769013803803",
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
        "blogPostId": "tom25",
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07170_bvYseJvlX.avif?updatedAt=1769013803850",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07202-Edit_6Gvfz4VZH.avif?updatedAt=1769013803784",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07207_X-SST1TSM.avif?updatedAt=1769013803787",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07230_6w81p6CJV.avif?updatedAt=1769013803872",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07232_W9RgcPeuh.avif?updatedAt=1769013803930",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07233_OCnkHC67R.avif?updatedAt=1769013803835",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07510_y65WZ1o7-.avif?updatedAt=1769013368209",
        "title": "Festiwal Japoński",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event"
        ],
        "date": "2025-07-26",
        "place": "Oliwa"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07513-2_mu7kXO_3m.avif?updatedAt=1769013368206",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07528_Iu64lv4Tz.avif?updatedAt=1769013368231",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07555_d3SW3DVuVE.avif?updatedAt=1769013368466",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07562_i6KUJIh0c8.avif?updatedAt=1769013368378",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07567_YQL4I9tR1.avif?updatedAt=1769013368227",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07571_wI56A7ED5.avif?updatedAt=1769013368411",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07573_i-yagmyNR.avif?updatedAt=1769013368312",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07692_6xv6tmbBlm.avif?updatedAt=1769013368385",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_VdAjKDRHt.avif?updatedAt=1769013368084",
        "title": "Festiwal Japoński",
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
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/random/DSC_0381_glyjCArTCc.avif",
        "title": "Blood Moon",
        "category": "street",
        "camera": "Nikon",
        "tags": [
        ],
        "date": "2025-10-04",
        "place": "Sopot"
    },
    {
        "url": "https://ik.imagekit.io/j3l1n5k1/photography/2025/random/JEL07955-2_3-Nh2-cWy.avif",
        "title": "KAROLA Crew",
        "category": "client",
        "camera": "Sony A6600",
        "tags": [
        ],
        "date": "2025-09-21",
        "place": "Gdynia"
    },
];



// Helper to ensure all photos have IDs
export const getPhotos = (): Photo[] => {
    return photoData.map((photo) => {
        return {
            ...photo,
            id: photo.id || photo.url
        };
    });
};
