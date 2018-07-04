import page1 from './page1.js' /*常用网址*/
import page2 from './page2.js' /*前端资源*/
import {data as page3} from './page3.js'/* 好好学习 */
import page4 from './page4.js'/* PHP */
import page5 from './page5.js'/* GitHub精选 */
import page6 from './page6.js'/* 工具 */
import pagetext from './pagetext.js'/* 杂项链接 */
import pageother from './pageother.js' /* 其他 */

export default {
    data:[
        {
            classify:'资讯社区',
            linkdata:page1,
            type:1
        },
        {
            classify:'前端资源',
            linkdata:page2,
            type:1
        },
        {
            classify:'好好学习',
            linkdata:page3,
            type:1
        },
        {
            classify:'GitHub精选',
            linkdata:page5,
            type:1
        },
        {
            classify:'PHP',
            linkdata:page4,
            type:1
        },
        {
            classify:'工具',
            linkdata:page6,
            type:1
        },
        {
            classify:'其他',
            linkdata:pageother,
            type:1
        },
        {
            classify:'网页收藏',
            linkdata:pagetext,
            type:0
        },
    ]

}