<template>
    <div>
        <div class="price">
            <div>
                <div>
                    <span style="">￥</span>
                    <span style="">680</span>
                    <span style="font-size:1.3em;">/年</span>
                </div>
            </div>
        </div>
        <div class="weui-btn-area" v-if="!payStep">
            <btn type="success" @click="dopay">购买</btn>
        </div>
        <div class="buttom_con" v-show="payStep">
            <div class="QRCode_con">
                <canvas class="QRCode"></canvas>
            </div>
            <p>
                长按识别二维码购买会员
            </p>
        </div>

        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">惠信息</a>
                </p>
                <p class="weui-footer__text">© 2018 中惠科技</p>
            </div>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
    data () {
        return {
            form: {},
            payStep: 0
        }
    },
    methods:{
        dopay: function() {
            var that = this;
            this.$get('/Api/User/GetZhiFuUrl', {
                OpenID: this.$store.state.srcOpenid || ''
            }, function(data){
                // that.payStep = 1;
                // that.crearQRcode(data);
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
    .price{height:60%; display: table; width:100%;}
    .price>div{display: table-cell; vertical-align: middle; text-align: center;}
    .price>div span:nth-child(1){font-size:3em; }
    .price>div span:nth-child(2){font-size:4em; font-weight: 600;}

    .user_info__head_con{border-radius: 50%; overflow: hidden; position: relative; width:4.5rem; height:4.5rem; display: inline-block; background: #eee;}
    .user_info__head_con>img{width:100%; position: absolute; left: 50%; top:50%; transform: translate(-50%, -50%);}

    .user_info__user_name{font-size:1rem;}

    .buttom_con{text-align: center;}
    .buttom_con .QRCode_con{box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); display: inline-block; width: 140px; height: 140px;}
    .buttom_con .QRCode_con>img{width:100%;}
    .buttom_con p{margin:0.5em;}
</style>
