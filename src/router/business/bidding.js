export default {
    home: [
        {
            path: 'bidding',
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/home')},
            children: [
                {
                    path: '',
                    name: 'huiinfo-bidding',
                    meta: {title: '招标', alive: true},
                    component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/main')},
                }
            ]
        }, {
            path: 'bidding/search',
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding-search/home')},
            children: [
                {
                    path: 'advanced',
                    name: 'huiinfo-bidding-search-advanced',
                    meta: {title: '招标高级搜索'},
                    component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding-search/search-advanced')},
                }, {
                    path: 'res',
                    name: 'huiinfo-bidding-search-res',
                    meta: {title: '招标搜索结果', alive: true, vip: true},
                    component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding-search/search-main')},
                }, {
                    path: '',
                    name: 'huiinfo-bidding-search',
                    meta: {title: '招标搜索'},
                    component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding-search/search')},
                }
            ]
        }, {
            path: 'bidding/guid',
            name: 'huiinfo-bidding-guid',
            meta: {title: '招标搜索'},
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/main-guid')},
        }
    ],
    detail: [
        {
            path: 'bidding',
            name: 'detail-bidding',
            component: function(){return import(/*webpackChunkName: 'bidding'*/ '@/views/bidding/detail')},
            meta: {
                title: '招标详情'
            },
        }
    ]
}
