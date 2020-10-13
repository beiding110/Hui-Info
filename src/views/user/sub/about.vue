<template>
    <div class="share_con">
        <div class="price">
            <div>
                <div class="user_info__head_con">
                    <img src="~@/assets/logo-bxt.png"/>
                </div>
                <div class="text_con">
                    <p>
                        “标信宝”集河北省招标投标最新拟在建项目、招标公告、变更公告、开标记录、中标候选人公示、中标公告等标讯信息于一体，并根据个人需求，提供多种信息类型关键字订阅推送、定制化分析结果接收查看，真正做到及时、精准、轻松获得最新标讯提醒，让投标先人一步！
                    </p>
                    <p>您在注册为“标信宝”VIP会员后可以随时随地的掌握河北省相关招标及项目信息。</p>
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <btn type="success" @click="$router.push('/user/vippay')">立即购买会员</btn>
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
        }
    },
    computed: {

    },
    methods: {
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
        // this.wxSDK();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* .share_con{background: url(~@/assets/share_bg.png); background-size: auto 100%; } */

    .price{height:60%; display: table; width:100%; margin-top:15px;}
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
