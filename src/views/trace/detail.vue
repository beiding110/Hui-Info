<template>
    <div style="height:100%;">
        <div class="trace-detail__title">
            根据您设置的关键词：{{extra.KeyName}}，为您预览30天之内的信息，点击标题可查看详情。

            <span class="btn-to-setting" @click="toSetting">订阅设置</span>
        </div>

        <!-- <div class="trace-detail__infotip">
            <div class="iconfont icon-zuobiao"></div>
            今日更新：
            <font class="infotip-num">{{addToday.Bidding}}</font>
            条
        </div> -->

        <div style="height:calc(100% - 80px); position:relative; overflow:hidden;">
            <list-bidding ref="listbidding" url="/Api/Biding/GetDingYueList" :extra.sync="extra" lazy></list-bidding>
        </div>
    </div>
</template>

<script>
import listBidding from '@/views/bidding/list'

import traceDetailMixins from '@/mixins/trace-detail-mixins'
import searchResMainMixins from '@/mixins/search-res-main-mixins'

import './css/detail.css'

export default {
    mixins: [traceDetailMixins, searchResMainMixins('traceDetailCache', 'extra')],
    components: {listBidding},
    data () {
        return {

        }
    },
    methods:{
        inPageHandler: function(){
            this.extra = {
                RowGuid:this.$route.params.guid == 'null' ? '' : this.$route.params.guid,
                CityCode:this.$route.params.CityCode == 'null' ? '' : this.$route.params.CityCode,
                DateRange:this.$route.params.DateRange == 'null' ? '' : this.$route.params.DateRange,
                KeyName:this.$route.params.KeyName == 'null' ? '' : this.$route.params.KeyName
            }
        },
    },
    mounted:function(){

    },
    computed:{

    },
    activated: function(){

    },
    deactivated: function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
