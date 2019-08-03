export default {
    home: [
        {
            path: 'enterprise',
            name: 'huiinfo-enterprise',
            meta: {title: '企业中标'},
            component: function(){return import(/*webpackChunkName: 'enterprise'*/ '@/views/enterprise/main')},
        }
    ]
}
