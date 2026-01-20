import { getDevImageUrl } from '@/lib/utils';

export interface Project {
    id: string;
    title: string;
    category: '3D' | 'UI/UX' | 'Branding' | 'Painting' | 'Drawing' | 'Design';
    description: string;
    content: string;
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
        description: 'A',
        content: 'Woody FoodTruck is a small business started by a passionate group of friends that wanted to share their love for Italian food with others. Woody\'s built-in, wood - fired pizza oven is what makes them stand out from other businesses alike.They can handcraft the pizza in a way traditional Italians do.Thanks to the mobility of a food truck, they can serve their specialty wherever they please.You can taste their mouth - watering, fire - baked pizza at many food events and conventions.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/woody/card/visa-front_ziOsUPV0q.avif?updatedAt=1768489347991&ik-s=e36a4d55bf42912917d6c5e2e11acdbf9501e2af",
        tags: ['Figma', 'Illustrator', 'Photoshop', 'Design', 'Blender'],
        date: '2019-07',
        postPath: '/home/belial/GitHub/photo-portfolio/src/content/projects/woody',
    },
        {
        id: '2',
        title: 'AudienceForge',
        category: 'UI/UX',
        description: 'A clean, modern interface for a next-generation banking application.',
        content: 'Focused on simplifying complex financial data into an intuitive user experience. The design system prioritizes accessibility and clear data visualization.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/fasttony/Frame1_VxVdLR-Ll7.avif?updatedAt=1768490680345&ik-s=98ed2986c5893e1012aa652b423da07f525057a9',
        tags: ['Figma', 'Mobile Design', 'User Research'],
        date: '2024-03-10',
        postPath: '/audience',
    },
     {
        id: '3',
        title: 'Bukszpryt - Plakaty',
        category: 'Design',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/bukszpryt/KaraokeCzwartki_MZJs7xUAQ.avif?updatedAt=1768489623176&ik-s=27602c24df9bca722797668066c3c1e06474e3a7",
        tags: ['Charcoal', 'Portrait', 'Realism'], 
        date: '2023-12-15',
        postPath: '/buk',
    },
    {
        id: '4',
        title: 'RikoHD',
        category: 'Branding',
        description: 'Complete brand identity for a sustainable fashion startup.',
        content: 'From logo design to packaging and social media guidelines. The brand identity reflects the company\'s commitment to sustainability through earthy tones and organic typography.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/rikohd/Youtube%20Banner%20Rikohd_9Y2x_iGgV.avif?updatedAt=1768491082749&ik-s=38c1a0148519ef1a9fd3eaba513802b03afb060e',
        tags: ['Logo Design', 'Packaging', 'Brand Strategy'],
        date: '2024-01-05',
        postPath: '/rikohd',
    },

    {
        id: '6',
        title: 'Amandel Milch Packaging',
        category: '3D',
        description: 'Have you ever wondered what the most important items of life are? Well, wonder no more!',
        content: '',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/amandel/AmandelPackagingV6_4_SkPMsmURfM.avif?updatedAt=1768490637807&ik-s=e2c3004d65df8f48aae4293304da0fcde4fdbc0b',
        tags: ['Blender', 'Figma', 'WIP'],
        date: '2022-05-30',
        postPath: '/amandel',
    },
    {
        id: '7',
        title: 'Venom Intro',
        category: '3D',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/venom/Part2fix2_Cuf3YUn9C.avif?updatedAt=1768495630931&ik-s=96523f901b803c93e0a0ab079569ca7808d5962d',
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2018-08-25',
        postPath: '/venom',
    },
    {
        id: '8',
        title: 'ExonNation Intro',
        category: '3D',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/exon/EXONINTROv0840_5Y3c-3sTO.avif?updatedAt=1768495214709&ik-s=3d42197d4aa9132f6c9237a1ba4dc13773737644',
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2018-05-07',
        postPath: '/exon',
    },
      {
        id: '9',
        title: 'SnE Intro',
        category: '3D',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: 'https://ik.imagekit.io/j3l1n5k1/gfx/project/sne/SneBannerv1_34UUSjBy_.avif?updatedAt=1768495450027&ik-s=eedaa6497cbf6b7e8a5dfcff6af8e48132c2dd12',
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2018-05-19',
        postPath: '/sne',
    },  
    {
        id: '10',
        title: 'Alcohol Brand HR Guidebook',
        category: '3D',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/book/BookMisc4_Fm9ppWJ5I.avif?updatedAt=1768490544944&ik-s=0ea3cfac2d0de1b5420870b87026a038bfe8d369",
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2020-03-05',
        postPath: '/book',
    },
      {
        id: '11',
        title: 'Sleepless Thoughts Album Design',
        category: 'Design',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/yao/FrontCoverV2_SjhtAbXH2.avif?updatedAt=1768491343591&ik-s=29b0abd8736234fe4b40c942dca6e61098ce3af0",
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2023-12-15',
        postPath: '/yao',
    },
    {
        id: '12',
        title: 'Corona Fighters Game Design',
        category: '3D',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/corona/TestRenderV4_nRk7aKyPU.avif?updatedAt=1768492291973&ik-s=77d870f916ce7e886b0372a128e4e60ffe3ea22f",
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2021-04-01',
        postPath: '/corona',
    },
    {
        id: '13',
        title: 'Belial',
        category: 'Branding',
        description: 'Hyper-realistic charcoal studies of human expressions.',
        content: 'A study of light and shadow on the human face. These drawings focus on micro-expressions and the texture of skin.',
        coverImage: "https://ik.imagekit.io/j3l1n5k1/gfx/project/belial/Belial21__h7OPsX9Y.avif?updatedAt=1768495109443&ik-s=4453fe31f9d1dcf54901e356a090293e6bba7759",
        tags: ['Charcoal', 'Portrait', 'Realism'],
        date: '2014-04-01',
        postPath: '/belial',
    },
];

export const projects: Project[] = rawProjects.map(project => ({
    ...project,
    coverImage: getDevImageUrl(project.coverImage),
    images: project.images?.map(img => getDevImageUrl(img))
}));
