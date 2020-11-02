<template>
    <div>
        <!-- <div class="pay-banner info--card">
            <img src="~@/assets/vip-pay-banner.png""/>

            <div class="pay-banner--text">
                <div>限时优惠</div>
                <div>现价：<span style="color:#26D7FC;">￥680/年</span></div>
                <div>原件：￥960/年</div>
            </div>
        </div> -->

        <div class="scroll-con">
            <w-card class="info--card">
                <!-- <div class="info--card__title">套餐权益</div> -->

                <vip-table></vip-table>
            </w-card>

            <w-card class="info--card">
                <div class="info--card__title">请选择会员服务</div>

                <template>
                    <price-card v-model="payId"></price-card>
                </template>
            </w-card>
        </div>

        <btn type="success" @click="dopay" class="btn-fixed">购买</btn>
    </div>
</template>

<script>
import QRCode from 'qrcode'
import vipTable from '../components/vip-table'
import priceCard from '../components/price-card'

export default {
    components: {vipTable, priceCard},
    data () {
        return {
            form: {},
            payStep: 0,

            payId: ''
        }
    },
    methods:{
        dopay: function() {
            var that = this;
            // this.$get('/Api/User/GetZhiFuUrl', {
            //     OpenID: this.$store.state.srcOpenid || ''
            // }, function(data){
            //     // that.payStep = 1;
            //     // that.crearQRcode(data);
            //     window.location.replace(data);
            // })
            //
            if(!this.payId) {
                app.ShowMsgBox('请选择会员服务');
                return;
            }
            this.$get('/Api/Payment/GetPayUrl', {
                id: this.payId
            }, function(data){
                window.location.replace(data);
            })
        },
        getInfo: function() {
            this.form = this.$store.state.userInfo;
        },
        crearQRcode: function(url) {
            var canvas = document.getElementsByClassName('QRCode')[0];
            QRCode.toCanvas(canvas, url, {
                width: 140,
                height: 140
            }, function (error) {
                if (error) console.error(error)
                console.log('success!');
            })
        }
    },
    mounted:function(){
        this.getInfo();
    },
    activated: function(){

    },
    deactivated: function(){

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pay-banner{position:relative;}
.pay-banner img{width:100%;}

.pay-banner--text{position:absolute; left:10%; top:50%; transform:translateY(-50%); font-size:16px;}
.pay-banner--text div:first-child{font-size:20px; color:white;}
.pay-banner--text div:nth-child(2){color:white;}
.pay-banner--text div:nth-child(3){position:relative; color:#353535}
.pay-banner--text div:nth-child(3)::after{content:' '; position:absolute; width:100%; height:1px; background:#353535; left:0; top:50%; transform:rotate(4deg);}

.info--card__title{font-size:17px; color:#353535; text-align:center; font-weight:bold; line-height:2.5em;}

.scroll-con{position:absolute; left:0; top:0; right:0; bottom:46px; overflow:auto;}
.btn-fixed{position:absolute; bottom:0;}
</style>
