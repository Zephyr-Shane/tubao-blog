import {defineNavbarConfig} from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
    {
        text: "博客",
        link: "/blog/",
        icon: "line-md:home-md",
        // icon: "material-symbols:article-outline",
    },
    {
        text: "简历",
        link: "/resume/",
        icon: "qlementine-icons:resume-16",
    },
    {
        text: "友链",
        link: "/friends/",
        icon: "carbon:friendship",
    },
    {
        text: "站点导航",
        icon: "hugeicons:share-01",
        link: "/sites-collect/",
    },
    {
        text: '笔记',
        icon: 'icon-park-solid:bookshelf',
        items: [
            {
                text: '破解',
                link: '/crack/',
                activeMatch: '^/crack/',
                icon: 'emojione:memo',
            },
            {
                text: '软件',
                link: '/share/software/',
                activeMatch: '^/share/software/',
                icon: 'hugeicons:software-license',
            },
        ],
    },
    // {
    //     text: "笔记",
    //     icon: "hugeicons:share-01",
    //     items: [
    //         {text: "破解", link: "/share/crack/", icon: "hugeicons:software-license"},
    //         {text: "软件", link: "/share/soft/", icon: "hugeicons:software-license"},
    //     ],
    // },
    {
        text: "图库",
        link: "/gallery/",
        icon: "streamline-plump:gallery-2",
    },
    {
        text: "软件",
        link: "/software/",
        icon: "hugeicons:software-license",
    },
    {
        text: "关于",
        link: "/about/",
        icon: "fa-regular:meh",
    },
]);
