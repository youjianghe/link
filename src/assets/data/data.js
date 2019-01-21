import page1 from './page1.js' /*常用网址*/
import page_front from './page_front.js' /*前端资源*/
import {data as page_study} from './page_study.js'/* 好好学习 */
import page_php from './page_php.js'/* PHP */
import page_github from './page_github.js'/* GitHub精选 */
import page_tool from './page_tool.js'/* 工具 */
import page_yunying from './page_yunying.js'/* 运营笔记 */
import page_media_tools from './page_media_tools.js'/* 新媒体 */
import page8 from './page8.js' /* 设计 */
import page9 from './page9.js' /* 主题 */
import page_weixin from './page_weixin.js' /* 微信开发资源 */
import pagetext from './pagetext.js'/* 杂项链接 */
import pageother from './pageother.js' /* 其他 */
import page_movie from './page_movie.js' /* 影视娱乐 */
import page_school from './page_school.js' /* 培训机构 */

export default {
    data:[
        {
            classify:'知识&资讯',
            linkdata:page1,
            type:1
        },
        {
            classify:'HTML&CSS&JS',
            linkdata:page_front,
            type:1
        },
        {
            classify:'好好学习',
            linkdata:page_study,
            type:1
        },
        {
            classify:'GitHub精选',
            linkdata:page_github,
            type:1
        },
        {
            classify:'PHP',
            linkdata:page_php,
            type:1
        },
        {
            classify:'工具',
            linkdata:page_tool,
            type:1
        },
        {
            classify:'运营笔记',
            linkdata:page_yunying,
            type:1
        },
        {
            classify:'微信开发',
            linkdata:page_weixin,
            type:0
        },
        {
            classify:'设计',
            linkdata:page8,
            type:0
        },
        {
            classify:'主题',
            linkdata:page9,
            type:0
        },
        {
            classify:'其他',
            linkdata:pageother,
            type:1
        },
        {
            classify:'影视娱乐',
            linkdata:page_movie,
            type:1
        },
        {
            classify:'新媒体&工具',
            linkdata:page_media_tools,
            type:0
        },
        {
            classify:'网页收藏',
            linkdata:pagetext,
            type:0
        },
        {
            classify:'培训机构',
            linkdata:page_school,
            type:0
        }
    ]

}