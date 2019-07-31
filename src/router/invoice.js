//发票功能
export default {
    path: '/invoice',
    name: 'huiinfo-user-invoice',
    meta: {title: '用户·发票'},
    component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/invoice/main')},
    children: [
        {
            path: 'index',
            name: 'huiinfo-user-invoice-index',
            meta: {title: '用户·发票详情'},
            component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/invoice/index')},
            children: []
        },
        {
            path: 'form',
            name: 'huiinfo-user-invoice-form',
            meta: {title: '用户·申请发票'},
            component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/invoice/form')},
        },{
            path: 'detail',
            name: 'huiinfo-user-invoice-detail',
            meta: {title: '用户·发票详情'},
            component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/invoice/detail')},
        }
    ]
}
