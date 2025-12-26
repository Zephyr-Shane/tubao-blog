import {defineCollections} from 'vuepress-theme-plume'
import blog from './blog'

export default defineCollections([
    blog,
    {
        type: 'doc', dir: 'crack', title: '破解', linkPrefix: "/crack/",
        sidebar: [
            '',
            'jetbrains/',
            'jetbrains1/',
        ],
    },
    {type: 'doc', dir: 'software', title: '软件', linkPrefix: "/share/software/", sidebar: 'auto'},
    {type: 'doc', dir: './share/software', title: '软件', linkPrefix: "/software/", sidebar: 'auto'},
    //...
])