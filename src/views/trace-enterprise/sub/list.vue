<template>
    <div class="scroller-con">
        <scroll-loader action="/Api/DingYue/GetQiYeList" v-model="tableData" ref="loader">
            <template v-for="(item,index) in tableData">
                <div class="trace-list_item">
                    <div class="trace-list_item_row trace-list_item-title">
                        {{item.CompanyName || '-'}}
                    </div>
                    <div class="trace-list_item_row trace-list_item-body">
                        <div>
                            地区：{{item.CityName || '全部'}}
                        </div>
                        <div>
                            信息类别：{{item.TypeName || '全部'}}
                        </div>
                        <!-- <div>
                            时间段：{{item.DateRange ? '近 ' + item.DateRange + ' 天' : '-'}}
                        </div> -->
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

                        <w-switch
                        class="btn-text"
                        size="small"
                        active-text="启用"
                        v-model="item.Shbj"
                        active-value="1"
                        inactive-value="0"
                        @input="switchChangeHandler(item)"></w-switch>

                        <span class="btn-text btn-view" @click="toDetail(item)">
                            <i class="iconfont">&#xe61c;</i>
                            查看
                        </span>
                    </div>
                </div>
            </template>
        </scroll-loader>
    </div>
</template>

<script>
import traceListMixins from '@/mixins/trace-list-mixins'
export default {
    mixins: [traceListMixins],
    methods:{
        toKeyWord(row) {
            this.$router.push({
                path: '/trace/enterprise/form',
                query: {
                    type: row.RowGuid || 'new'
                }
            });
        },
        toDetail(row) {
            this.$store.commit('setState', {traceItem: row});
            this.$nextTick(() => {
                this.goto({
                    path: '/trace/enterprise/detail',
                    query: {
                        rowguid: row.RowGuid,
                        citycode: row.CityCode,
                        daterange: row.DateRange,
                        companyname: row.CompanyName
                    }
                });
            })
        },
        switchChangeHandler(row) {
            this.$post('/Api/DingYue/DingYueManager', row, data => {
                app.ShowMsg('修改成功');

                this.$store.commit('setState',{
                    traceSign: true
                });
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
