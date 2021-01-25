<template>
    <div style="height:100%;">
        <div class="trace-detail__title">
            {{form.KeyName}}——{{form.CityName}}——{{dateObj[form.DateRange]}}
        </div>

        <div class="trace-detail__infotip">
            <div class="iconfont icon-zuobiao"></div>
            今日更新：
            招标信息
            <font class="infotip-num">{{addToday.Bidding}}</font>
            条，项目信息
            <font class="infotip-num">{{addToday.Project}}</font>
            条
        </div>

        <search-bar placeholder="业主单位 / 招标代理名称 / 项目名称" v-model="extra.Value" @search="reload"></search-bar>

        <div style="height:calc(100% - 124px);">
            <w-tab>
                <w-tab-item label="招标" name="bidding">
                    <list-bidding ref="listbidding" url="/Api/Biding/GetDingYueList" :extra.sync="extra" lazy></list-bidding>
                </w-tab-item>
                <w-tab-item label="项目" name="project">
                    <list-project ref="listproject" url="/Api/Project/GetDingYueList" :extra.sync="extra" lazy></list-project>
                </w-tab-item>
            </w-tab>
        </div>
    </div>
</template>

<script>
import listBidding from '@/views/bidding/list'
import listProject from '@/views/project/list'
export default {
    components: {listBidding, listProject},
    data () {
        return {
            extra:{
                Value: '',
            },

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
                RowGuid:this.$route.params.guid == 'null' ? '' : this.$route.params.guid,
                CityCode:this.$route.params.CityCode == 'null' ? '' : this.$route.params.CityCode,
                DateRange:this.$route.params.DateRange == 'null' ? '' : this.$route.params.DateRange,
                KeyName:this.$route.params.KeyName == 'null' ? '' : this.$route.params.KeyName,
                Value: '',
            }
        },
        reload() {
            this.$refs.listbidding.reload();
            this.$refs.listproject.reload();
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
        if(!this.$store.state.IsVip && !this.$store.state.IsTry){
            this.$router.replace('/msg/error/抱歉/您是非会员，无权限查看此内容');
        }

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

.trace-detail__list-con{height:calc(100% - 80px); width:100%;}

</style>
