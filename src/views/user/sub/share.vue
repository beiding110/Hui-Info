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
        <div class="weui-btn-area">
            <btn type="success" @click="$router.push('/user/vippay')">立即购买会员</btn>
            <btn type="warning" @click="$router.replace('/home/user')" style="margin-top:15px;">返回首页</btn>
        </div>

        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">惠信息</a>
                </p>
                <p class="weui-footer__text">© 2018 中惠科技</p>
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
import jsSHA from 'jssha'

export default {
    data () {
        return {
            form: {},
            guidShow: true
        }
    },
    computed: {
        showControl() {
            return this.guidShow && ((this.$store.state.userInfo || {}).OpenID === this.$route.params.openid);
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
        }
    },
    mounted:function(){
        this.getInfo();
        this.wxSDK();
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
</style>
