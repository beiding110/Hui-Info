export default {
    home: [{
        path: 'trace',
        name: 'huiinfo-trace',
        meta: {title: '招标订阅', alive: true},
        component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/home')},
    }],
    self: {
        path: '/trace',
        name: 'trace-list',
        meta: {title: '订阅详情列表'},
        component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/home/home')},
        children: [
            {
                path: 'detail/:guid/:CityCode/:DateRange/:KeyName',
                name: 'trace-detail',
                meta: {title: '订阅详情', alive: true},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/detail')},
            }, {
                path: 'form',
                name: 'trace-add',
                meta: {title: '添加订阅'},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/form')},
            }, {
                path: 'setting',
                name: 'trace-setting',
                meta: {title: '推送设置'},
                component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/setting')},
            },
        ]
    }
}
