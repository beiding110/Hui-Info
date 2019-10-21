<template>
    <div style="height:100%;">
        <div class="trace-detail__title">
            {{extra.CompanyName}}
        </div>

        <!-- <div class="trace-detail__infotip">
            <div class="iconfont icon-zuobiao"></div>
            今日更新：
            <font class="infotip-num">{{addToday.Bidding}}</font>
            条
        </div> -->

        <div class="trace-detail__list-con" style="position:relative; overflow:hidden;">
            <list-bidding ref="listbidding" key="trace-enterprise-list-bidding"
            url="/Api/Biding/GetDingYueList"
            :extra.sync="extra" lazy no-hyname>
                <template slot="hyname" slot-scope="scope">
                    <w-tag class="info-card footer-tags" type="primary" v-if="scope.row.zbjg !== '-1'" style="float:right; margin-right:.5em;">
                        {{scope.row.zbjg}}万
                    </w-tag>
                </template>
            </list-bidding>
        </div>
    </div>
</template>

<script>
import listBidding from '@/views/bidding/list'

import traceDetailMixins from '@/mixins/trace-detail-mixins'
import searchResMainMixins from '@/mixins/search-res-main-mixins'

import '@/views/trace/css/detail.css'

export default {
    mixins: [traceDetailMixins, searchResMainMixins('enterpriseTraceDetailCache', 'extra')],
    components: {listBidding},
    data () {
        return {

        }
    },
    methods:{
        inPageHandler: function(){
            this.extra = {
                RowGuid: this.getQuery('rowguid'),
                CityCode: this.getQuery('citycode'),
                DateRange: this.getQuery('daterange'),
                CompanyName: this.getQuery('companyname')
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
.trace-detail__title{text-align:center; font-size:15px; line-height:44px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding:0 2em;}

.trace-detail__list-con{height:calc(100% - 44px); width:100%;}

</style>
