export default {
    home: [
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
        }
    ],
    detail: [
        {
            path: 'bidding/:guid/:type',
            name: 'detail-bidding',
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/detail')},
            meta: {alive: true, title: '招标详情'},
        }
    ]
}
