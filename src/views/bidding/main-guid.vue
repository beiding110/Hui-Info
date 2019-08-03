<template>
    <div class="page">
        <div class="top-search-con">
            <img src="~@/assets/bidding-guid-bg.jpg" class="top-search-con_bg"/>
            <div class="top-search-block search-block" @click="goto('/home/bidding/search')">
                示例：税务局
            </div>
        </div>

        <template v-for="item in btnArr">
            <div class="guid-btn search-block" @click="goto(item.url)">
                <div class="guid-btn_left">
                    <i class="iconfont" v-html="item.icon" :style="{color:item.color}"></i>
                </div>
                <div class="guid-btn_right">
                    <div class="guid-btn-title">
                        {{item.title}}
                    </div>
                    <div class="guid-btn-des">
                        {{item.desc}}
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data () {
        return {
            btnArr: [
                {
                    icon: '&#xe62e;',
                    title: '招标搜索',
                    desc: '按关键字搜索招标信息',
                    url: '/home/bidding/search',
                    color: '#7793e7'
                }, {
                    icon: '&#xe609;',
                    title: '中标企业搜索',
                    desc: '搜索企业的所有中标信息',
                    url: '/home/enterprise',
                    color: '#ea9a62'
                }, {
                    icon: '&#xe634;',
                    title: '标讯浏览',
                    desc: '查看所有招标信息',
                    url: '/home/bidding',
                    color: '#eb7a6f'
                }
            ]
        }
    },
    methods:{

    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top-search-con{position:relative;}
    .top-search-con_bg{width:100%;}
    .top-search-block{font-size:15px; color:#353143; line-height:1em; transform:translate(-50%,-50%); position:absolute; left:50%; top:40%;}

    .search-block{box-sizing:border-box; width:90%; max-width:400px; border-radius:4px; background:white; margin:0 auto; padding:1em;}

    .guid-btn{overflow:hidden; padding:1.5em 1em;}
    .guid-btn + .guid-btn{margin-top:1em;}
    .guid-btn_left{font-size:34px; line-height:1em; float:left; width:50px; margin-right:-50px; text-align:center;}
    .guid-btn_left .iconfont{font-size:inherit; line-height:inherit;}
    .guid-btn_right{margin-left:50px;}
        .guid-btn-title{font-size:16px; margin:4px 0; color:#2d2d2d; font-weight:bold;}
        .guid-btn-des{color:#636363;}
</style>
