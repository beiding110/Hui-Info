import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        docTitle: '',//文档标题

        openid: '',
        collectSign: false,//收藏变化标记
        traceSign: false,//追踪变化标记

        traceItem: {},//追踪项信息

        IsVip: true,
        IsTry: true,
        userInfo: {},

        reMobile: false,//手机号变更标记

        srcOpenid: '',

        invoiceInfo: {},//申请发票的订单信息
        invoicedInfo: {},//已开票发票信息

        dictionary: {},//数据字典

        biddingSearchCache: {},//招标搜索条件缓存
        enterpriseSearchCache: {},//企业搜索条件缓存
        traceDetailCache: {},//追踪详情条件缓存
        enterpriseTraceDetailCache: {},//企业追踪详情条件缓存
    },
    mutations: {
        setState: function(state, n){
            Object.keys(n).forEach(function(item){
                if(state[item] != undefined){
                    state[item] = n[item];
                }else{
                    throw new Error('请先在store中注册变量:'+item);
                }
            })
        }
    }
})
