
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
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif?updatedAt=1769015078109',
        date: '25-01-23',
        place: 'Gdansk Matarnia',
        category: 'client',
        galleryTag: 'daldehog',
        images: [
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00187_1V2AsRZW3.avif?updatedAt=1769015078091',
        "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00204_G1hBcE1AU.avif?updatedAt=1769015078222",
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00268_r0emDnE39.avif?updatedAt=1769015078060',
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00269_9gZdwQOaz.avif?updatedAt=1769015077882',
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00274_bukfgN9P8.avif?updatedAt=1769015078102',
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00276_dKcUy6ute4.avif?updatedAt=1769015078235', 
        "https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00281_xzFVfxiAc.avif?updatedAt=1769015078186",
        'https://ik.imagekit.io/j3l1n5k1/photography/2025/01-23/JEL-00303_M0ZwOW6VA.avif?updatedAt=1769015078109'
        ]
    },
    {
        title: 'fizjo.tusia',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01621_TcF_jjytB.avif?updatedAt=1769014578263',
        coverImageCrop: 'top',
        date: '25-04-24',
        place: 'Studio Sopot',
        category: 'session',
        images: [
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01417_r_nh87Ew3.avif?updatedAt=1769014577941",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01427-2_wqE-3pDCs9.avif?updatedAt=1769014578352",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01446-3_e-LddVxXHG.avif?updatedAt=1769014578372",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01458_HSidrJYUm.avif?updatedAt=1769014578188",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01489_PLJjJ3AX_t.avif?updatedAt=1769014578302",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01537_y-xOGHY3V.avif?updatedAt=1769014578195",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01578_ndLAxe9MI.avif?updatedAt=1769014578291",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01578_ndLAxe9MI.avif?updatedAt=1769014578291",
           "https://ik.imagekit.io/j3l1n5k1/photography/2025/04-24/JEL-01631_T0quA2-vg.avif?updatedAt=1769014578199",
        ]
    },
    {
        title: 'Wesele Jakuba i Kasi',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_BjgCqE9dD.avif?updatedAt=1769014192475',
        date: '25-06-28',
        place: 'Sierakowice',
        category: 'event',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06535-2_g4oBVYsry.avif?updatedAt=1769014191682',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06557_3rnW-qq9V.avif?updatedAt=1769014191493',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06599_18VCe_tg5.avif?updatedAt=1769014191800',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06668_AuiU0fTRj.avif?updatedAt=1769014191823',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06819_kF1NOWlR1.avif?updatedAt=1769014191731',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06821_vUatw9-w0.avif?updatedAt=1769014192449',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06822_Vt84N2qd5S.avif?updatedAt=1769014192523',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06824_Ed1Ag7Tev.avif?updatedAt=1769014192433',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06825_pzQ2L5lwD.avif?updatedAt=1769014191726',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06867_R--8JNs28m.avif?updatedAt=1769014192429',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL06913_sFigtSzOx.avif?updatedAt=1769014191735',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07095_CU-trPwrW.avif?updatedAt=1769014192437',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07105_-F1bSxyGX.avif?updatedAt=1769014192399',
            "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07109_A1UdLDkb9.avif?updatedAt=1769014191811",
            "https://ik.imagekit.io/j3l1n5k1/photography/2025/06-28/JEL07119_BjgCqE9dD.avif?updatedAt=1769014192475",
        ]
    },
        {
        title: 'Tomek',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_wTB4VdC0-Z.avif?updatedAt=1769013803803',
        coverImageCrop: 'center',
        date: '25-07-05',
        place: 'Studio Sopot',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07152_TDu5uz9nVe.avif?updatedAt=1769013803855',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07157-Edit_wTB4VdC0-Z.avif?updatedAt=1769013803803',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07170_bvYseJvlX.avif?updatedAt=1769013803850',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07202-Edit_6Gvfz4VZH.avif?updatedAt=1769013803784',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07202-Edit_6Gvfz4VZH.avif?updatedAt=1769013803784',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07230_6w81p6CJV.avif?updatedAt=1769013803872',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07230_6w81p6CJV.avif?updatedAt=1769013803872',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-05/JEL07233_OCnkHC67R.avif?updatedAt=1769013803835'
        ]
    },

     {
        title: 'Festiwal Japonski',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_VdAjKDRHt.avif?updatedAt=1769013368084',
        date: '25-07-26',
        place: 'Oliwa',
        category: 'event',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07510_y65WZ1o7-.avif?updatedAt=1769013368209',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07513-2_mu7kXO_3m.avif?updatedAt=1769013368206',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07528_Iu64lv4Tz.avif?updatedAt=1769013368231',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07555_d3SW3DVuVE.avif?updatedAt=1769013368466',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07562_i6KUJIh0c8.avif?updatedAt=1769013368378',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07567_YQL4I9tR1.avif?updatedAt=1769013368227',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07571_wI56A7ED5.avif?updatedAt=1769013368411',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07573_i-yagmyNR.avif?updatedAt=1769013368312',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07692_6xv6tmbBlm.avif?updatedAt=1769013368385',
            'https://ik.imagekit.io/j3l1n5k1/photography/2025/07-26/JEL07730_VdAjKDRHt.avif?updatedAt=1769013368084',
        ]
    },

    //2024
    
    {
        title: 'Karola',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06262-soft_gjhxwmSf-.avif?updatedAt=1769020020303',
        coverImageCrop: 'top',
        date: '24-02-25',
        place: 'UG',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05880-soft_6fyzr7paU.avif?updatedAt=1769020020036',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05888-2ed-soft_0HaTuw7f0.avif?updatedAt=1769020020073",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05898-edit_J8VnnzZSL.avif?updatedAt=1769020020329",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-05940-edit-soft_9ofCojKNRr.avif?updatedAt=1769020020355",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06210-soft_V0HoT9K_Oo.avif?updatedAt=1769020020252",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06247-soft_QPxa69bhx.avif?updatedAt=1769020020297",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/02-25/JEL-06262-soft_gjhxwmSf-.avif?updatedAt=1769020020303",
        ]
    },
    {
        title: 'Hi I\'m Ya0',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06657_lv-MZGtmX0.avif?updatedAt=1769019725801',
        coverImageCrop: 'top',
        date: '24-03-12',
        place: 'Gdansk Osowa',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06614__-UrTshP5.avif?updatedAt=1769019726007',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06622_eN6Xojx7y.avif?updatedAt=1769019726133",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06657_lv-MZGtmX0.avif?updatedAt=1769019725801",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06702_dcbZhcDAxg.avif?updatedAt=1769019725809",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06762_RO16WPmNN.avif?updatedAt=1769019726085",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/03-12/JEL-06784_6lkwaOwiX.avif?updatedAt=1769019726177",
        ]
    },
    {
        title: 'Rewia',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07740_m6yGBNLRQg.avif?updatedAt=1769019622726',
        date: '24-04-09',
        place: 'Rewia',
        category: 'travel',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07723_sow0MYuyI.avif?updatedAt=1769019622125',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07740_m6yGBNLRQg.avif?updatedAt=1769019622726",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07741_Cva4f9SCX.avif?updatedAt=1769019622700",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07743_B6m5HejBLE.avif?updatedAt=1769019622702",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07747_cWaSWTlY2.avif?updatedAt=1769019622719",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07770_2EHobBBql.avif?updatedAt=1769019622773",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07773_xj4wb47SUE.avif?updatedAt=1769019622796",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/04-09/JEL-07791_4xdcL09r6.avif?updatedAt=1769019622695",
        ]
    },
    {
        title: 'Gdynia Street',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL01892_ozGSzPSL2.avif?updatedAt=1769019064326',
        date: '24-07-15',
        place: 'Gdansk Osowa, Gdynia',
        category: 'street',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041_WI0URKxTA.avif?updatedAt=1769019064370',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02041_WI0URKxTA.avif?updatedAt=1769019064370",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02046_35vzBSvgN.avif?updatedAt=1769019064350",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02046_35vzBSvgN.avif?updatedAt=1769019064350",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01927_vFKNisuXGB.avif?updatedAt=1769019064306",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-02151_NAYJ3uQpM.avif?updatedAt=1769019064258",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01749_dFUW4L43Bh.avif?updatedAt=1769019064360",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737_kg7O-4OKPs.avif?updatedAt=1769019064308",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01737_kg7O-4OKPs.avif?updatedAt=1769019064308",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-15/JEL-01743_xR4vrvlnY2.avif?updatedAt=1769019064250",
            
        ]
    },
    {
        title: 'Wesele Julii i Macka',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987_9uv8pgCck.avif?updatedAt=1769018838546',
        coverImageCrop: 'top',
        date: '24-07-27',
        place: 'Kartuzy',
        category: 'event',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02191_EAngBVzx-h.avif?updatedAt=1769018838532',
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02425_p8OlBLbIM.avif?updatedAt=1769018838507",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02459_P7uQIAJRN2.avif?updatedAt=1769018838515",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02462_dc5RpSdwu.avif?updatedAt=1769018838547",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02516_7BvmnOcPv.avif?updatedAt=1769018838363",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL02556_uEJ020LMpC.avif?updatedAt=1769018838525",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03089_HzhX-IC8t.avif?updatedAt=1769018838539",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03109_YX-RyT6aL.avif?updatedAt=1769018838543",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03209_z9oC0bnmL-.avif?updatedAt=1769018838495",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03254_J46oj9TJ-.avif?updatedAt=1769018838556",
            "https://ik.imagekit.io/j3l1n5k1/photography/2024/07-27/JEL03987_9uv8pgCck.avif?updatedAt=1769018838546",
        ]
    },
    {
        title: 'Sloneczniki',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_xY2hM8Fiq.avif?updatedAt=1769018687893',
        date: '24-08-11',
        place: 'Blotnik',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05095_7XfKgM9-8.avif?updatedAt=1769018687891',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05102_7UN4WQmN8.avif?updatedAt=1769018687969',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05112_xY2hM8Fiq.avif?updatedAt=1769018687893',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05380-2_m0Z6vAZdq.avif?updatedAt=1769018688144',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05404-3_81e2oE3Df.avif?updatedAt=1769018687982',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-05404-3_81e2oE3Df.avif?updatedAt=1769018687982',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/08-11/JEL-5403_XN2DiqcuY.avif?updatedAt=1769018687875',
        ]
    },
    {
        title: 'Santorini',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_adQgL1S4P.avif?updatedAt=1769018379505',
        date: '24-09-21',
        place: 'Santorini',
        category: 'travel',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-Oia_oSTd2Ga5u.avif?updatedAt=1769018379511',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-07360_MlYxLx9dq.avif?updatedAt=1769018379502',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09169_adQgL1S4P.avif?updatedAt=1769018379505',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09174_Cx1Sy_APN.avif?updatedAt=1769018379493',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL-09227_73E_H_CPaT.avif?updatedAt=1769018379539',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/09-21/JEL07893_B7lP2cDzi.avif?updatedAt=1769018379509',
        ]
    },
    {
        title: 'Dyniowelove',
        excerpt: 'Exploring the streets of Tokyo at night with a 35mm lens.',
        content: 'Full content would go here...',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_t1JgNVJas.avif?updatedAt=1769018104414',
        coverImageCrop: 'top',
        date: '24-10-19',
        place: 'Rotmanka',
        category: 'session',
        images: [
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09642_FqYk4fA5L.avif?updatedAt=1769018104456',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09682_moXoX-ddm.avif?updatedAt=1769018104375',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09734_Ai2QGD68W.avif?updatedAt=1769018104424',
            'https://ik.imagekit.io/j3l1n5k1/photography/2024/10-19/JEL-09787-2_t1JgNVJas.avif?updatedAt=1769018104414',
        ]
    },
   


    
     
];


export const blogPosts: BlogPost[] = rawBlogPosts.map((post, index) => ({
    ...post,
    id: (index + 1).toString()
}));


