<template>
    <div class="share_con">
        <div class="price">
            <div>
                <div class="user_info__head_con">
                    <img src="~@/assets/logo_single.png"/>
                </div>
                <div class="text_con">
                    <p>“惠信息”是河北中惠博裕科技有限公司出品的一款为企业移动客户端提供招标采购信息和项目信息的应用软件，“惠信息”为广大的施工企业和材料设备供应商推送精准及时的招标信息、采购信息、项目信息，信息覆盖交通工程、房屋建筑、化工能源、市政设施、电力环保、政府采购等领域。</p>
                    <p>您在注册为“惠信息”会员后可以随时随地的掌握河北省相关招标及项目信息。</p>
                </div>
            </div>
        </div>
        <!-- <div class="weui-btn-area">
            <btn type="success" @click="$router.push('/user/vippay')">立即购买会员</btn>
            <btn type="warning" @click="$router.replace('/home/user')" style="margin-top:15px;">返回首页</btn>
        </div> -->

        <div class="area-qrcode">
            <div class="user-info">
                <div class="user-header">
                    <img :src="!!sharedUserInfo.HeadImgUrl ? sharedUserInfo.HeadImgUrl : 'data:image/png;base64,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'"/>
                </div>
                <div class="user-name">
                    您的好友：
                    <span class="user-name-text">{{!!sharedUserInfo.NickName ? sharedUserInfo.NickName : '未设定'}}</span>
                    ，邀请您成为惠信息会员
                </div>
            </div>

            <div class="qrcode-info">
                <!-- <canvas ref="qrcode"></canvas> -->
                <img :src="qrcodeUrl"/>
                <div class="tip">
                    识别二维码以获取会员
                </div>
            </div>
        </div>

        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">惠信息</a>
                </p>
                <p class="weui-footer__text">© 2020 中惠科技</p>
            </div>
        </div>

        <div class="share__guid--cover" v-if="showControl">
            <img src="~@/assets/share-guid.png"/>
            <div class="share__guid__btn" @click="guidShow=false"></div>
        </div>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import QRCode from 'qrcode'

export default {
    data () {
        return {
            form: {},
            guidShow: true,

            sharedUserInfo: {},
            qrcodeUrl: ''
        }
    },
    computed: {
        showControl() {
            return this.guidShow && ((this.$store.state.userInfo || {}).OpenID === this.$route.params.openid);
        },
        userid() {
            return this.$route.params.openid;
        }
    },
    methods: {
        getInfo: function() {
            var that = this;
            !!this.$route.params.openid && this.$store.commit('setState', {
                srcOpenid: that.$route.params.openid
            });

            if(!!this.$store.state.userInfo){
                this.form = this.$store.state.userInfo;
            }else{
                this.$get('/Api/user/GetUserInfo', function(data){
                    that.$store.commit('setState', {
                        userInfo: data
                    });

                    that.form = data;
                })
            };
        },
        wxSDK: function() {
            var that = this;
            this.$get('/Api/Base/GetWxJsConfig', {
                url: window.location.href
            }, function(data) {
                var configObj = {
                    debug: false,
                    appId: data.AppId,
                    timestamp: data.Timestamp,
                    nonceStr: data.NonceStr,
                    signature: data.Signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
                };

                wx.config(configObj);

                wx.ready(function() {
                    wx.onMenuShareTimeline({
                        title: '惠信息',
                        link: window.location.href,
                        imgUrl: 'http://www.hbidding.com/huiinfo/static/pic300.png',
                        success: function() {
                            // alert('分享成功');
                        }
                    }),
                    wx.onMenuShareAppMessage({
                        title: '惠信息',
                        desc: '',
                        link: window.location.href,
                        imgUrl: 'http://www.hbidding.com/huiinfo/static/pic300.png',
                        success: function() {
                            // alert('分享成功');
                        }
                    })
                })
            })
        },
        initQrcode() {
            if(!this.userid) return;
            // var qrcode = QRCode.toCanvas(this.$refs.qrcode, `http://www.hbidding.com/huiinfo/index.html?shareduserid=${this.userid}#/home/bidding`, error => {
            //     if(error) {
            //         console.log(error);
            //     };
            // })

            QRCode.toDataURL(`http://www.hbidding.com/huiinfo/index.html?shareduserid=${this.userid}#/home/bidding`, (err, url) => {
                url && (this.qrcodeUrl = url);
            });
        },
        getUserInfoByRowguid() {
            if(!this.userid) return;

            this.$get('/Api/User/GetShareUserInfo', {
                userid: this.userid
            }, data => {
                this.sharedUserInfo = data;
            });
        }
    },
    mounted:function(){
        // this.getInfo();
        this.wxSDK();

        this.getUserInfoByRowguid();
        this.initQrcode();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* .share_con{background: url(~@/assets/share_bg.png); background-size: auto 100%; } */

    .price{height:60%; display: table; width:100%;}
    .price>div{display: table-cell; vertical-align: middle; text-align: center;}
    .text_con{margin:0 1em;}
    .text_con p{text-align: left; text-indent: 2em; padding: 0.5em; }

    .user_info__head_con{border-radius: 50%; overflow: hidden; position: relative; width:4.5rem; height:4.5rem; display: inline-block;}
    .user_info__head_con>img{width:100%; position: absolute; left: 50%; top:50%; transform: translate(-50%, -50%);}

    .user_info__user_name{font-size:1rem;}

    .share__guid--cover{position:fixed; left:0; right:0; top:0; bottom:0; background:rgba(0,0,0,.5); z-index:9999;}
    .share__guid--cover img{position: absolute; right:20px; top:10px; width:200px;}
    .share__guid__btn{width:130px; height:50px; position:absolute; left:60%; top:30%; transform:translate(-50%,-50%); background:url(~@/assets/share-guid-btn.png); background-size:cover;}

    
    .user-info{flex:1; overflow:hidden; text-align:center; padding:10% 0; padding-left:16px;}
    .user-info .user-header{width:4em; height:4em; position:relative; border-radius:50%; overflow:hidden; margin:0 auto; margin-bottom:1em;}
    .user-info .user-header img{width:100%; position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);}
    .user-info .user-name .user-name-text{background:#692170; color:white; border-radius:2px; padding:0 .5em;}

    .area-qrcode{background:white; border-radius:4px; margin:0 1em; overflow:hidden; display:flex; padding-bottom:16px;}
    .qrcode-info{width:180px; text-align:center; overflow:hidden;}
    .qrcode-info canvas{float:left;}
    .area-qrcode .tip{text-align:left; font-size:12px; background:#692170; border-radius:2px; color:white; float:left; width:90%; text-align:center; margin-left:5%;}
</style>
