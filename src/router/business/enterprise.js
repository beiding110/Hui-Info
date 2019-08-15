export default {
    home: [
        {
            path: 'enterprise',
            name: 'huiinfo-enterprise',
            meta: {title: '企业中标'},
            component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/main')},
        }, {
            path: 'enterprise/search',
            name: 'huiinfo-enterprise-search',
            meta: {title: '企业搜索'},
            component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/search')},
        }, {
            path: 'enterprise/search/res',
            name: 'huiinfo-enterprise-search-res',
            meta: {title: '企业搜索结果'},
            component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/search-main')},
        }
    ]
}
