/**
 * Site Configuration
 * Customize your portfolio by editing the values in this file
 */

export const siteConfig = {
    // Branding
    brand: {
        name: 'Michal Jelinski',
        tagline: 'High-fidelity photography for those who see the world differently.',
        description: "Capturing life's most precious moments with a cinematic touch. Specializing in portraits, events, and fine art photography.",
    },

    // Contact Information
    contact: {
        email: 'mich.jelin1@gmail.com',
    },

    // External Data (Google Sheets)
    externalData: {
        useExternal: true,
        sheetID: '1rMAlN6YwTkYbDk0A_j_e6CF7xyGeRDtW7QU1BUcZ9bg',
        testimonialsId: '0',
        testimonialsSheetName: 'Testimonials', 
        playlistId: '1292124055',
        playlistSheetName: 'Playlists', 
        obsessionsId: '1794714348',
        obsessionsSheetName: 'Obsession',
        photographerImagesId: '458562337',
        photographerImagesSheetName: 'photoImages',
        designerImagesId: '65051388',
        designerImagesSheetName: 'designerImages',
        feautredPhotoId:'1109124500',
        feautredPhotoSheetName: 'feautredPhotos',
    },

    // Social Media Links
    social: {
        instagram: 'https://www.instagram.com/jelinski_photo/',
        instagram2: 'https://www.instagram.com/belialdesign/',
        linkedin: 'https://www.linkedin.com/in/michal-jelinski1/',
        youtube: 'https://www.youtube.com/@BelialDesign/videos',
        behance: 'https://www.behance.net/michajeliski1',
        email: 'mailto:mich.jelin1@gmail.com',
    },
    socialName: {
        instagram: '@jelinski_photo',
        instagram2: '@belialdesign',
        linkedin: 'Michal Jelinski',
        youtube: '@BelialDesign',
        behance: 'michajeliski1',
        email: 'mich.jelin1@gmail.com',
    },

    // Booking Info
    booking: {
        status: 'closed', // 'open' | 'limited' | 'closed'
        currentSeason: '2026',
        availability: 'Limited spots available for June & July.',
        bookingUrl: '#', // Link to booking form or calendar
    },

    // About Section
    about: {
        bio: "I'm a photographer based in New York City, obsessed with light, shadow, and the raw emotion of the moment. With over 5 years of experience in both digital and film photography, I strive to create images that feel timeless.",
    },

    // Experience/Work History
    experience: [
        {
            role: 'UI/UX Designer & Frontend Developer',
            company: 'FastTony',
            period: '2021.07 - 2023.08',
            description: 'Editorial shoots, fashion weeks, and celebrity portraits.',
            place: 'Rumia, Poland',
        },
        {
            role: 'Photographer',
            company: 'Baltic Sail',
            period: '2022.08.28',
            description: 'I captured and documented the vibrant atmosphere of the Baltic Sail event in Gdańsk, showcasing its diverse attractions, including music concerts, educational activities for children, and dining areas. My team and I embarked on a motorboat cruise to capture the majestic sailing ships and their crew in detail.',
            place: 'Gdansk, Poland',
        },
        {
            role: 'Graphic Designer',
            company: 'Press Office of the Maritime University of Gdynia',
            period: '2019.10 - 2020.06',
            description: 'Managed studio operations, lighting setups, and client relations.',
            place: 'Gdynia, Poland',
        }
    ],

    // Music Playlist (for About page)
    playlist: [
        { title: 'Music', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5Y68SQzfL48NQVaf9o8Ew5a&si=3Xz4D_9wjVHSOFup' },
        { title: 'PL Rap', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5Zp4QqYVrk2uI-DbbOPu2xp&si=fuHiZNGuCJv6EFOE' },
        { title: 'Indie', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5b0y3i4VHXOebhKI4boH9V4&si=PB7u3hkh-t2IOpZT' },
        { title: 'Rock', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5bBJ2HdptokOt_rhZDJt4LP&si=sh02LbCkMacgaPlT' },
        { title: 'Electro', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5bBJ2HdptokOt_rhZDJt4LP&si=sh02LbCkMacgaPlT' },
        { title: 'Rock', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5bBJ2HdptokOt_rhZDJt4LP&si=HJ0miFbVk7VLZME1' },
        { title: 'House', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5ZdoZi5UBBNZmNKZTDu1yOH&si=Ri3BYnEaleirb176' },
        { title: 'International Rap', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5ZAmeURtf2B5onc7Kkny1P6&si=pyeHnm6NsUD2kp6T' },
        { title: 'Drumm & Bass', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5Zp8R0Eobcu0Xx4HaEoQyiU&si=sqQ6BGZGbGj9jaqV' },
        { title: 'Dubstep', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5a8U_KJn253imVdgGd1BV10&si=UkjGlk6JiBtRbRCI' },
        { title: 'Rap', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5bntSETieU77S1b42qkuwAZ&si=hQifltR706Q9xX-P' },
        { title: 'Shadow', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5a4fs8sIoHT6DugTtg2VvMJ&si=DuEOpFYBHyENd5Cd' },
        { title: 'Big Room', platform: 'Youtube', url: 'https://youtube.com/playlist?list=PLrrdqmv-Sk5aRFl9t6eSBunkZRm9wtia0&si=rfaApFBoB3gu903t' },
        { 
            title: '1-800 Oswiecenie NoSkit', 
            platform: 'Spotify', 
            url: 'https://open.spotify.com/playlist/6VDbcculglYwX1aHcYXQ6u?si=b251d2b4f59d42be',
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e020b7d805ca76219f2be598ccf'
        },
        { 
            title: 'Drumm & Bass', 
            platform: 'SoundCloud', 
            url: 'https://soundcloud.com/micha-jeli-ski/sets/drumm-bass/s-sB27kgWoa4T?si=2410ab0c2fc240f39117db45c22eb416&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
            thumbnail: 'https://i1.sndcdn.com/artworks-ZTb354X9GYiJpUWT-42eqMA-t200x200.jpg'
        },
    ],

    // SEO & Metadata
    seo: {
        title: 'Michal Jelinski - Professional Photography Portfolio',
        description: 'High-fidelity photography portfolio showcasing portraits, events, and fine art photography.',
        keywords: ['photography', 'portfolio', 'photographer', 'professional photography', 'portraits', 'events'],
        author: 'Michal Jelinski',
        twitterHandle: '@jelinski_',
    },

    // Legal
    legal: {
        privacyPolicyUrl: '#',
        termsOfServiceUrl: '#',
        copyrightYear: new Date().getFullYear(),
        copyrightHolder: 'Michal Jelinski Photography',
    },

    // Features
    features: {
        enableBlog: true,
        enableBooking: false,
        enableGalleryFilters: true,
        enableLanguageSwitcher: true,
    },
};

export type SiteConfig = typeof siteConfig;
