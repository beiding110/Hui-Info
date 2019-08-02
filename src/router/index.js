import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import home from './home'
import detail from './detail'

import user from './user'
import invoice from './invoice'
import collect from './collect'
import trace from './trace'

Vue.use(Router)

var router = new Router({
    routes: [
        { path: '/', redirect: '/home/bidding' },
        home,
        detail,
        
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
