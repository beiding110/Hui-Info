<template>
    <div>
        <div class="top-btn-con">
            <btn type="primary" @click="toKeyWord">添加订阅</btn>
        </div>
        <div class="page-con">
            <div class="scroller-con">
                <scroll-loader action="/Api/DingYue/GetDingYueList" v-model="tableData" ref="loader">
                    <template v-for="(item,index) in tableData">
                        <div class="trace-list_item">
                            <div class="trace-list_item_row trace-list_item-title">
                                {{item.KeyName || '-'}}
                            </div>
                            <div class="trace-list_item_row trace-list_item-body">
                                <div>
                                    地区：{{item.CityName || '-'}}
                                </div>
                                <div>
                                    时间段：{{item.DateRange ? '近 ' + item.DateRange + ' 天' : '-'}}
                                </div>
                                <div>
                                    定制日期：{{item.AddTime}}
                                </div>
                            </div>
                            <div class="trace-list_item_row trace-list_item-footer">
                                <span class="btn-text" @click="deleteHandler(item)">
                                    <i class="iconfont">&#xe603;</i>
                                    删除
                                </span>
                                <span class="btn-text" @click="toKeyWord(item)">
                                    <i class="iconfont">&#xec88;</i>
                                    编辑
                                </span>
                                <span class="btn-text btn-view" @click="toDetail(item)">
                                    <i class="iconfont">&#xe61c;</i>
                                    查看
                                </span>
                            </div>
                        </div>
                    </template>
                </scroll-loader>
            </div>
        </div>
    </div>
</template>

<script>
import traceCard from '../components/trace-card'
export default {
    components: {traceCard},
    data () {
        return {
            tableData:[]
        }
    },
    watch: {

    },
    methods:{
        vipTest(cb) {
            if(this.$store.state.IsVip || this.$store.state.IsTry) {
                cb()
            } else {
                this.$router.push('/msg/error/抱歉/您是非会员，无权限查看此内容');
            }
        },
        toKeyWord(row) {
            // console.log('keyword')
            this.vipTest(() => {
                this.$router.push({
                    path: '/trace/form-keyword',
                    query: {
                        type: row.RowGuid || 'new'
                    }
                })
            })
        },
        toDetail(row) {
            this.$store.commit('setState', {traceItem: row});
            this.$nextTick(() => {
                this.$router.push('/trace/detail/' + row.RowGuid + '/' + row.CityCode + '/' + row.DateRange + '/' + row.KeyName);
            })
        },
        deleteHandler(row) {
            app.showConform('删除该条数据？', () => {
                this.$get('/Api/DingYue/DeleteDingYue', {
                    id: row.RowGuid
                }, (data) => {
                    this.$refs.loader.reload();
                });
            });
        }
    },
    mounted:function(){

    },
    activated: function(){
        var that = this;
        if(this.$store.state.traceSign){
            this.$refs.loader.reload();
            that.$store.commit('setState',{
                traceSign: false
            });
        }
    },
    deactivated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top-btn-con{padding:10px; background:white; overflow:hidden;}
    .page-con{position:absolute; top:70px; left:0; right:0; bottom:0; overflow:hidden;}
    .scroller-con{position:relative; width:100%; height:100%;}

    .weui-cells{margin-top:0;}
    a{color:inherit;}

    .trace--list__item__icon{display:inline-block; font-size:1em; margin-right:5px; color:#905DD9;}

    .fixed-card{position:fixed; height:84px; bottom:0; left:0; width:100%; }

    .trace-list_item{box-shadow:0 0 5px #F3F8FE; background:white; color:#3A3A3A;}
    .trace-list_item + .trace-list_item{margin-top:10px;}
    .trace-list_item_row{padding:10px 20px;}
    .trace-list_item .trace-list_item-title{position:relative; font-weight:18px; font-weight:bold;}
    .trace-list_item .trace-list_item-title:after{content:' '; display:block; width:90%; height:0; border-bottom:1px dashed #E0E0E0; position:absolute; left:5%; bottom:0;}
    .trace-list_item-body{}
        .trace-list_item-body div{line-height:2em;}
    .trace-list_item-footer{text-align:right;}
    .btn-text + .btn-text{margin-left:1em;}
    .btn-view{color:#1F80E6;}
</style>
