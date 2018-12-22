import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        docTitle: '',//文档标题

        openid: '',
        collectSign: false,
        traceSign: false,
        traceItem: {},

        IsVip: true,
        userInfo: {},

        reMobile: false,

        srcOpenid: '',

        invoiceInfo: {},//申请发票的订单信息
        invoicedInfo: {},//已开票发票信息
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
