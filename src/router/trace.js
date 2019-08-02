export default //追踪详情列表
{
    path: '/trace',
    name: 'trace-list',
    meta: {title: '追踪详情列表'},
    component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/main')},
    children: [
        {
            path: 'detail/:guid/:CityCode/:DateRange/:KeyName',
            name: 'trace-detail',
            meta: {title: '追踪详情'},
            component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/detail')},
        },
        {
            path: 'form',
            name: 'trace-add',
            meta: {title: '添加追踪'},
            component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/form')},
        },
        {
            path: 'form-keyword',
            name: 'trace-add-keyword',
            meta: {title: '添加追踪关键字'},
            component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/sub/form-keyword')},
        },
        {
            path: 'form-settings',
            name: 'trace-add-settings',
            meta: {title: '添加追踪设置'},
            component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/sub/form-settings')},
        }
    ]
}
