<template>
    <div class="page">
        <div class="top-search-con">
            <img src="~@/assets/bidding-guid-bg.jpg" class="top-search-con_bg"/>
            <div class="top-search-block">
                <div class="search-block" @click="goto('/home/bidding/search')">
                    示例：税务局
                </div>
                <img src="@/assets/bidding-guide-text.png" class="bidding-guide-text"/>
                <!-- <h2 class="title">标信订阅开启服务定制新时代</h2> -->
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
                    desc: '按关键字、行业、时间段、地区、类型搜索招标信息',
                    url: '/home/bidding',
                    color: '#7793e7'
                }, {
                    icon: '&#xe609;',
                    title: '企业搜索',
                    desc: '搜索企业作为招标人、招标代理、中标单位、投标人情况下的项目信息',
                    url: '/home/enterprise/search',
                    color: '#ea9a62'
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
    .top-search-block{width:90%; max-width:400px; font-size:15px; color:#353143; line-height:1em; transform:translate(-50%,-50%); position:absolute; left:50%; top:45%;}

    .search-block{box-sizing:border-box; border-radius:4px; background:white; margin:0 auto; padding:1em;}
    .title{font-size:16px; color:#D6E5F8; line-height:2em; text-indent:1.5em; letter-spacing:.1em;}

    .guid-btn.search-block{width:90%; max-width:400px;}

    .guid-btn{overflow:hidden; padding:1.5em 1em;}
    .guid-btn + .guid-btn{margin-top:1em;}
    .guid-btn_left{font-size:34px; line-height:1em; float:left; width:50px; margin-right:-50px; text-align:center;}
    .guid-btn_left .iconfont{font-size:inherit; line-height:inherit;}
    .guid-btn_right{margin-left:50px;}
        .guid-btn-title{font-size:16px; margin:4px 0; color:#2d2d2d; font-weight:bold;}
        .guid-btn-des{color:#636363;}

    .bidding-guide-text{height:32px; margin:6px 0 0 12px;}
</style>
