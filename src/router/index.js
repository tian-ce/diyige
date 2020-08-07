import Vue from 'vue'
import VueRouter from 'vue-router'
import menubar from '../components/menubar/menubar.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/menubar',
    component: menubar /* 公共底部 */
}, {
    path: '/home',
    component: () =>
        import ('../views/home/home.vue') /* 首页 */
}, {
    path: '/zhuanti',
    component: () =>
        import ('../views/home/zhuanti.vue') /* 首页的专题 */
}, {
    path: '/weizhiwei',
    component: () =>
        import ('../views/home/weizhiwei.vue') /* 首页的微职位 */
}, {
    path: '/vipcourse',
    component: () =>
        import ('../views/vipCourse/vipcourse.vue') /* 会员课程 */
}, {
    path: '/ranking',
    component: () =>
        import ('../views/ranking/ranking.vue') /* 课程排行榜 */
}, {
    path: '/Wode',
    component: () =>
        import ('../views/mine/Wode.vue') /* 我的主页 */
}, {
    path: '/study',
    component: () =>
        import ('../views/study/index.vue') /* 学习的首页 */
}, {
    path: '/wuyiboke',
    component: () =>
        import ('../views/wuyiboke/index.vue') /* 首页进入的博客文章首页*/
}, {
    path: '/boke',
    component: () =>
        import ('../views/wuyiboke/boke.vue') /* 博客文章里的个人信息*/
}, {
    path: '/jingdongshujuku',
    component: () =>
        import ('../views/wuyiboke/jingdongshujuku.vue') /* 博客文章首页的10000+专区里的第一个  京东数据库*/
}, {
    path: '/yiqianwenzhang',
    component: () =>
        import ('../views/wuyiboke/yiqianwenzhang.vue') /* 博客文章首页的10000+专区  更多进入的*/
}, {
    path: '/sikejiaohuan',
    component: () =>
        import ('../views/wuyiboke/sikejiaohuan.vue') /* 博客文章首页的思科交换*/
}, {
    path: '/qiandaoyouli',
    component: () =>
        import ('../views/day/qiandaoyouli.vue') /* 首页的每日有礼主页 */
}, {
    path: '/xuefenshangcheng',
    component: () =>
        import ('../views/day/xuefenshangcheng.vue') /* 每日有礼的学分商城 */
}, {
    path: '/xuefenshangcheng1',
    component: () =>
        import ('../views/day/xuefenshangcheng1.vue')
}, {
    path: '/youhuozhuanqu',
    component: () =>
        import ('../views/day/youhuozhuanqu.vue') /* 每日有礼的优惠专区 */
}, {
    path: '/rengongzhineng',
    component: () =>
        import ('../views/course/rengongzhineng.vue') /* 课程的主页 */
}, {
    path: '/dashuju',
    component: () =>
        import ('../views/ranking/dashuju.vue') /* 课程排行榜里的详情 */
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router