
export interface Project {
    id: string;
    title: string;
    category: '3D' | 'UI/UX' | 'Branding' | 'Painting' | 'Drawing' | 'Design';
    description: string;
    content?: string;
    coverImage: string;
    images?: string[];
    tags: string[];
    date: string;
    variant?: 'standard' | 'image-focus';
    postPath: string;
}

const rawProjects: Project[] = [
    {
        id: '1',
        title: 'Woody FoodTruck',
        category: 'Branding',
        description: 'A mobile wood-fired pizza truck.',
        content: 'Woody FoodTruck is a small business started by a passionate group of friends that wanted to share their love for Italian food with others. Woody\'s built-in, wood - fired pizza oven is what makes them stand out from other businesses alike.They can handcraft the pizza in a way traditional Italians do.Thanks to the mobility of a food truck, they can serve their specialty wherever they please.You can taste their mouth - watering, fire - baked pizza at many food events and conventions.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_brHGwjJF0B.avif?updatedAt=1769088245453",
        tags: ['Figma', 'Illustrator', 'Photoshop', 'Design', 'Blender'],
        date: '2019-07',
        postPath: '/woody',
    },
        {
        id: '2',
        title: 'AudienceForge',
        category: 'UI/UX',
        description: 'A clean, modern interface for a next-generation advertisement management platform.',
        content: 'Focused on simplifying complex data into an intuitive user experience. The design system prioritizes accessibility and clear data visualization.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_3ypFa2THm.avif?updatedAt=1769090151530',
        tags: ['Figma', 'Mobile Design', 'User Research'],
        date: '2024-03-10',
        postPath: '/audience',
    },
     {
        id: '3',
        title: 'Bukszpryt - Plakaty',
        category: 'Design',
        description: 'A series of posters for a local pub.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki_tf0wBtPBJ.avif?updatedAt=1769087687323",
        tags: ['Design', 'Typography', 'Layout'], 
        date: '2023-12-15',
        postPath: '/buk',
    },
    {
        id: '4',
        title: 'RikoHD',
        category: 'Branding',
        description: 'Brand identity for a streamer',
        content: 'From logo design to packaging and social media guidelines. The brand identity reflects the company\'s commitment to sustainability through earthy tones and organic typography.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/YoutubeBannerRikohdv3_tHuX7rUN7.avif?updatedAt=1769093741917',
        tags: ['Logo Design', 'Packaging', 'Brand Strategy'],
        date: '2024-01-05',
        postPath: '/rikohd',
    },

    {
        id: '6',
        title: 'Amandel Milch Packaging',
        category: '3D',
        description: 'Visualization of almond milk packaging for Amandel Milch - a group of students from the University of Gdańsk',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_4__fHN9eEG51.avif?updatedAt=1769087011869',
        tags: ['Blender', 'Figma', 'Design'],
        date: '2022-05-30',
        postPath: '/amandel',
    },
    {
        id: '7',
        title: 'Venom Intro',
        category: '3D',
        description: 'Animation for Venom Esport Team',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Part2fix2_SkY9yPzkM.avif?updatedAt=1769088130147',
        tags: ['Animation', '3D', 'Team'],
        date: '2018-08-25',
        postPath: '/venom',
    },
    {
        id: '8',
        title: 'ExonNation Intro',
        category: '3D',
        description: 'Animation for Exon Esport Team.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/exon/EXONINTROv0840_Wss6-i-GP.avif',
        tags: ['Animation', '3D', 'Team'],
        date: '2018-05-07',
        postPath: '/exon',
    },
      {
        id: '9',
        title: 'SnE Intro',
        category: '3D',
        description: 'Animation for SnE Esport Team.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/SneBannerv1_CUbF4tiAY.avif?updatedAt=1769087967944',
        tags: ['Animation', '3D', 'Team'],
        date: '2018-05-19',
        postPath: '/sne',
    },  
    {
        id: '10',
        title: 'Alcohol Brand HR Guidebook',
        category: '3D',
        description: 'Visualization of a book for an alcohol brand HR department.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4_bOibHM2gT.avif?updatedAt=1769087528102",
        tags: ['3D', 'Animation'],
        date: '2020-03-05',
        postPath: '/book',
    },
      {
        id: '11',
        title: 'Sleepless Thoughts Album Design',
        category: 'Design',
        description: 'Album design for Sleepless Thoughts.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/FrontCoverV2_z6l_2QrOdt.avif?updatedAt=1769088183792",
        tags: ['Design', 'AI', 'Photoshop'],
        date: '2023-12-15',
        postPath: '/yao',
    },
    {
        id: '12',
        title: 'Corona Fighters Game Design',
        category: '3D',
        description: 'Game design for study project.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/TestRenderV4_yTNNfidzc.avif?updatedAt=1769087736302",
        tags: ['3D', 'Animation', 'Game'],
        date: '2021-04-01',
        postPath: '/corona',
    },
    {
        id: '13',
        title: 'Belial',
        category: 'Branding',
        description: 'Personal brand identity for my own brand Belial',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Belial21_0erH_LDTI.avif?updatedAt=1769087488171",
        tags: ['Personal', 'Design', '3D'],
        date: '2014-04-01',
        postPath: '/belial',
    },
];

export const projects: Project[] = rawProjects.map(project => ({
    ...project,
    images: project.images?.map(img => img)
}));


