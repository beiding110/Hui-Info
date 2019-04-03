<template>
    <div style="height:100%;">
        <div :style="{height:cbShow ? 'calc(100% - 44px)' : '100%'}">
            <scroll-loader action="/Api/FaPiao/OrderList" :extra.sync="extraObj" v-model="tableData" ref="loader">

                <template v-for="(item, index) in tableData">
                    <w-card
                    class="info--card"
                    @click.native="gotoForm(item)"
                    :key="index"
                    v-touch:hold="itemHold"
                    v-ncmenu>

                        <div class="invoice-card--con">
                            <div class="checkbox-bar" v-if="cbShow">
                                <input type="checkbox" :value="item.OrderGuid" v-model="checkedArr" @click.stop>
                            </div>
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

        <div class="bottom-btn--conteiner" v-if="cbShow">
            <div class="bottom-bar">
                <div class="bottom-btn bottom-btn--cancel" @click="cancelBtnHandler">取消</div>
                <div class="bottom-btn bottom-btn--todo" @click="toMultiInvoiceHandler">去开票</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['extra'],
    data () {
        return {
            tableData: [],
            checkedArr: [],

            extraObj: {},
            cbShow: false
        }
    },
    computed:{
        tableDataMap() {
            let td = this.tableData,
                map = {};
            td.forEach(function(item) {
                map[item['OrderGuid']] = item;
            });
            return map;
        }
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
                path: './form'
            });
        },
        itemHold(dom, e) {
            e.stopPropagation();
            e.preventDefault();

            this.cbShow = true;
        },
        cancelBtnHandler() {
            this.cbShow = false;
            this.checkedArr = [];
        },
        toMultiInvoiceHandler() {
            var sumJE = 0,
                checkedObjArr = [];

            this.checkedArr.forEach( (item) => {
                checkedObjArr.push(this.tableDataMap[item]);
            } )

            if(checkedObjArr.some((item) => {
                return !!item.FaPiaoGuid
            })) {
                return app.ShowMsgBox('存在已开票的项，请勿重复开票');
            }

            checkedObjArr.forEach((item) => {
                sumJE = Number(sumJE) + Number(item.FkJe)
            });

            this.$store.commit('setState', {
                invoiceInfo: {
                    FkJe: sumJE,
                    OrderGuid: (checkedObjArr.map((item) => {
                        return item.OrderGuid
                    })).join(',')
                }
            });

            this.$router.push({
                path: './form'
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

.bottom-bar{height:44px; box-shadow:0px 7px 9px 0px rgba(198, 220, 153, 0.35); background-color:white; line-height:44px; position:fixed; bottom:0; width:100%;}
.bottom-btn{display:inline-block; padding:0 2em; position:relative; overflow:hidden;}
.bottom-btn--todo{float:right; padding-right:3em;}
.bottom-btn--todo::after{content:' '; display:inline-block; width:.5em; height:.5em; border:2px solid rgba(199,199,204,1); border-left:0; border-bottom:0; position:absolute; right:2em; top:52%; transform: rotate(45deg) translate(-50%,-50%);}
</style>
