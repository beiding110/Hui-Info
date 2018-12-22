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
            path: 'form/:type',
            name: 'trace-add',
            meta: {title: '添加追踪'},
            component: function(){return import(/*webpackChunkName: 'trace'*/ '@/views/trace/form')},
        }
    ]
}
