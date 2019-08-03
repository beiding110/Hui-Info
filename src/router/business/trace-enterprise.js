export default {
    home: [{
        path: 'trace/enterprise',
        name: 'huiinfo-trace-enterprise',
        meta: {title: '关注企业'},
        component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/home')},
    }],
    self: {
        path: '/trace/enterprise',
        name: 'trace-enterprise-list',
        meta: {title: '关注企业详情列表'},
        component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/main')},
        children: [
            {
                path: 'detail',
                name: 'trace-detail',
                meta: {title: '关注企业详情'},
                component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/detail')},
            }, {
                path: 'form',
                name: 'trace-add',
                meta: {title: '添加关注'},
                component: function(){return import(/*webpackChunkName: 'trace-enterpeise'*/ '@/views/trace-enterprise/form')},
            },
        ]
    }
}
