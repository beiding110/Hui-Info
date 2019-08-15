<template>
    <div style="height:100%;">
        <div class="trace-detail__title">
            {{form.CompanyName}}
        </div>

        <!-- <div class="trace-detail__infotip">
            <div class="iconfont icon-zuobiao"></div>
            今日更新：
            <font class="infotip-num">{{addToday.Bidding}}</font>
            条
        </div> -->

        <div class="trace-detail__list-con" style="position:relative; overflow:hidden;">
            <list-bidding ref="listbidding" url="/Api/Biding/GetDingYueList" :extra.sync="extra" lazy no-hyname>
                <template slot="hyname" slot-scope="scope">
                    <w-tag class="info-card footer-tags" type="primary" v-if="scope.row.zbjg !== '-1'">{{scope.row.zbjg}}万 </w-tag>
                </template>
            </list-bidding>
        </div>
    </div>
</template>

<script>
import listBidding from '@/views/bidding/list'

export default {
    components: {listBidding},
    data () {
        return {
            extra:{},

            addToday: {},
            form: {},

            dateObj: {
                3: '近三天',
                7: '近一周',
                30: '近一月',
            }
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
        reload() {
            this.$refs.listbidding.reload();
        },
        queryAddToday() {
            this.$get('/Api/DingYue/GetTodayNum', {
                id: this.extra.RowGuid
            }, (data) => {
                this.addToday = data
            })
        },
        queryInfo() {
            this.$get('/Api/DingYue/GetDetail', {
                id: this.extra.RowGuid
            }, (data) => {
                this.form = data;
            })
        }
    },
    mounted:function(){

    },
    computed:{

    },
    activated: function(){
        this.vipTest();

        this.inPageHandler();

        this.queryAddToday();
        this.form = this.$store.state.traceItem;
        this.$nextTick(()=>{
            this.reload();
        });
    },
    deactivated: function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trace-detail__title{height:44px; background:white; text-align:center; font-size:15px; line-height:44px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding:0 2em;}

.trace-detail__infotip{color:#353535; padding:.5em 1em;}
.trace-detail__infotip .iconfont{display:inline-block; color:#FC965C; margin-right:10px;}
.trace-detail__infotip .infotip-num{color:#46BB97;}

.trace-detail__list-con{height:calc(100% - 44px); width:100%;}

</style>
