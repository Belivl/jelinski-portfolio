
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    coverImageCrop?: string;
    date: string;
    place?: string;
    category?: string;
    images: string[];
    mdxPath?: string; // Optional path to MDX file
    galleryTag?: string; // Optional tag to automatically include photos from gallery
}

const rawBlogPosts: Omit<BlogPost, 'id'>[] = [

     {
        title: 'Daldehog - IKEA',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b',
        date: '25-01-23',
        place: 'Gdansk Matarnia',
        category: 'client',
        galleryTag: 'daldehog',
        images: [
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00187_Y6qBOAwA_.avif?updatedAt=1768344183446&ik-s=6a7eaa964510f38ec346b3c0bb0b16aca38febb8',
        "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00204_4o42-27Vl.avif?updatedAt=1768344183445&ik-s=50cc7f88c2bc6cfef59998ba3a70fb96afea1faf",
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00268_GrpHNjFqh.avif?updatedAt=1768344183449&ik-s=14134200d6610a35d458fc5103034ed3c3b760fb',
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00269_TFnSQ1EbA.avif?updatedAt=1768344183444&ik-s=c5009714eff354bc6702e6df4ca80e1a88c638f2',
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00274_my-yn0IXI.avif?updatedAt=1768344183445&ik-s=566f7ba2ec88569276e9d4ebd098e852a14dd0bb',
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00276_sFD52fV8A.avif?updatedAt=1768344183445&ik-s=1f11c19961e077b51fd94260874cb9c3dcb74bb5', 
        "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00281_RN3AnX77c.avif?updatedAt=1768344183449&ik-s=dd887ae3613b55b7381b245db9232993c3aff02d",
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_fMhCdgmGY.avif?updatedAt=1768344183450&ik-s=03da53e843fb4d0a2fd303e22dce36b752f7e28b'
        ]
    },
    {
        title: 'fizjo.tusia',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_qH1Q7rsxk.avif?updatedAt=1768344210783&ik-s=d1a5a9c39aff0f046d5c665f6e4af4953cd02d0d',
        coverImageCrop: 'top',
        date: '25-04-24',
        place: 'Studio Sopot',
        category: 'session',
        images: [
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01417_pi79XrSSFs.avif?updatedAt=1768344210734&ik-s=032184a7c4bda6b05a769a03516fc58ea648bc12",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01427-2_rml7UCmOP.avif?updatedAt=1768344210785&ik-s=51498129d6a4d5dab2ae9eeff96365f736386bbd",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01446-3_z57Tivubs.avif?updatedAt=1768344210820&ik-s=6c5925b89846eedd95584dd65a12770968229def",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01458_T-hp5xGcu.avif?updatedAt=1768344210557&ik-s=f77beaca54c956fdc07747b011523e0a4025e2bb",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-0148_9I_P8ts6y.avif?updatedAt=1768412307089&ik-s=e4df22900b9f2c3d372b45923d845da9323238fc",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-0148_9I_P8ts6y.avif?updatedAt=1768412307089&ik-s=e4df22900b9f2c3d372b45923d845da9323238fc",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01537_0EbP8MSykF.avif?updatedAt=1768344210823&ik-s=d5be89b84b2c0655e689c013121c1cf8c5a20264",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01578_bpGM7un4M.avif?updatedAt=1768344210824&ik-s=07058a98f5d6031f9c27c674a166267d13b0aacd",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01578_bpGM7un4M.avif?updatedAt=1768344210824&ik-s=07058a98f5d6031f9c27c674a166267d13b0aacd",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01631_ZpyOLBJQc.avif?updatedAt=1768344210667&ik-s=cbcaa3fff1e9d590ebfbd39104b0a65950d0d7e8",
        ]
    },
    {
        title: 'Wesele Jakuba i Kasi',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_uwzfn3cso.avif?updatedAt=1768344348897&ik-s=5c4467cf85e2369fdee752c1d2bd719d323945e0',
        date: '25-06-28',
        place: 'Sierakowice',
        category: 'event',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06535-2_vICD9k3D-9.avif?updatedAt=1768417164748&ik-s=2b376d9675a43d004b3dfa27fd4846edf2b0240d',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06557_V3hdduLRpG.avif?updatedAt=1768417165325&ik-s=8773163cd59cbb2f5910bba3df3f292ec74bb604',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06599_z50WkTw1zM.avif?updatedAt=1768417165270&ik-s=b42bc41e5993e4af95bd043d9486941e68871842',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_f1IkJTveI.avif?updatedAt=1768417165173&ik-s=d8fd3cc9063dc56f4a5037784048c081c0279d6e',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06819_TEa-xV_Iv.avif?updatedAt=1768417165247&ik-s=0c8c371b4fe23251abcd8f9899b9f11509e371fe',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06821_V-aPMuCxen.avif?updatedAt=1768417165306&ik-s=8f0c90d3b450bb76cc1978c1ddad9419bf6c762c',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06822_ITHhFoUcL_.avif?updatedAt=1768417165318&ik-s=f1db74e5c35f315ccc063cd953bd0cd6ed932ec8',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06824_eeBDmEYw6.avif?updatedAt=1768417165319&ik-s=ea590c1822d2b36d2c26c7118fc9940e1528972a',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06825_bD8o4yX3US.avif?updatedAt=1768417165330&ik-s=db0d8372d3588ca8debc5ec7227ed1eb2e60e84a',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06867_L4hD65e6_.avif?updatedAt=1768417165046&ik-s=a3f067b853ca0be24b7c67bce2d8a559b1292d15',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06913_k5Ei635Yy.avif?updatedAt=1768417165315&ik-s=625037ac9ec65bd8bfcdddf9614900030a1d3c65',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07095_YC7uMaRS3.avif?updatedAt=1768417165267&ik-s=4972ddd3b6d33513415dd29c53987059512bb71d',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07105_wCaYrAVU8.avif?updatedAt=1768417165255&ik-s=2e7f844097690bad24e1fca1f0d5a483901b09f4',
            "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07109_E7986eOWvd.avif?updatedAt=1768417164918&ik-s=052f862e65e9bbefb3eb91729911eaf15975890d",
            "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_uwzfn3cso.avif?updatedAt=1768344348897&ik-s=5c4467cf85e2369fdee752c1d2bd719d323945e0",
        ]
    },
        {
        title: 'Tomek',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_w1J8QN9Z2x.avif?updatedAt=1768417209487&ik-s=4a559d8519ccd11a142c82ab2735200e750f1cf8',
        coverImageCrop: 'center',
        date: '25-07-05',
        place: 'Studio Sopot',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07152_5tRu8yecR.avif?updatedAt=1768417209422&ik-s=789a425e36d6d265174c0e34f7f2f3ed889fd456',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_w1J8QN9Z2x.avif?updatedAt=1768417209487&ik-s=4a559d8519ccd11a142c82ab2735200e750f1cf8',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07170_akA6hqaSt.avif?updatedAt=1768417209287&ik-s=b6a82f76a1992113dd8f7f5ebf90c635be0ad3f3',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07202-Edit_-LsVqjx0U.avif?updatedAt=1768417209253&ik-s=e94c2bc6660ca2be58dd3850cfef810d85c4b3d9',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07202-Edit_-LsVqjx0U.avif?updatedAt=1768417209253&ik-s=e94c2bc6660ca2be58dd3850cfef810d85c4b3d9',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07230_iveshcZUh.avif?updatedAt=1768417209240&ik-s=e9ce7b96119587b8eb885226ba83fa7e0200f9c0',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07230_iveshcZUh.avif?updatedAt=1768417209240&ik-s=e9ce7b96119587b8eb885226ba83fa7e0200f9c0',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07233_l8exU9eLV.avif?updatedAt=1768417209364&ik-s=f90a89b81624a21b0f00cc3c2128e82962144d45'
        ]
    },

     {
        title: 'Festiwal Japonski',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_bGF2DC9o1.avif?updatedAt=1768344465709&ik-s=9df6cbc602ee9283eba9234cef5ce38b596bb2d1',
        date: '25-07-26',
        place: 'Oliwa',
        category: 'event',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07510_AvNArNfL1.avif?updatedAt=1768344465643&ik-s=9326c49799b6cd4c32440cf858ed2a178df09467',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07513-2_zqoFl6W95.avif?updatedAt=1768417253287&ik-s=ae3f43ffbb5201cdc34d2a768a5c605c30393432',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07528_jPDGu9UwE.avif?updatedAt=1768344465639&ik-s=a3a0c5422e52414ba77a8d759dfede3cc3129281',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07555_lYdfOSgFC.avif?updatedAt=1768417253198&ik-s=60161808dd64acc88f000869a4ef8a355b8c1b63',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07562_Ogren0cxt.avif?updatedAt=1768417253517&ik-s=01db3925b47fee5480ade6c7836e88125b3fe5ee',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07567_btatR2q3w.avif?updatedAt=1768417253394&ik-s=9cd72ed814dad174a3491550ceebc36bfeedd22f',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07571_vM1ks6VLN.avif?updatedAt=1768344465891&ik-s=a4fbea295b1ee5e294665cba7357a4b830753439',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07573_srUCdLwhL.avif?updatedAt=1768344465494&ik-s=fdef7aa74bb47970766fcc265121c2b6c92fb318',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07692_QGVLHRn4K.avif?updatedAt=1768344465853&ik-s=577783f8c7db3819ef7e232ca57288d4787da4dc',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_bGF2DC9o1.avif?updatedAt=1768344465709&ik-s=9df6cbc602ee9283eba9234cef5ce38b596bb2d1',
        ]
    },

    //2024
    
    {
        title: 'Karola',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06262-soft_1yyE_SvTF.avif?updatedAt=1768417910316&ik-s=37562dd660a4f31bb37103d6bd80d46cfa74e82d',
        coverImageCrop: 'top',
        date: '24-02-25',
        place: 'UG',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05880-soft_wAgqAIpYE.avif?updatedAt=1768417910054&ik-s=8c055b5d69b060e0dfa2502e1969801e35fcadf7',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05888-2ed-soft_pHmBQ9t5y.avif?updatedAt=1768417910451&ik-s=78bf2ebb091b6e70b5e66f9462e28a41e6a86ccd",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05898-edit_ybGBXL1ci.avif?updatedAt=1768417910327&ik-s=d3430a6a50a518135ecc2098963d156df768cd33",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05940-edit-soft_izozT6ey1.avif?updatedAt=1768417910131&ik-s=e089f0bd79a815e54745b2f0bb88a9367dbba728",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06210-soft_FkL4XjNsn.avif?updatedAt=1768417910554&ik-s=6bc7f6dd0d5602b95d14e749bf2422f0684ddc0c",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06247-soft_1-upQAfMV.avif?updatedAt=1768417910355&ik-s=6f6143dd7831984ea09ee73a807204e912a6dd2f",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06262-soft_1yyE_SvTF.avif?updatedAt=1768417910316&ik-s=37562dd660a4f31bb37103d6bd80d46cfa74e82d",
        ]
    },
    {
        title: 'Hi I\'m Ya0',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06657_FYzklOFFx.avif?updatedAt=1768418081937&ik-s=fd4aded6e6865e17e35f1d04dcca04d42a580c0b',
        coverImageCrop: 'top',
        date: '24-03-12',
        place: 'Gdansk Osowa',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06614_IwUbGkYlV.avif?updatedAt=1768418081924&ik-s=555bf7658b073de7ad3e21e2ddbb5c75ef6697fa',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06622_5E3VM8h2E.avif?updatedAt=1768418082133&ik-s=f394b3efd79fe6f5392503f9c7aac01a44ca10d6",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06657_FYzklOFFx.avif?updatedAt=1768418081937&ik-s=fd4aded6e6865e17e35f1d04dcca04d42a580c0b",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06702_hBPQWWJ3f.avif?updatedAt=1768418082114&ik-s=89f959d6d9b10b39a209faff45f6a26d68d1b800",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06762_HW2yEN0_B.avif?updatedAt=1768418082144&ik-s=65b2aefba93be122b9e6f50f0be1dbfe1bd59db5",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06784_1KY2O18o6.avif?updatedAt=1768418081891&ik-s=0a88995afa7181024e3daddfdd5a052a11cfb3fe",
        ]
    },
    {
        title: 'Rewia',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07740_2T-n_fU1K.avif?updatedAt=1768418108521&ik-s=63963f5a09d4885d8a7f8d3876ef37bfa7187246',
        date: '24-04-09',
        place: 'Rewia',
        category: 'travel',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07723_UT17xs7ev.avif?updatedAt=1768418108652&ik-s=49f199d14df4b5bfa1185b5e8a4688030642edde',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07740_2T-n_fU1K.avif?updatedAt=1768418108521&ik-s=63963f5a09d4885d8a7f8d3876ef37bfa7187246",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07741_NxZTUy8K2.avif?updatedAt=1768418108499&ik-s=b7741597d9304b099c770fbdcc4d938bb8f462eb",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07743_Z-T-uRB3ZE.avif?updatedAt=1768418108700&ik-s=cc82bbf05895782ea04e1ad2266570b25235fea2",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07747_FQjXn1Hw2.avif?updatedAt=1768418108466&ik-s=b7571b9e31ba72e2021aa95d13f78f17b6fccf42",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07770_kktlvost3.avif?updatedAt=1768418108457&ik-s=f678b80686246fa2bf2afd93d23f0a8664c068ef",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07773_yCVnMmGRq.avif?updatedAt=1768418108388&ik-s=3f39666eb780870ebffc511db6789b3124cb665f",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07791_zdaC1f5rD.avif?updatedAt=1768418108212&ik-s=1b4d4fe3ed6af24f2c93c4f453d66248acf278c0",
        ]
    },
    {
        title: 'Gdynia Street',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_YXsDOh2xZ.avif?updatedAt=1768418032988&ik-s=7574e7cc4bbbaed6f35e40b8778902caacb96fe5',
        date: '24-07-15',
        place: 'Gdansk Osowa, Gdynia',
        category: 'street',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041_gUguzad0C.avif?updatedAt=1768418033027&ik-s=31eecc193d2b58decf5ab5caf23490c7d162c640',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041-2_V3xsIl_XKN.avif?updatedAt=1768418032872&ik-s=7263c014d4104926ab8478c56d33e2764a2624cf",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02046_kxRKEZ3t5.avif?updatedAt=1768418032911&ik-s=7d4df9cdba7418d0604897a4f5f212c100bb8973",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02046_kxRKEZ3t5.avif?updatedAt=1768418032911&ik-s=7d4df9cdba7418d0604897a4f5f212c100bb8973",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01927_QzC_QWVkP.avif?updatedAt=1768418032926&ik-s=2ff379937ef35a0d8b101f6d561e605e1e1a1f5f",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02151_z2I6I3P65.avif?updatedAt=1768418032928&ik-s=c1a43129764a9e6b57231c8e4d7bd069dfeec96e",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01749_UZAtHQT5M.avif?updatedAt=1768418032930&ik-s=a7b4525f576a8ad45151110322d61b9caa4476d7",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737_0-tD_BBWT.avif?updatedAt=1768418032770&ik-s=7df14652f5c4d1c0f74dc9628cc974bb78d30a76",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737-3_jKNHZoLwI.avif?updatedAt=1768418032554&ik-s=20b638157f2bd23e4ab25c5064105e53425716c2",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01743_btV7h0VN5.avif?updatedAt=1768418032733&ik-s=2cbd4289a8d2eb7306c5d1463752df52fb057560",
            
        ]
    },
    {
        title: 'Wesele Julii i Macka',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987-Edit-538_akGBZ2tDt.avif?updatedAt=1768418002602&ik-s=06c4f952ee159c7df92bf1b927d5870fdc5bece6',
        coverImageCrop: 'top',
        date: '24-07-27',
        place: 'Kartuzy',
        category: 'event',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02191-15_0tNx0HfHO.avif?updatedAt=1768418003002&ik-s=780c96cf3ef69910097db9ba3ea3f6a82f6d7bf5',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02425-101_4_4AX2FsBBq.avif?updatedAt=1768418002930&ik-s=04ce0ad1d8391f9c53db930c953513c8eb2c3960",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02459-112_5_yeUiawVzQ.avif?updatedAt=1768418002706&ik-s=2f574a422e4275c973245ff025d61149d3128716",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02462-113_3_Uxg1_MMjI.avif?updatedAt=1768418002939&ik-s=abb32b282ddb9ac7e6f30f39fd41026264843e43",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02516-133_sptL_j7Ir.avif?updatedAt=1768418003007&ik-s=6080f398260c3ec47a5a5c3fc1e252de469f413f",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02556-149_VZ2gDIV1d.avif?updatedAt=1768418002641&ik-s=81e1b7c68d45ee8fff90581dcb61ee8820ffa6fe",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03089-293_XjiXKp1mI.avif?updatedAt=1768418003155&ik-s=964672d1973620957b7e20975c90a5ed1c044616",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03109-299_4_V76kpyUKI.avif?updatedAt=1768418002730&ik-s=9dbaef754f9499ab7ca3816eaecd7543e239b0cb",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03209-342_7iSIZ69eV.avif?updatedAt=1768418002591&ik-s=c90ade5eb874a25ca5197f4f9998b875fabc8d73",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03254-373_jed0eGV1H.avif?updatedAt=1768418002901&ik-s=4c669db06301bae8cb84a79976160a1c9a2b7e48",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987-Edit-538_akGBZ2tDt.avif?updatedAt=1768418002602&ik-s=06c4f952ee159c7df92bf1b927d5870fdc5bece6",
        ]
    },
    {
        title: 'Sloneczniki',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_SAWiT_yJw.avif?updatedAt=1768417968690&ik-s=88efc3a5010417730b2fb7f48264456491b2be32',
        date: '24-08-11',
        place: 'Blotnik',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05095_MlvBONR16.avif?updatedAt=1768417968352&ik-s=7252771e34c44ade22be959bc821d8a9952134ce',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_VzLOJb1RX.avif?updatedAt=1768417968649&ik-s=7d93d0025bd373953c0b2aec4915161e25c76736',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_SAWiT_yJw.avif?updatedAt=1768417968690&ik-s=88efc3a5010417730b2fb7f48264456491b2be32',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05380-2_SWDKpZ3Et.avif?updatedAt=1768417968661&ik-s=12158dfc4214f068a4c8d0113a8d5b32164b9f37',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05404-3_Bo3DjxHM1.avif?updatedAt=1768417968591&ik-s=694e5a5bd0b1c5a21c93c63237eaea61390a3e06',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05404-3_Bo3DjxHM1.avif?updatedAt=1768417968591&ik-s=694e5a5bd0b1c5a21c93c63237eaea61390a3e06',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-5403_bqhIoSehe.avif?updatedAt=1768417968676&ik-s=71da21bada5f8877b68772bd70ad29b71f53cbf1',
        ]
    },
    {
        title: 'Santorini',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_QxnPI292X.avif?updatedAt=1768418207216&ik-s=08ab566f42af083a128454a520af752efd4b549c',
        date: '24-09-21',
        place: 'Santorini',
        category: 'travel',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL--2_K9-Q38kYh.avif?updatedAt=1768418207615&ik-s=15ef19b390a91adaa71c86774d6d3e8af64f0059',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-07360_r9R9dZkU4.avif?updatedAt=1768418207486&ik-s=80cc6b6e5e75beea61d4588d9498aa0900575151',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_QxnPI292X.avif?updatedAt=1768418207216&ik-s=08ab566f42af083a128454a520af752efd4b549c',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09174_qrX8YspXe.avif?updatedAt=1768418207462&ik-s=84dbce2ee10f8eb138cc913b15a4b8f9fc32f104',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09227_MUrTju6uW.avif?updatedAt=1768418207397&ik-s=57f0b4a46e3e26482dea71627063a8e7061e3a88',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-Oia_DQ_iYU7ST.avif?updatedAt=1768418207462&ik-s=b40a7068568c3d4dbff0e4dde9d65a1db41c01f0',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-Oia_DQ_iYU7ST.avif?updatedAt=1768418207462&ik-s=b40a7068568c3d4dbff0e4dde9d65a1db41c01f0',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL07893-Edit_iq6ShaZJ3.avif?updatedAt=1768418207198&ik-s=6be6d85c1104af41fa3655e1934ed06ef9758089',
        ]
    },
    {
        title: 'Dyniowelove',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_C-wwMaCiP.avif?updatedAt=1768417875355&ik-s=2809750b7f978701c9848974d34fce71b25cbc8f',
        coverImageCrop: 'top',
        date: '24-10-19',
        place: 'Rotmanka',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09642_KSqynaPS3.avif?updatedAt=1768417875783&ik-s=cc524b51c14c53a815f7ced617368471e1128c8d',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09682_6OucLS-Dx.avif?updatedAt=1768417875430&ik-s=572f326559b76cb8b98ab86b71763d3147232091',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09734_IfcjWxO9h.avif?updatedAt=1768417875545&ik-s=3d9f9b86bbdc07203bdaf5f2cc95cfcb6d0d23ff',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_C-wwMaCiP.avif?updatedAt=1768417875355&ik-s=2809750b7f978701c9848974d34fce71b25cbc8f',
        ]
    },
   


    
     
];

import { getDevImageUrl } from '@/lib/utils';

export const blogPosts: BlogPost[] = rawBlogPosts.map((post, index) => ({
    ...post,
    coverImage: getDevImageUrl(post.coverImage),
    images: post.images.map(img => getDevImageUrl(img)),
    id: (index + 1).toString()
}));
