export default {
    home: [
        {
            path: 'enterprise',
            meta: {title: '企业'},
            component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/home')},
            children: [
                {
                    path: '',
                    name: 'huiinfo-enterprise',
                    meta: {title: '企业中标', alive: true},
                    component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/main')},
                }, {
                    path: 'search',
                    name: 'huiinfo-enterprise-search',
                    meta: {title: '企业搜索'},
                    component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/search')},
                }, {
                    path: 'search/res',
                    name: 'huiinfo-enterprise-search-res',
                    meta: {title: '企业搜索结果', alive: true},
                    component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/search-main')},
                }
            ]
        }
    ]
}
