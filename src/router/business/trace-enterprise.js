export default {
    home: [
        {
            path: 'trace/enterprise',
            name: 'huiinfo-trace-enterprise',
            meta: {title: '关注企业', alive: true},
            component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/home')},
        }, {
            path: 'trace/enterprise-all',
            name: 'huiinfo-trace-enterprise-all',
            meta: {title: '我的关注企业', alive: true},
            component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/all')},
        },
    ],
    self: {
        path: '/trace/enterprise',
        name: 'trace-enterprise-list',
        meta: {title: '关注企业详情列表'},
        component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/home/home')},
        children: [
            {
                path: 'detail',
                name: 'trace-enterprise-detail',
                meta: {title: '关注企业详情', alive: true, vip: true},
                component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/detail')},
            }, {
                path: 'form',
                name: 'trace-enterprise-add',
                meta: {title: '添加关注', vip: true},
                component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/form')},
            }
        ]
    }
}
