<template>
    <div class="table">
    <div class="tr">
        <div class="th">功能</div>
        <div class="th">描述</div>
        <div class="th">VIP会员</div>
        <div class="th">免费会员</div>
    </div>

    <template v-for="item in table">
        <div class="tr">
            <div class="td">
                {{item.block}}
            </div>
            <div class="td t_left">
                {{item.desc}}
            </div>
            <div class="td">
                <template v-if="item.vip">
                    <img src="~@/assets/vip/icon-check.png" class="icon-intable" />
                </template>
                <template v-else>
                    -
                </template>
            </div>
            <div class="td">
                <template v-if="item.normal">
                    <img src="~@/assets/vip/icon-check.png" class="icon-intable" />
                </template>
                <template v-else>
                    -
                </template>
            </div>
        </div>
    </template>

</div>

</template>

<script>
export default {
    data () {
        return {
            table: [
                {
                    block: '标讯浏览',
                    desc: '招标公告、答疑澄清、变更公告、开标记录、中标候选人公示、中标公告信息浏览查看',
                    vip: true,
                    normal: true
                }, {
                    block: '标讯搜索',
                    desc: '招标公告、答疑澄清、变更公告、开标记录、中标候选人公示、中标公告信息关键字搜索',
                    vip: true,
                    normal: true
                }, {
                    block: '标讯筛选',
                    desc: '对信息搜索结果按行业、地区、信息类型、日期、平台提供多维度精准筛选，快速查阅感兴趣的各类信息。',
                    vip: true,
                    normal: false
                }, {
                    block: '标讯订阅',
                    desc: '自定义信息关键词订阅，您可以关注招标、中标等信息类型，设置订阅条件，系统自动推送符合条件的各类信息。',
                    vip: true,
                    normal: false
                }, {
                    block: '代理机构跟踪',
                    desc: '自定义订阅招标代理（企业）名称，每当招标代理的招标、中标等标讯信息产生新的动态时，系统自动推送提醒，实现全程自动跟踪查看。',
                    vip: true,
                    normal: false
                }, {
                    block: '招标人跟踪',
                    desc: '自定义订阅招标人（企业）名称，每当招标人的招标、中标等标讯信息产生新的动态时，系统自动推送提醒，实现全程自动跟踪查看。',
                    vip: true,
                    normal: false
                }, {
                    block: '中标单位跟踪',
                    desc: '自定义订阅中标（企业）名称，每当中标企业产生新的中标动态时，系统自动推送提醒，实现全程自动跟踪查看。',
                    vip: true,
                    normal: false
                }, {
                    block: '标讯关注',
                    desc: '支持信息浏览时进行关注，并可设置关键日期点提醒。实现全程自动跟踪，有效避免误期事件。',
                    vip: true,
                    normal: false
                }, {
                    block: '微信推送',
                    desc: '通过微信方式，及时通知用户最新动态，便于用户时刻了解所关注信息、企业情况。',
                    vip: true,
                    normal: false
                }, {
                    block: '标讯收藏',
                    desc: '支持收藏感兴趣的公告公示，方便用户在我的关注的项目中查看。',
                    vip: true,
                    normal: false
                }, {
                    block: '黄金展位',
                    desc: '信息列表页、信息浏览页面预留广告黄金展位，优先VIP会员提供，另行收费。',
                    vip: true,
                    normal: false
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
.table{display:table; border:1px solid rgba(229,229,229,1); border-right:0; border-bottom:0; width:100%;}
.tr{display:table-row;}
.th, .td{text-align:center; display:table-cell; padding:1em; border-bottom:1px solid rgba(229,229,229,1); border-right:1px solid rgba(229,229,229,1); vertical-align:middle; min-width:2em;}
.td.t_left{text-align:left;}
.th{font-weight:400; background-color:rgba(251,251,251,1);}

.td .iconfont{display:inline-block; margin-right:.5em;}

.icon-intable{width:1.2em;}
.info-tip{font-size:12px;}
</style>
