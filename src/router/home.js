import home from '@/views/home/home'

export default {
    path: '/home',
    name: 'huiinfo',
    component: home,
    meta: {alive: true, title: '标信通'},
    children: [
        {
            path: 'bidding',
            name: 'huiinfo-bidding',
            meta: {title: '招标'},
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/main')},
        }, {
            path: 'bidding/guid',
            name: 'huiinfo-bidding-guid',
            meta: {title: '招标搜索'},
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/main-guid')},
        }, {
            path: 'bidding/search',
            name: 'huiinfo-bidding-search',
            meta: {title: '招标搜索'},
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/search')},
        }, {
            path: 'project',
            name: 'huiinfo-project',
            meta: {title: '项目'},
            component: function(){return import(/*webpackChunkName: 'project'*/ '@/views/project/main')},
        }, {
            path: 'trace',
            name: 'huiinfo-trace',
            meta: {title: '追踪'},
            component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/home')},
        }, {
            path: 'user',
            name: 'huiinfo-user',
            meta: {title: '我的'},
            component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/user/main')},
        }
    ]
}
