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
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764690988/photo/2025/01-23/JEL-00303_e1suzk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691803/photo/2025/04-24/JEL-01621_0.5x_lzgyv2.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851192/photo/portrait/JEL-234_vrx9ob.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851194/photo/portrait/JEL01312_lb74aq.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "architecture"
        ],
        "date": "2025-04-24",
        "place": "Gdansk 100cznia",
        "blogPostId": "0"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773047/photo/2023/08-31/JEL09558-Enhanced-NR_xrisry.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street",
            "model"
        ],
        "date": "2025-04-24",
        "place": "Hotel Murat"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851195/photo/2023/05-21/JEL02394-Enhanced-NR_zdnivs.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model",
            "street"
        ],
        "date": "2025-04-24",
        "place": "Gdynia Marriott",
        "blogPostId": "12"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773056/photo/2023/08-31/JEL09583-Enhanced-NR-Edit_b6dqon.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "model",
            "street"
        ],
        "date": "2025-04-24",
        "place": "Hotel Murat"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772964/photo/2023/04-22/JEL00592-Edit_wd1tca.jpg",
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
        "date": "2025-04-24",
        "place": "Osowa",
        "blogPostId": "10"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851191/photo/2021/07-04/20210704-215_fmxju0.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "abstract"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851183/photo/2022/09-24/JEL-06291_grg3tz.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street",
            "abstract"
        ],
        "date": "2025-04-24",
        "place": "Gdansk Stocznia",
        "blogPostId": "9"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851187/photo/portrait/20210514-IMG_9506-2_gfcm0n.jpg",
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
        "date": "2025-04-24",
        "place": "Wrzeszcz"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851194/photo/portrait/JEL00769-Edit_luvtvl.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Jelitkowo"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851192/photo/portrait/JEL-339_ow2m9b.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851195/photo/2021/10-08/JEL04207_bbsns9.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Politechnika Gdanska",
        "blogPostId": "4"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851196/photo/2021/10-08/JEL04375_dhcuzo.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Politechnika Gdanska"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851187/photo/2021/07-04/20210704-14_i0gbju.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Olowianka",
        "blogPostId": "2"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851190/photo/portrait/IMG_8598-2_yefz9k.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Jastarnia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851189/photo/2021/07-04/20210704-214_ild4yu.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "abstract"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851193/photo/2023/05-21/JEL01957_fn38q5.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851195/photo/portrait/JEL02921_cp4vyv.jpg",
        "title": "Turkey",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "fashion",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Turcja Pamukkale"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773061/photo/2023/08-31/JEL09634-Enhanced-NR-Edit_zuhcpq.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "street"
        ],
        "date": "2025-04-24",
        "place": "Hotel Murat"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851185/photo/portrait/JEL-09570-2_fcnjz5.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Jelitkowo"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851191/photo/2023/04-22/JEL00291-Edit_pv1tly.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Osowa",
        "blogPostId": "10"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851184/photo/portrait/JEL-07129_mki6g8.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Osowa ZSO nr2",
        "blogPostId": "0"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773042/photo/2023/08-31/JEL09391-Enhanced-NR_vtyrct.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Hotel Murat"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772937/photo/2023/04-22/JEL00245-Edit-2_noazvs.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851191/photo/portrait/IMG_8409-Edit-2-1_zwqif1.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851183/photo/2022/09-24/JEL-6364-2_rzxsob.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session"
        ],
        "date": "2025-04-24",
        "place": "Gdansk Stocznia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776724/photo/2023/06-30/JEL05854-2_y1vop1.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776670/photo/2023/06-30/JEL05756-2_j8rf4x.jpg",
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
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851188/photo/portrait/006-Edit-1_qbrvgt.jpg",
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
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851191/photo/2023/04-22/JEL00512-Edit_e76dw7.jpg",
        "title": "Osowa",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772977/photo/2023/05-18/JEL01691-2_d11ptj.jpg",
        "title": "Urbex",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "urban"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764775865/photo/2023/06-30/JEL05683-2_o743tj.jpg",
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
        "date": "2025-04-24",
        "place": "Osowa",
        "blogPostId": "13"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776766/photo/2023/06-30/JEL05953-2_nqgkl4.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "event"
        ],
        "date": "2025-04-24",
        "place": "Osowa",
        "blogPostId": "13"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772933/photo/2023/04-22/JEL00151_s2ebpk.jpg",
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
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851187/photo/portrait/20210625-70_beqdke.jpg",
        "title": "",
        "category": "portrait",
        "camera": "Canon EOS 350D",
        "tags": [
            "portrait",
            "session",
            "black-and-white",
            "event"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773005/photo/2023/05-18/JEL01462_tyggqw.jpg",
        "title": "Urbex",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "portrait",
            "session",
            "urban",
            "black-and-white"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412489/photo/2022/08-28/JEL-04078-2_slhu3g.jpg",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "client",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412489/photo/2022/08-28/JEL-03957_dz9ffp.jpg",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "client",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412489/photo/2022/08-28/JEL-03921_dsuck3.jpg",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "client",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412489/photo/2022/08-28/JEL-03600_qrmzfo.jpg",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "client",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412489/photo/2022/08-28/JEL-03624_p6861x.jpg",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "client",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412489/photo/2022/08-28/JEL-04105_mrq0zp.jpg",
        "title": "Baltic Sail",
        "category": "event",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "client",
            "professional"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851296/photo/other/JEL--2_tqgrhm.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "minimal"
        ],
        "date": "2025-04-24",
        "place": "Oliwa Wave"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851297/photo/other/IMG20230706195653_kmrdhu.jpg",
        "title": "",
        "category": "various",
        "camera": "Oneplus 11",
        "tags": [
            "various",
            "city",
            "street",
            "abstract"
        ],
        "date": "2025-04-24",
        "place": "Oliwa OBC"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851314/photo/other/JEL02080_dhrcbk.jpg",
        "title": "Turkey",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "mountains",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Turcja, Alanya"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851284/photo/2021/07-04/20210704-132_fggrzd.jpg",
        "title": "Urbex2",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "architecture",
            "minimal"
        ],
        "date": "2025-04-24",
        "place": "Rusocin"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851298/photo/other/JEL00445_l9tczy.jpg",
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
        "date": "2025-04-24",
        "place": "Turcja"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851299/photo/2022/08-08/JEL--4_hyvzta.jpg",
        "title": "Berlin",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "abstract",
            "macro"
        ],
        "date": "2025-04-24",
        "place": "Berlin Muzeum"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772986/photo/2023/05-18/JEL01750-Enhanced-NR-Edit_itqgxa.jpg",
        "title": "Urbex",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "nature",
            "forest"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851344/photo/other/JEL09773-Edit_kpfz6w.jpg",
        "title": "Pieklo",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "minimal",
            "landscape"
        ],
        "date": "2025-04-24",
        "place": "Pieklo"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851323/photo/other/JEL-06694_qgrwly.jpg",
        "title": "Gdansk",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851290/photo/other/IMG_8867-Edit-1_rzgmzr.jpg",
        "title": "Sopot",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "abstract",
            "street",
            "night"
        ],
        "date": "2025-04-24",
        "place": "Sopot"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779735/photo/2022/09-24/JEL-06245-2_xbokct.jpg",
        "title": "Gdansk Stocznia",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "minimal"
        ],
        "date": "2025-04-24",
        "place": "Gdansk Stocznia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851277/photo/other/20210428-IMG_8960_bj3poq.jpg",
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
        "date": "2025-04-24",
        "place": "Gdansk Ergo Arena"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851327/photo/other/JEL-07765_tjkf1t.jpg",
        "title": "Dom",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "food"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851283/photo/2021/07-04/20210704-109_oxqmxb.jpg",
        "title": "Urbex",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "nature",
            "flora",
            "forest"
        ],
        "date": "2025-04-24",
        "place": "Rusocin"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851292/photo/other/IMG_8877-2_uh6e2j.jpg",
        "title": "Sopot",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "street",
            "people",
            "night"
        ],
        "date": "2025-04-24",
        "place": "Sopot"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851282/photo/2021/07-04/20210704-73_mprujq.jpg",
        "title": "Urbex",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various"
        ],
        "date": "2025-04-24",
        "place": "Olowianka"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851281/photo/other/20210520-IMG_9651_wel0nl.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "landscape",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851318/photo/other/JEL02669_cxouyn.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "night",
            "lightpainting",
            "abstract"
        ],
        "date": "2025-04-24",
        "place": "Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851304/photo/other/JEL01206_rrhw5x.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "people",
            "city",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Gdansk Gora Gradowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851334/photo/other/JEL08353-Enhanced-NR_vekuso.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "animal",
            "macro",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Taborz"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851302/photo/other/JEL01038-Edit_gsviqd.jpg",
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
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851325/photo/other/JEL-06709_uh6bi0.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "city",
            "urban",
            "nature",
            "architecture"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851317/photo/other/JEL02554_qeqxaq.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "street"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851293/photo/other/IMG_20230801_102747_ncfweo.jpg",
        "title": "",
        "category": "various",
        "camera": "Oneplus 11",
        "tags": [
            "various",
            "people",
            "street",
            "fog"
        ],
        "date": "2025-04-24",
        "place": "Rumia SKM"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851332/photo/other/JEL08158-1_fqjbbg.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "night",
            "rain"
        ],
        "date": "2025-04-24",
        "place": "Osowa Skatepark"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851335/photo/other/JEL08884_felzem.jpg",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "travel"
        ],
        "date": "2025-04-24",
        "place": "Torun"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851287/photo/other/IMG_0817-2_zyzmve.jpg",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "abstract",
            "forest",
            "night",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Jelitkowo"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783369/photo/2021/08-13/JEL02401-5_s77qol.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "street",
            "city",
            "night"
        ],
        "date": "2025-04-24",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851337/photo/other/JEL08891_cp3qih.jpg",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "travel",
            "architecture",
            "city"
        ],
        "date": "2025-04-24",
        "place": "Torun"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851328/photo/other/JEL-08010_infak9.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "documentary"
        ],
        "date": "2025-04-24",
        "place": "Gdansk, Plenum"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851303/photo/other/JEL01174-2_xxcfms.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "documentary",
            "street",
            "people"
        ],
        "date": "2025-04-24",
        "place": "Morena"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851285/photo/2021/07-04/20210704-169_skvimv.jpg",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "urban"
        ],
        "date": "2025-04-24",
        "place": "Rusocin"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851286/photo/other/IMG_0816-3_vd8qkf.jpg",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "night",
            "forest",
            "abstract"
        ],
        "date": "2025-04-24",
        "place": "Jelitkowo"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773529/photo/2022/08-08/JEL-01386_vgm8ci.jpg",
        "title": "",
        "category": "travel",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "people",
            "architecture",
            "street"
        ],
        "date": "2025-04-24",
        "place": "Berlin"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851293/photo/2021/05-01/IMG_9197-2_i4elrj.jpg",
        "title": "",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "nature",
            "people",
            "landscape"
        ],
        "date": "2025-04-24",
        "place": "Leba Wydmy",
        "blogPostId": "1"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851280/photo/other/20210514-IMG_9477_vf3u9f.jpg",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "urban"
        ],
        "date": "2025-04-24",
        "place": "Wrzeszcz"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851333/photo/other/JEL08347_eeox2j.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "animal"
        ],
        "date": "2025-04-24",
        "place": "Taborz"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851279/photo/other/20210514-IMG_9476_a4rga3.jpg",
        "title": "Urbex",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "urban"
        ],
        "date": "2025-04-24",
        "place": "Wrzeszcz"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851341/photo/2021/05-01/JEL-9188_nfwwgq.jpg",
        "title": "",
        "category": "various",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "landscape",
            "travel",
            "nature",
            "people"
        ],
        "date": "2025-04-24",
        "place": "Leba"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851339/photo/2021/05-01/JEL-9171_qstfsr.jpg",
        "title": "",
        "category": "travel",
        "camera": "Canon EOS 350D",
        "tags": [
            "various",
            "nature",
            "forest"
        ],
        "date": "2025-04-24",
        "place": "Leba"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773017/photo/2023/05-18/JEL01514_nv1hnr.jpg",
        "title": "Urbex",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "people"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851289/photo/other/IMG_8332-2_sp7abp.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "nature",
            "landscape",
            "night"
        ],
        "date": "2025-04-24",
        "place": "Sopot"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851319/photo/2021/10-08/JEL04394-3_mcmfat.jpg",
        "title": "",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "urban",
            "architecture",
            "black-and-white"
        ],
        "date": "2025-04-24",
        "place": "Politechnika Gdanska"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772994/photo/2023/05-18/JEL01832-2_c4xfwr.jpg",
        "title": "Urbex",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "minimal",
            "nature"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851321/photo/other/JEL-5655-2_vnnhxg.jpg",
        "title": "",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "architecture",
            "urban",
            "street",
            "city",
            "people",
            "black-and-white"
        ],
        "date": "2025-04-24",
        "place": "Sopot"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851341/photo/other/JEL09638_yoxyjd.jpg",
        "title": "",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "nature",
            "animal"
        ],
        "date": "2025-04-24",
        "place": "Gdansk Olowianka"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851294/photo/other/IMG_20230917_155207_x9onfb.jpg",
        "title": "",
        "category": "black-and-white",
        "camera": "Oneplus 11",
        "tags": [
            "various",
            "black-and-white",
            "street",
            "city"
        ],
        "date": "2025-04-24",
        "place": "Osowa PKP"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773476/photo/2022/08-08/JEL-00667-2_veyqbu.jpg",
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
        "date": "2025-04-24",
        "place": "Berllin"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772990/photo/2023/05-18/JEL01810-2_jt0mfw.jpg",
        "title": "Urbex",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "nature",
            "minimal"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773535/photo/2022/08-08/JEL-1466-EDIT4_u50jbs.png",
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
        "date": "2025-04-24",
        "place": "Berlin",
        "blogPostId": "7"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772956/photo/2023/04-22/JEL00475_kcfeib.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "nature",
            "forest"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773012/photo/2023/05-18/JEL01508-3_mlsmcd.jpg",
        "title": "Urbex",
        "category": "black-and-white",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "urban"
        ],
        "date": "2025-04-24",
        "place": "Kolano"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851334/photo/other/JEL08160-Edit-1_c9k5xd.jpg",
        "title": "",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "various",
            "black-and-white",
            "street",
            "night"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851325/photo/other/JEL-07389_hfxgxo.jpg",
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
        "date": "2025-04-24",
        "place": "Oliwa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781309/photo/2021/05-01/IMG_9178_rpj3vn.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781286/photo/2021/05-01/IMG_9303-Edit_rcoix9.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781266/photo/2021/05-01/IMG_9301-2_yqp2ai.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781243/photo/2021/05-01/IMG_9183-3_hc0xux.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781330/photo/2021/05-01/IMG_9281_xxwye7.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781487/photo/2021/05-01/IMG_9197_beawix.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764781352/photo/2021/05-01/IMG_9291-3_yedjt2.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782610/photo/2021/07-04/20210704-37_n3cink.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782637/photo/2021/07-04/20210704-51_ce6ohd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782584/photo/2021/07-04/20210704-35_ng6cpe.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782559/photo/2021/07-04/20210704-29_kgy3lw.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782662/photo/2021/07-04/20210704-55_hmustj.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782735/photo/2021/07-04/20210704-137_kgbqdt.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782761/photo/2021/07-04/20210704-162_rhld2w.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782788/photo/2021/07-04/20210704-182_gvet10.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782815/photo/2021/07-04/20210704-188_gmtb0k.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782688/photo/2021/07-04/20210704-71_a4libg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782841/photo/2021/07-04/20210704-193_s45a98.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782869/photo/2021/07-04/20210704-217_0.75x_hkwzep.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783085/photo/2021/08-13/JEL02312_euplsx.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783478/photo/2021/08-13/JEL02425-2_qmikus.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783030/photo/2021/08-13/JEL02430-3_e1j1sb.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705768706/photo/2021/08-13/JEL02460-2_ujjrye.jpg",
        "title": "Jarmark",
        "category": "various",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851316/photo/2021/08-13/JEL02401_rrekuj.jpg",
        "title": "Jarmark",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "night"
        ],
        "date": "2021-08-13",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783450/photo/2021/08-13/JEL02411_slbsoi.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783422/photo/2021/08-13/JEL02408-2_omnshm.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783395/photo/2021/08-13/JEL02403-Edit_w3g30b.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783140/photo/2021/08-13/JEL02364-2_kwptyw.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783112/photo/2021/08-13/JEL02319-2_gap6pk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783057/photo/2021/08-13/JEL02434-2_uiqk5f.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783723/photo/2021/10-08/JEL04207-2_ocp6cd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783695/photo/2021/10-08/JEL04193-2_ybbbxt.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783659/photo/2021/10-08/JEL04185-Edit_czqubr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783630/photo/2021/10-08/JEL04159_ndmof9.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783567/photo/2021/10-08/JEL04078-Edit_kndhpv.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783597/photo/2021/10-08/JEL04091-Edit_tfbynt.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783850/photo/2021/10-08/JEL04317_nyc4vf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783818/photo/2021/10-08/JEL04316_kgmgpf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783754/photo/2021/10-08/JEL04282-2_q5g0jb.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783787/photo/2021/10-08/JEL04285_jok9wd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764783540/photo/2021/10-08/JEL04381-Edit_zaiy31.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782264/photo/2021/12-18/JEL04765_zs1bg7.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782288/photo/2021/12-18/JEL04767-Edit_rkp5lk.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782312/photo/2021/12-18/JEL04773-Edit_di77kf.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "abstract",
            "street"
        ],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782337/photo/2021/12-18/JEL04823-Edit_qbuzrl.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782362/photo/2021/12-18/JEL04881-2_rbcvz9.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782386/photo/2021/12-18/JEL04883-2_bdabs2.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782411/photo/2021/12-18/JEL04886_xhgfs5.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764782436/photo/2021/12-18/JEL04889_rvr5f3.jpg",
        "title": "Wrzeszcz - Letnica",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [],
        "date": "2021-12-18",
        "place": "Gdansk"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773390/photo/2022/07-09/JEL-8352-2_cdx34c.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773412/photo/2022/07-09/JEL-8434-2_nynxg1.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773418/photo/2022/07-09/JEL-08467-2_rkjwwq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773423/photo/2022/07-09/JEL-08471_woxv6o.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773428/photo/2022/07-09/JEL-08472-2_xx3pcf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773401/photo/2022/07-09/JEL-08413-2_rdegdl.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773397/photo/2022/07-09/JEL-08363_kvbrkg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773385/photo/2022/07-09/JEL-08318_fryore.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773381/photo/2022/07-09/JEL-08307-2_slo9yo.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773368/photo/2022/07-09/JEL-08271-2_byewny.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773363/photo/2022/07-09/JEL-08267_tzpn8w.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773357/photo/2022/07-09/JEL-08250-2_xytxeh.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773351/photo/2022/07-09/JEL-08242_l9zzar.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773344/photo/2022/07-09/JEL-08235-2_hbmdto.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773316/photo/2022/07-09/JEL-09083-2_rey6ly.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773310/photo/2022/07-09/JEL-09051_q1kqpz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773293/photo/2022/07-09/JEL-08491_vsyjj8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773288/photo/2022/07-09/JEL-08489_rpthja.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773299/photo/2022/07-09/JEL-08779_wm80fw.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773283/photo/2022/07-09/JEL-08475_xzn8zz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705768708/photo/2022/07-09/JEL-08914-2_aikjtz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705768708/photo/2022/07-09/JEL08950-Edit_hij0xt.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773407/photo/2022/07-09/JEL-08416_diasym.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773339/photo/2022/07-09/JEL-09111_wfdgte.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773327/photo/2022/07-09/JEL-09092_w1ybba.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773333/photo/2022/07-09/JEL-09103_kadtjy.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773322/photo/2022/07-09/JEL-09088_qex2zz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773304/photo/2022/07-09/JEL-09046_rupshb.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773598/photo/2022/08-08/JEL-00178_typqlk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773604/photo/2022/08-08/JEL-00203-3_dty1jc.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773610/photo/2022/08-08/JEL-00226-3_mmgjga.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773617/photo/2022/08-08/JEL-00227-2_cgkai6.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773622/photo/2022/08-08/JEL-00228-2_rd9dtp.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773627/photo/2022/08-08/JEL-00245_iclrnr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773435/photo/2022/08-08/JEL-00290_k36jwl.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773440/photo/2022/08-08/JEL-00349-2_gd29h8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773446/photo/2022/08-08/JEL-00408_mcjjal.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773451/photo/2022/08-08/JEL-00410_myjap3.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773457/photo/2022/08-08/JEL-00455-2_vrdgrp.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773465/photo/2022/08-08/JEL-00504_csk2iw.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773469/photo/2022/08-08/JEL-00580_2_w8gskg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773482/photo/2022/08-08/JEL-00694_zqaoun.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773489/photo/2022/08-08/JEL-00932_cyiikl.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773494/photo/2022/08-08/JEL-01132-2_g1qeao.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773501/photo/2022/08-08/JEL-01134-2_z03kct.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773506/photo/2022/08-08/JEL-01162_s7qx7k.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773512/photo/2022/08-08/JEL-01167_htwwwz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773518/photo/2022/08-08/JEL-01244-2_pamy7h.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773524/photo/2022/08-08/JEL-01310-5_euprrd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773540/photo/2022/08-08/JEL-01561_w6yz4i.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773546/photo/2022/08-08/JEL-01572_bgk65v.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773552/photo/2022/08-08/JEL-01614-2_bcsbs1.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773564/photo/2022/08-08/JEL-01705-2_hwjgsg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773570/photo/2022/08-08/JEL-01734_xfneuq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773576/photo/2022/08-08/JEL-01744-3_va6lnn.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773582/photo/2022/08-08/JEL-01853-2_mtc6gm.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773587/photo/2022/08-08/JEL-01995-2_yt4n9o.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773558/photo/2022/08-08/JEL-1657-2_dybuzj.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412490/photo/2022/08-28/JEL-03921_dsuck3.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412491/photo/2022/08-28/JEL-03957_dz9ffp.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780250/photo/2022/08-28/JEL-04073_yj63eu.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705412491/photo/2022/08-28/JEL-04078-2_slhu3g.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780267/photo/2022/08-28/JEL-04147-2_mcyleb.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780285/photo/2022/08-28/JEL-04768_mcmfee.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780302/photo/2022/08-28/JEL-04857_hkgj7h.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780320/photo/2022/08-28/JEL-04983_wdtcbx.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780337/photo/2022/08-28/JEL-04999_wqvjjk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780354/photo/2022/08-28/JEL-05007_gfwmr0.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780373/photo/2022/08-28/JEL-05127_drvirp.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780389/photo/2022/08-28/JEL-05182_gjzye4.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779685/photo/2022/09-24/JEL-06224_fbc7ub.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779718/photo/2022/09-24/JEL-06242-neo_amzdtv.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779835/photo/2022/09-24/JEL-06335_cvsivu.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780126/photo/2022/09-24/JEL-06348_d0eve0.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779886/photo/2022/09-24/JEL-06428-2_rdcmbu.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779902/photo/2022/09-24/JEL-06443-2_mgt6xp.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779769/photo/2022/09-24/JEL-06537-neo_r4n5ps.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779785/photo/2022/09-24/JEL-06563-2_hdyv0v.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780171/photo/2022/09-24/JEL-06567_d2fqiy.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779653/photo/2022/09-24/JEL-6193-2_z37r0v.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779668/photo/2022/09-24/JEL-6198-2_xraowm.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779701/photo/2022/09-24/JEL-6234-2_m6m5cg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779819/photo/2022/09-24/JEL-6324-2_vfhp6g.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780144/photo/2022/09-24/JEL-6324-3_pnxnq4.png",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779851/photo/2022/09-24/JEL-6420-2_igtujj.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779868/photo/2022/09-24/JEL-6424-2_jntnna.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780073/photo/2022/09-24/JEL-6444_2_mmzjwk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764780108/photo/2022/09-24/JEL-6454-2_nfmoij.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779752/photo/2022/09-24/JEL-6483-2_h6u2hq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764779803/photo/2022/09-24/JEL-6576-2_xkn1ug.jpg",
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
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772924/photo/2023/04-22/JEL00071_ygfkjr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772928/photo/2023/04-22/JEL00088_tf9zf4.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772942/photo/2023/04-22/JEL00291-Edit_axvmgs.jpg",
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
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772946/photo/2023/04-22/JEL00375-Enhanced-NR_v8esex.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772951/photo/2023/04-22/JEL00388-Edit_qrdji7.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772960/photo/2023/04-22/JEL00499-2_bdyxpr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773022/photo/2023/05-18/JEL01599_x8utph.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773009/photo/2023/05-18/JEL01498-2_blxoae.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772999/photo/2023/05-18/JEL01387-Edit_o30oph.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772980/photo/2023/05-18/JEL01699-2_fpc04e.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772971/photo/2023/05-18/JEL01600_cxkz8p.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764775853/photo/2023/06-30/JEL05551-2_roqa3e.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776792/photo/2023/06-30/JEL05550-2_cchrlr.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776683/photo/2023/06-30/JEL05769-2_ebngzt.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764775879/photo/2023/06-30/JEL05684-2_osivo3.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776518/photo/2023/06-30/JEL05705-2_tqhqt0.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776710/photo/2023/06-30/JEL05852-2_sqgxsx.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776736/photo/2023/06-30/JEL05871-2_nqfenh.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776697/photo/2023/06-30/JEL05845-2_kq9izr.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776753/photo/2023/06-30/JEL05926-2_vordii.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "portrait",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764776778/photo/2023/06-30/JEL06048_ghuyyz.jpg",
        "title": "Urodziny Tymona",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "event",
            "black-and-white",
            "party"
        ],
        "date": "2023-05-21",
        "place": "Gdansk Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773051/photo/2023/08-31/JEL09574-Enhanced-NR_oiqjay.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773036/photo/2023/08-31/JEL09320-Enhanced-NR_z2xqfi.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764773038/photo/2023/08-31/JEL09331-Enhanced-NR_yfxqg7.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772428/photo/2024/02-25/JEL-06262-soft_xrwzph.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772427/photo/2024/02-25/JEL-06247-soft_gxxohd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772424/photo/2024/02-25/JEL-05940-edit-soft_rhccsf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772426/photo/2024/02-25/JEL-06210-soft_bxfciz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772419/photo/2024/02-25/JEL-05880-soft_wao75j.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772423/photo/2024/02-25/JEL-05898-edit_ynidvf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772421/photo/2024/02-25/JEL-05888-2ed-soft_zrlfkm.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772476/photo/2024/03-12/JEL-06702_ffdggi.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772474/photo/2024/03-12/JEL-06614_bj1m81.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772479/photo/2024/03-12/JEL-06762_kncbhk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772473/photo/2024/03-12/JEL-06622_eu5cpi.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772481/photo/2024/03-12/JEL-06784_ajntdm.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772475/photo/2024/03-12/JEL-06657_ivpaan.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772518/photo/2024/04-09/JEL-07740_dsvagh.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772516/photo/2024/04-09/JEL-07723_qzliwq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772521/photo/2024/04-09/JEL-07741_x5qjao.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772535/photo/2024/04-09/JEL-07791_xxilhi.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772526/photo/2024/04-09/JEL-07747_ym4gxx.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772529/photo/2024/04-09/JEL-07770_qa5aah.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772532/photo/2024/04-09/JEL-07773_qyfyid.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772582/photo/2024/04-15/JEL-08554-edit2_axabw4.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772584/photo/2024/04-15/JEL-08554-edit3_b2zf2h.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772628/photo/2024/04-15/JEL-09322-3_q8pgpd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772626/photo/2024/04-15/JEL-09287-3_hffgsw.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772621/photo/2024/04-15/JEL-09223-2_dlysmo.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772619/photo/2024/04-15/JEL-09217-2_bxo6yg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772616/photo/2024/04-15/JEL-09208-2_uidwsr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772613/photo/2024/04-15/JEL-09208_ely7bl.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772610/photo/2024/04-15/JEL-09189-2_q6saih.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772603/photo/2024/04-15/JEL-09071_pkspfg.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772597/photo/2024/04-15/JEL-08942-2_afwsxq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772593/photo/2024/04-15/JEL-08895_ajktkx.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772591/photo/2024/04-15/JEL-08867_os7l3x.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772587/photo/2024/04-15/JEL-08622_ms8inx.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772606/photo/2024/04-15/JEL-09111-2_bw3yyk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772601/photo/2024/04-15/JEL-09062_hadxvf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772572/photo/2024/04-15/JEL-08482_edpfn7.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772574/photo/2024/04-15/JEL-08515-3_otnjxf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772570/photo/2024/04-15/JEL-08448_lzhmz8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772651/photo/2024/07-15/JEL-02041_pacx5g.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "sunset"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772654/photo/2024/07-15/JEL-02041-2_jed0yf.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772645/photo/2024/07-15/JEL01892_c1gmtp.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772648/photo/2024/07-15/JEL-01927_sk5fn8.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772639/photo/2024/07-15/JEL-01743_eodvyp.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772642/photo/2024/07-15/JEL-01749_dhhk7x.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "architecture",
            "city"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772633/photo/2024/07-15/JEL-01737_ilp2tf.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "city"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772636/photo/2024/07-15/JEL-01737-3_jxdcrf.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "city",
            "black-and-white"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772658/photo/2024/07-15/JEL-02046_wxnoeu.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "various",
        "camera": "Sony A6600",
        "tags": [
            "black-and-white",
            "people",
            "street",
            "water"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772662/photo/2024/07-15/JEL-02151_ij4snn.jpg",
        "title": "Krzychu i Adam - Session",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "city",
            "night"
        ],
        "date": "2024-07-15",
        "place": "Gdansk Osowa, Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772797/photo/2024/07-27/JEL03987-Edit-538_mfpqln.jpg",
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
        "place": "Kartuzy?",
        "blogPostId": "20"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772801/photo/2024/07-27/JEL02191-15_ojbyvf.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772806/photo/2024/07-27/JEL02425-101_4_ibfghd.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772813/photo/2024/07-27/JEL02462-113_3_0.75x_irbs98.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772787/photo/2024/07-27/JEL03109-299_4_qbcbin.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772795/photo/2024/07-27/JEL03254-373_c41blz.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772772/photo/2024/07-27/JEL02459-112_5_shjqkx.jpg",
        "title": "Wesele Julii i Macka",
        "category": "event",
        "camera": "Nikon",
        "tags": [
            "event",
            "client",
            "wedding"
        ],
        "date": "2024-07-27",
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772780/photo/2024/07-27/JEL02556-149_jq9hur.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772776/photo/2024/07-27/JEL02516-133_liwdjj.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772790/photo/2024/07-27/JEL03209-342_kmwnsb.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772783/photo/2024/07-27/JEL03089-293_pifg2n.jpg",
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
        "place": "Kartuzy?"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692641/photo/2024/08-11/JEL-05112_0.5x_mxkoz8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692637/photo/2024/08-11/JEL-05102_0.5x_ugtxv2.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692643/photo/2024/08-11/JEL-05380-2_0.5x_pafbwa.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692645/photo/2024/08-11/JEL-5403_0.5x_tnr8fx.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692649/photo/2024/08-11/JEL-05404-3_0.5x_eqfhny.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692652/photo/2024/08-11/JEL-05722-2_0.5x_g6lvpb.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692635/photo/2024/08-11/JEL-05095_0.5x_q23txk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692934/photo/2024/09-21/JEL-09169_x6yqnc.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692938/photo/2024/09-21/JEL-09174_kj7nfb.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692919/photo/2024/09-21/JEL-09227_xlcgh4.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692923/photo/2024/09-21/JEL--2_smakri.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692928/photo/2024/09-21/JEL-07360_cyvqez.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692925/photo/2024/09-21/JEL06882_zooj2j.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692931/photo/2024/09-21/JEL07893-Edit_zjl6qr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764692943/photo/2024/09-21/JEL-Oia_0.75x_hn284h.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764693202/photo/2024/10-19/JEL-09787-2_0.75x_lkpggu.jpg",
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
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764693206/photo/2024/10-19/JEL-09642_0.75x_kdi8j8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764693209/photo/2024/10-19/JEL-09682_0.75x_sb0glv.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764693214/photo/2024/10-19/JEL-09734_0.75x_qs7xho.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764690981/photo/2025/01-23/JEL-00268_y2yhx8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764690982/photo/2025/01-23/JEL-00269_pzmvti.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764690980/photo/2025/01-23/JEL-00204_w3pitl.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764690983/photo/2025/01-23/JEL-00274_zohk4w.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764690979/photo/2025/01-23/JEL-00187_im3ogc.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691792/photo/2025/04-24/JEL-01458_0.5x_fcctdn.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691801/photo/2025/04-24/JEL-01578_0.5x_dklrsk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691786/photo/2025/04-24/JEL-01417_0.5x_a4d8hn.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691788/photo/2025/04-24/JEL-01427-2_0.5x_xi9lb7.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691790/photo/2025/04-24/JEL-01446-3_0.5x_hmdoea.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691796/photo/2025/04-24/JEL-01496_0.5x_cpro08.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691798/photo/2025/04-24/JEL-01537_0.5x_vvrt7t.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691794/photo/2025/04-24/JEL-01489_0.5x_h2d0uq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764691785/photo/2025/04-24/JEL-01631_0.5x_gg1nve.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716269/photo/2025/06-28/JEL06535-2_q5t5g3.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716271/photo/2025/06-28/JEL06557_c508h8.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716275/photo/2025/06-28/JEL06668_dinsdv.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716274/photo/2025/06-28/JEL06599_fsoizk.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716289/photo/2025/06-28/JEL06867_cc0jvd.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716292/photo/2025/06-28/JEL06913_q7o2tv.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716287/photo/2025/06-28/JEL06825_ov7nja.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716280/photo/2025/06-28/JEL06821_g342z2.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716282/photo/2025/06-28/JEL06822_d8sjak.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716284/photo/2025/06-28/JEL06824_pyjflt.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716297/photo/2025/06-28/JEL07105_s4r1qf.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716294/photo/2025/06-28/JEL07095_nm367d.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716299/photo/2025/06-28/JEL07109_s2sidu.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772221/photo/2025/07-05/JEL07202-Edit_eqsnad.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772222/photo/2025/07-05/JEL07207_n51pxi.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772222/photo/2025/07-05/JEL07232_kvpmkw.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772222/photo/2025/07-05/JEL07233_r2wocj.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772223/photo/2025/07-05/JEL07230_ksoido.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772220/photo/2025/07-05/JEL07170_aggcru.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772220/photo/2025/07-05/JEL07152_f0etyz.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764772220/photo/2025/07-05/JEL07157-Edit_feafxv.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716675/photo/2025/07-26/JEL07510_0.75x_yldbpq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716680/photo/2025/07-26/JEL07528_0.75x_shij3h.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716584/photo/2025/07-26/JEL07513-2_ksnqwr.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716590/photo/2025/07-26/JEL07555_qmh7nc.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716595/photo/2025/07-26/JEL07562_q3w9uj.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716599/photo/2025/07-26/JEL07567_gehq0f.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716689/photo/2025/07-26/JEL07573_0.75x_sg2lad.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716685/photo/2025/07-26/JEL07571_0.75x_q51ylo.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716694/photo/2025/07-26/JEL07692_0.75x_qeupyn.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1764716672/photo/2025/07-26/JEL07730_0.75x_wruhv7.jpg",
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
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766934168/photo/2020/IMG_20201225_124421_ouatxi.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2020-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766943996/photo/2021/IMG_20210202_221914_xj8ukj.jpg",
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
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766943995/photo/2021/IMG_20210419_171244_ive2yv.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "abstract",
            "food",
            "water",
            "lifestyle"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1705851196/photo/portrait/JEL03276_ivhb2x.jpg",
        "title": "Angel",
        "category": "portrait",
        "camera": "Sony A6600",
        "tags": [
            "boudoir",
            "portrait",
            "session",
            "model",
            "fineart",
            "flora"
        ],
        "date": "2025-04-24",
        "place": "Osowa"
    },
    {
        "url": "",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944197/photo/2022/IMG_20220915_180436_sizejc.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2022-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944195/photo/2022/IMG_20220915_180434_wfq2qa.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "people",
            "city"
        ],
        "date": "2022-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944193/photo/2022/IMG_20220911_203659_xfzexb.jpg",
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
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944190/photo/2022/IMG_20220910_223528_mfh7of.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "lifestyle",
            "food",
            "water"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944189/photo/2022/IMG_20220903_193407_uovsts.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "sunset",
            "city",
            "architecture"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766943995/photo/2021/IMG_20210116_200844_dmaid4.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "snow",
            "night"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944186/photo/2022/IMG_20220901_224311_tu5f5w.jpg",
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
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944185/photo/2022/IMG_20220901_221218_qb5iqm.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "night",
            "lightpainting"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944183/photo/2022/IMG_20220901_221207_muy3yl.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "street",
            "night",
            "lightpainting"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944180/photo/2022/IMG_20220901_220648_kjqypp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "people",
            "event",
            "street",
            "night"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944179/photo/2022/IMG_20220901_214825_gicknk.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "event",
            "people"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944176/photo/2022/IMG_20220901_210107_kp5phk.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "food",
            "people"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944175/photo/2022/IMG_20220827_093008_y6u1fu.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "flora",
            "city",
            "macro"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944172/photo/2022/IMG_20220801_214743_kfquv0.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "sky",
            "city"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944170/photo/2022/IMG_20220720_225313_uamih6.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "macro",
            "animal"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944168/photo/2022/IMG_20220720_225208_gmra5d.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "animal",
            "macro"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944167/photo/2022/IMG_20220720_003836_dths5x.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "abstract",
            "city"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944166/photo/2022/IMG_20220719_202755_gzwsxt.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "city"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944162/photo/2022/IMG_20220715_231446_ni0kbf.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944161/photo/2022/IMG_20220715_230543__01_ncqx8h.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944159/photo/2022/IMG_20220715_225050_iga46n.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944157/photo/2022/IMG_20220715_222530_an4dk3.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944156/photo/2022/IMG_20221217_004112_iw3ijf.jpg",
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
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944153/photo/2022/IMG_20221014_135710_kupffo.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "water",
            "lifestyle",
            "sunset",
            "vehicle"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944152/photo/2022/IMG_20221014_135708_x5x4vt.jpg",
        "title": "",
        "category": "street",
        "camera": "Sony A6600",
        "tags": [
            "water",
            "vehicle",
            "lifestyle"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944150/photo/2022/IMG_20221014_132736_f754be.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "water",
            "lifestyle"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944148/photo/2022/IMG_20221001_205712_tdroks.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944666/photo/2023/IMG_20230101_000830_tcvlaf.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "lightpainting"
        ],
        "date": "2021-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944667/photo/2023/IMG_20230101_000930_u5fkll.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lightpainting",
            "lifestyle",
            "night"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944671/photo/2023/IMG_20230101_001032_b346nz.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944672/photo/2023/IMG_20230121_172512_ex2ecl.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "macro",
            "water"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944676/photo/2023/IMG_20230204_173955_qktk9c.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "animal",
            "lifestyle"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944677/photo/2023/IMG_20230330_222312_ryvdj0.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944680/photo/2023/IMG_20230331_220309_lnplhe.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944682/photo/2023/IMG_20230401_003438_og1hrd.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944684/photo/2023/IMG_20230417_090741_o4ugb3.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "wildlife"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944686/photo/2023/IMG_20230531_205446.jpg_o685fa.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "lifestyle"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944691/photo/2023/IMG_20230718_100004_cmufpi.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944893/photo/2023/IMG_20230726_140109_cbyaft.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944892/photo/2023/IMG_20230922_150234_kuh0k7.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "food",
            "abstract"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944899/photo/2023/IMG_20230804_002813_j0jell.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "architecture"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944896/photo/2023/IMG_20230801_102747_zzx6xt.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people",
            "city"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944901/photo/2023/IMG_20230805_000311_zwzy1m.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944904/photo/2023/IMG_20230808_201448_hy7vlm.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "macro",
            "rain"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944907/photo/2023/IMG_20230817_212516_imb1hw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "landscape"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944910/photo/2023/IMG_20230903_223123_bcmmts.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944913/photo/2023/IMG_20230917_025620_a2yik6.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944915/photo/2023/IMG_20230917_155207_kjq3kq.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "architecture",
            "city"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944918/photo/2023/IMG_20230921_152746_kcbqk3.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
            "wildlife"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766944922/photo/2023/IMG_20230921_152754_w4yhky.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945050/photo/2023/IMG_20231108_021446_fzmlm9.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "stars",
            "sky"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945052/photo/2023/IMG_20230928_071128_ezgfx9.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset",
            "city",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945054/photo/2023/IMG_20230928_105936_vut0xy.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "vehicle",
            "black-and-white"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945057/photo/2023/IMG_20230929_013142_fxrecb.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945061/photo/2023/IMG_20231010_084936_onjdkr.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945064/photo/2023/IMG_20231016_195729_qjwcoi.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract",
            "nature"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945068/photo/2023/IMG_20231016_201015_pc213b.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "nature",
            "abstract"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945071/photo/2023/IMG_20231101_194124_brbh0g.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "animal"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945075/photo/2023/IMG_20231101_194154_igdb1c.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract",
            "animal"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945079/photo/2023/IMG_20231101_194158_izjmnb.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "sunset"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945082/photo/2023/IMG_20231101_194204_lmwt5y.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945086/photo/2023/IMG_20231105_173020_fmobcl.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "black-and-white",
            "food",
            "lifestyle"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945364/photo/2023/IMG_20231108_021458_u0lybw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sky",
            "stars",
            "night"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945365/photo/2023/IMG_20231108_021510_qmrayx.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945371/photo/2023/IMG_20231113_180729_bejqrk.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945376/photo/2023/IMG_20231118_133655_ll20wp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "flora",
            "abstract"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945378/photo/2023/IMG_20231119_112026_yyjxyz.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "night",
            "rain"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945383/photo/2023/IMG_20231127_090958_vbgb03.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945385/photo/2023/IMG_20231202_090631_hzew2h.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945391/photo/2023/IMG_20231203_131144_twv3cw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "architecture",
            "city",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945393/photo/2023/IMG_20231229_001832_lifs0f.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "lifestyle",
            "night"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945397/photo/2023/IMG_20231229_001842_uy4zjv.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "lifestyle",
            "food"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945400/photo/2024/IMG_20240103_232522_g13act.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "fog"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945405/photo/2024/IMG_20240110_020017_bdv3yc.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945526/photo/2024/IMG_20240302_024803_xfcsai.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945531/photo/2024/IMG_20240111_233213_ufngwg.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945534/photo/2024/IMG_20240118_231240_qujyyn.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945538/photo/2024/IMG_20240118_231252_xjmpsw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "people",
            "animal"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945543/photo/2024/IMG_20240118_231322_rx6flj.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945546/photo/2024/IMG_20240120_031715_kfypbt.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "abstract",
            "architecture"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945550/photo/2024/IMG_20240120_031751_oc9ccy.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945554/photo/2024/IMG_20240124_020516_c7mm2c.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945068/photo/2024/IMG_20231016_201015_pc213b.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945559/photo/2024/IMG_20240208_185652_bxmdve.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "food",
            "lifestyle"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945564/photo/2024/IMG_20240208_185715_ibxjni.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945568/photo/2024/IMG_20240212_001039_fp3jpm.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "car",
            "night",
            "abstract"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945573/photo/2024/IMG_20240212_001046_spyxpj.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945671/photo/2023/IMG20230714230926_c8hath.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sky",
            "sunset"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945674/photo/2024/IMG_20240302_024819_cufqvy.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "people"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945679/photo/2024/IMG_20240303_001304_ycydep.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945683/photo/2024/IMG_20240305_135637_njdyvq.jpg",
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
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945688/photo/2024/IMG_20240305_135701_aqbglw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "sunset",
            "sky"
        ],
        "date": "2024-07-26",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945691/photo/2024/IMG_20240313_162719_odefr9.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "macro",
            "flora",
            "nature"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945698/photo/2024/IMG_20240319_151745_o74afg.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "party",
            "event"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945704/photo/2023/IMG20230705133403_antw9m.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "macro",
            "flora"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945709/photo/2023/IMG20230706195653_myvrfp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract",
            "sky"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945713/photo/2023/IMG20230708175144_ba9wkn.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766945718/photo/2023/IMG20230708175144-2_ipdsgy.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "black-and-white",
            "city",
            "architecture"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946117/photo/2023/IMG20231231185033_wnbb1v.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946121/photo/2023/IMG20230714230926_boacwe.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-07-26",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946125/photo/2023/IMG20230716175424_omkjgu.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "car",
            "city",
            "nature"
        ],
        "date": "2023-07-26",
        "place": "Osowa"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946130/photo/2023/IMG20230803123838_xeuy1w.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "abstract",
            "landscape",
            "city",
            "sky"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946136/photo/2023/IMG20230810114508_ppa2xv.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "abstract"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946139/photo/2023/IMG20230819213702_dvqzdn.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "rain",
            "city"
        ],
        "date": "2023-07-26",
        "place": "100cznia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946145/photo/2023/IMG20230819215405_nxm8ov.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-07-26",
        "place": "W4"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946150/photo/2023/IMG20230831131401_cyak58.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "city",
            "nature"
        ],
        "date": "2023-07-26",
        "place": "Sopot"
    },
    {
        "url": "",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946416/photo/2024/IMG20240527112025_r9b3xk.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "abstract"
        ],
        "date": "2024-07-26",
        "place": "Miszewko"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946420/photo/2024/IMG20240203223719_augdk9.jpg",
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
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946427/photo/2024/IMG20240214191606_20240215233631_rpnuwd.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "food",
            "lifestyle"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946432/photo/2024/IMG20240312145001_dnyxgc.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946438/photo/2024/IMG20240321134004_cywrzs.jpg",
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
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946444/photo/2024/IMG20240328165705_jgqndf.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "city"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946448/photo/2024/IMG20240410175047_rgcgaz.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2023-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946455/photo/2024/IMG20240422085703_hkuank.jpg",
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
        "date": "2023-07-26",
        "place": "Zakopane"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946461/photo/2024/IMG20240428194343_tajqfy.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "animal",
            "city"
        ],
        "date": "2023-07-26",
        "place": "Zukowo"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946466/photo/2024/IMG20240517104021_sjtnyc.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "vehicle",
            "sunset",
            "city"
        ],
        "date": "2023-07-26",
        "place": "Gdynia"
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946155/photo/2023/IMG20231231184216_xj5mz5.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "fog",
            "city"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946614/photo/2024/IMG20240708185349_snsvo1.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "macro",
            "flora",
            "sunset"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946618/photo/2024/IMG20240529173935_prsdgg.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "documentary",
            "lifestyle",
            "architecture",
            "minimal"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946624/photo/2024/IMG20240529181851_h3uj0a.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "documentary",
            "lifestyle",
            "sunset"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946630/photo/2024/IMG20240610120102_lsymhp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
            "macro"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946635/photo/2024/IMG20240613230709_uvpkka.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "stars",
            "sky",
            "night"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946642/photo/2024/IMG20240616183130_m8dje4.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "food",
            "lifestyle"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946155/photo/2023/IMG20231231184216_xj5mz5.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946651/photo/2024/IMG20240616190211_fxbp5x.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946654/photo/2024/IMG20240616193806_cemw8b.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "portrait",
            "flora",
            "model"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946665/photo/2024/IMG20240625165259_rldm28.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "food"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946672/photo/2024/IMG20240626185350_fhipar.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "wildlife",
            "animal",
            "city"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766946678/photo/2024/IMG20240705195240_wbzq7r.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "portrait",
            "model",
            "sunset"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947015/photo/2024/IMG20240708185447_ars5kt.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "sunset",
            "flora"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947020/photo/2024/IMG20240718204510_mwv3jw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "people"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "portrait",
            "model",
            "sunset"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947027/photo/2024/IMG20240729145339_zhm4wt.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "car"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947033/photo/2024/IMG20240805203420_xreabp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "people",
            "action"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947039/photo/2024/IMG20240805210322_yihnm4.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947044/photo/2024/IMG20240809202231_jjwgmx.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "abstract",
            "architecture",
            "city"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947051/photo/2024/IMG20240815195513_pxhrj2.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "flora",
            "macro"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947056/photo/2024/IMG20240817195924_t6v4ue.jpg",
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
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947064/photo/2024/IMG20240818173622_lwaag6.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "documentary",
            "lifestyle",
            "flora",
            "sunset"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947070/photo/2024/IMG20240903121323_zqicte.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947076/photo/2024/IMG20240910184807_jzrgyx.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "flora",
            "sunset"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947081/photo/2024/IMG20240914184241_zvjtua.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947240/photo/2024/IMG20241117152854_wfpqjp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture",
            "abstract"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947245/photo/2024/IMG20240916180820_wccfbe.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "lifestyle",
            "architecture",
            "nature",
            "abstract"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947252/photo/2024/IMG20240916183226_x1e0vi.jpg",
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
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947258/photo/2024/IMG20240929165011_sfvl82.jpg",
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
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947265/photo/2024/IMG20241006161851_mccp1t.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "architecture"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947271/photo/2024/IMG20241006162539_xw0204.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947278/photo/2024/IMG20241015112016_qerlce.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "abstract"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947285/photo/2024/IMG20241028173539_qe04dw.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "city",
            "night"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947291/photo/2024/IMG20241101010647_urwbxo.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "people",
            "night"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947408/photo/2024/IMG20241101014241_ulvdjm.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "event",
            "night",
            "people"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947414/photo/2024/IMG20241102123229_q9dudz.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947420/photo/2024/IMG20241102203630_pppwzx.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "food"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947522/photo/2024/IMG20241215083205_yhpvak.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "nature"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947528/photo/2024/IMG20241121174139_dhdojh.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "street",
            "night",
            "snow"
        ],
        "date": "2024-07-26",
        "place": ""
    },
    {
        "url": "https://res.cloudinary.com/dcmfq9hg5/image/upload/v1766947535/photo/2024/IMG20241208000808_quljwp.jpg",
        "title": "",
        "category": "street",
        "camera": "Oneplus 11",
        "tags": [
            "night",
            "event",
            "party",
            "people"
        ],
        "date": "2024-07-26",
        "place": ""
    }
];




// Helper to ensure all photos have IDs
export const getPhotos = (): Photo[] => {
    return photoData.map((photo, index) => ({
        ...photo,
        id: photo.id || `photo-${index}-${photo.url.split('/').pop()?.split('.')[0] || 'unknown'}`
    }));
};
