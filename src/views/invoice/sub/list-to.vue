<template>
    <div>
        <scroll-loader action="/Api/FaPiao/OrderList" :extra.sync="extraObj" v-model="tableData" ref="loader">

            <template v-for="item in tableData">
                <w-card class="info--card" @click.native="gotoForm(item)">

                    <div class="invoice-card--con">
                        <div class="info-bar">
                            <div class="invoice-to--card__title" slot="header">
                                <div>
                                    {{item.FkSm.split('：')[0]}}
                                    <template v-if="item.FaPiaoGuid">
                                        <i class="weui-icon-success-no-circle"></i>
                                    </template>
                                </div>
                                <div>微信支付
                                    <span style="color:#E05457;">￥{{item.FkJe}}</span>
                                </div>
                            </div>

                            <div class="invoice-to--card__body">
                                支付时间：{{item.PaymentTime}}
                            </div>
                        </div>
                    </div>

                </w-card>
            </template>

        </scroll-loader>
    </div>
</template>

<script>
export default {
    props: ['extra'],
    data () {
        return {
            tableData: [],

            extraObj: {}
        }
    },
    computed:{

    },
    watch: {
        extra: {
            handler: function(n){
                if(typeof(n)=='string'){
                    this.extraObj = {openid: n}
                }else{
                    this.extraObj = n
                }
            },deep:true
        }
    },
    methods:{
        reload: function(){
            this.$refs.loader.reload();
        },
        timeFormatter: function(time){
            return / /.test(time) ? time.split(' ')[0] : time;
        },
        gotoForm: function(item) {
            if(item.FaPiaoGuid) {
                app.ShowMsgBox('该项已申请开票，请勿重复开票');
                return;
            };
            this.$store.commit('setState', {
                invoiceInfo: item
            });
            this.$router.push({
                path: '../form'
            });
        }
    },
    created: function () {

    },
    mounted:function(){

    },
    activated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoice-to--card__title{display:flex;}
.invoice-to--card__title div:first-child{flex:1; font-weight:bold; color:#353535;}
.invoice-to--card__title div:last-child{font-size:13px; width:10em; text-align:right; color:#666666; font-weight:normal;}

.invoice-to--card__body{font-size: 13px;}

.state-tip{height:70%;}

.invoice-card--con{display:flex; width:100%;}
.checkbox-bar{width:40px;}
.info-bar{flex:1;}

.weui-icon-success-no-circle{font-size:14px; color:#09BB07;}
</style>
