//用户
export default {
    path: '/user',
    name: 'huiinfo-user-con',
    meta: {title: '用户'},
    component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/user/detail')},
    children: [
        {
            path: 'phone',
            name: 'huiinfo-user-phone',
            meta: {title: '用户·绑定手机号'},
            component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/user/sub/phone')},
        },
        {
            path: 'vippay',
            name: 'huiinfo-user-vippay',
            meta: {title: '用户·购买会员'},
            component: function(){return import(/*webpackChunkName:+ 'user'*/ '@/views/user/sub/vip-pay')},
        },
        {
            path: 'paysuccess',
            name: 'huiinfo-user-paysuccess',
            meta: {title: '用户·购买成功'},
            component: function(){return import(/*webpackChunkName:+ 'user'*/ '@/views/user/sub/vip-pay-res')},
        },
        {
            path: 'share/:openid',
            name: 'huiinfo-user-share',
            meta: {title: '用户·分享'},
            component: function(){return import(/*webpackChunkName: 'user'*/ '@/views/user/sub/share')},
        }
    ]
}
