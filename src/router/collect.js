//收藏
export default {
    path: '/collect',
    name: 'huiinfo-collect',
    meta: {title: '惠信息·收藏主页'},
    component: function(){return import(/*webpackChunkName: 'collect'*/ '@/views/collect/main')},
    children: [
        {
            path: 'index',
            name: 'huiinfo-sollect-index',
            meta: {title: '惠信息·收藏'},
            component: function(){return import(/*webpackChunkName: 'collect'*/ '@/views/collect/index')}
        }
        // {
        //     path: 'bidding',
        //     name: 'huiinfo-collect-bidding',
        //     meta: {title: '惠信息·收藏'},
        //     component: function(){return import(/*webpackChunkName: 'collect'*/ '@/views/collect/list-bidding')},
        //     props: true
        // },
        // {
        //     path: 'project',
        //     name: 'huiinfo-collect-project',
        //     meta: {title: '惠信息·收藏'},
        //     component: function(){return import(/*webpackChunkName: 'collect'*/ '@/views/collect/list-project')}
        // }
    ]
}
