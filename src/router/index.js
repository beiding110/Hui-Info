import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import home from './home'
import detail from './detail'

import user from './business/user'
import invoice from './business/invoice'
import collect from './business/collect'
import trace from './business/trace'
import traceEnterprise from './business/trace-enterprise'

Vue.use(Router)

var router = new Router({
    routes: [
        { path: '/', redirect: '/home/bidding' },
        home,
        detail,

        user.self,
        invoice,
        collect,
        trace.self,
        traceEnterprise.self,
        {
            path: '/msg/:type/:title/:text',
            name: 'huiinfo-msg',
            meta: {title: '提示'},
            props: true,
            component: function(){return import(/*webpackChunkName: 'msg'*/ '@/views/home/msg')}
        },
    ]
});

function vipTest (cb, next) {
    if(store.state.IsVip || store.state.IsTry) {
        cb && cb()
    } else {
        next('/msg/error/抱歉/您是非会员，无权限查看此内容');
    };
};

function setDocTitle (to, from, next) {
    if (to.name) {
        $.closeModal();//关闭弹框
        $.hideLoading();
        document.title = to.meta.title;
        store.commit('setState', {
            docTitle: to.meta.title
        });
    };
    next();
};

router.beforeEach(function(to, from, next){
    if(to.meta.vip) {
        vipTest(() => {
            setDocTitle(to, from, next);
        }, next);
    } else {
        setDocTitle(to, from, next);
    };
})

export default router
