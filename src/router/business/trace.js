export default {
    home: [{
        path: 'trace',
        name: 'huiinfo-trace',
        meta: {title: '招标订阅'},
        component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/home')},
    }],
    self: {
        path: '/trace',
        name: 'trace-list',
        meta: {title: '订阅详情列表'},
        component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/main')},
        children: [
            {
                path: 'detail/:guid/:CityCode/:DateRange/:KeyName',
                name: 'trace-detail',
                meta: {title: '订阅详情'},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/detail')},
            },
            {
                path: 'form',
                name: 'trace-add',
                meta: {title: '添加订阅'},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/form')},
            },
            {
                path: 'form-keyword',
                name: 'trace-add-keyword',
                meta: {title: '添加订阅关键字'},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/sub/form-keyword')},
            },
            {
                path: 'form-settings',
                name: 'trace-add-settings',
                meta: {title: '添加订阅设置'},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/sub/form-settings')},
            }
        ]
    }
}
