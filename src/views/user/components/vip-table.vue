<template>
    <div class="table">
    <div class="tr">
        <div class="th">会员特权</div>
        <div class="th">无会员</div>
        <div class="th">会员</div>
    </div>

    <div class="tr">
        <div class="td">
            <img src="~@/assets/vip/icon-vip-z.png" class="icon-intable" />
            招标信息查看
        </div>
        <div class="td">-</div>
        <div class="td">
            <img src="~@/assets/vip/icon-check.png" class="icon-intable" />
        </div>
    </div>

    <div class="tr">
        <div class="td">
            <img src="~@/assets/vip/icon-vip-x.png" class="icon-intable" />
            项目信息查看
        </div>
        <div class="td">-</div>
        <div class="td">
            <img src="~@/assets/vip/icon-check.png" class="icon-intable" />
        </div>
    </div>

    <div class="tr">
        <div class="td">
            <img src="~@/assets/vip/icon-vip-g.png" class="icon-intable" />
            个性化定制追踪
        </div>
        <div class="td">-</div>
        <div class="td">
            <img src="~@/assets/vip/icon-check.png" class="icon-intable" />
        </div>
    </div>

    <div class="tr">
        <div class="td">
            <img src="~@/assets/vip/icon-vip-zl.png" class="icon-intable" />
            <span>
                追踪信息提醒<br />
                <font class="info-tip">（需关注“标信通”公众号）</font>
            </span>
        </div>
        <div class="td">-</div>
        <div class="td">
            <img src="~@/assets/vip/icon-check.png" class="icon-intable" />
        </div>
    </div>
</div>

</template>

<script>
export default {
    data () {
        return {

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
.th, .td{display:table-cell; padding:1em; border-bottom:1px solid rgba(229,229,229,1); border-right:1px solid rgba(229,229,229,1); text-align:center; vertical-align:middle;}
.th{font-weight:400; background-color:rgba(251,251,251,1);}

.td .iconfont{display:inline-block; margin-right:.5em;}

.icon-intable{width:1.2em;}
.info-tip{font-size:12px;}
</style>
