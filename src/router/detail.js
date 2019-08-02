import detail from '@/views/home/detail'

export default {
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
}
