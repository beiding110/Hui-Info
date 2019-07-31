import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import home from '@/views/home/home'
import detail from '@/views/home/detail'

import user from './user'
import invoice from './invoice'
import collect from './collect'
import trace from './trace'

Vue.use(Router)

var router = new Router({
    routes: [
        { path: '/', redirect: '/home/bidding' },
        {
            path: '/home',
            name: 'huiinfo',
            component: home,
            meta: {alive: true, title: '欢迎'},
            children: [
                {
                    path: 'bidding',
                    name: 'huiinfo-bidding',
                    meta: {title: '招标'},
                    component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/main')},
                },
                {
                    path: 'project',
                    name: 'huiinfo-project',
                    meta: {title: '项目'},
                    component: function(){return import(/*webpackChunkName: 'project'*/ '@/views/project/main')},
                },
                {
                    path: 'trace',
                    name: 'huiinfo-trace',
                    meta: {title: '追踪'},
                    component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/home')},
                },
                {
                    path: 'user',
                    name: 'huiinfo-user',
                    meta: {title: '我的'},
                    component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/user/main')},
                }
            ]
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail,
            meta: {title: '详情页'},
            children: [
                //招标详情
                {
                    path: 'bidding/:guid/:type',
                    name: 'detail-bidding',
                    component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/detail')},
                    meta: {alive: true, title: '招标详情'},
                },
                //项目详情
                {
                    path: 'project/:guid/:type',
                    name: 'detail-project',
                    component: function(){return import(/*webpackChunkName: 'project'*/ '@/views/project/detail')},
                    meta: {alive: true, title: '项目详情'},
                },
            ]
        },
        user,
        invoice,
        collect,
        trace,
        {
            path: '/msg/:type/:title/:text',
            name: 'huiinfo-msg',
            meta: {title: '提示'},
            props: true,
            component: function(){return import(/*webpackChunkName: 'msg'*/ '@/views/home/msg')}
        },
    ]
})

router.beforeEach(function(to, from, next){
    if (to.name) {
        $.closeModal();//关闭弹框
        $.hideLoading();
        document.title = to.meta.title;
        store.commit('setState', {
            docTitle: to.meta.title
        })
    }
    next();
})

export default router
