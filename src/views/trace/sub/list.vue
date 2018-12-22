<template>
    <div>
        <scroll-loader action="/Api/DingYue/GetDingYueList" v-model="tableData" ref="loader">
            <div class="weui-cells">

                <template v-for="item in tableData">
                    <div class="weui-cell weui-cell_swiped" :key="item.RowGuid">
                        <div class="weui-cell__bd" @click="openTrace(item)">
                            <div class="weui-cell">
                                <div class="weui-cell__hd">
                                    <i class="iconfont trace--list__item__icon">&#xe615;</i>
                                </div>
                                <div class="weui-cell__bd">
                                    <p>{{item.Title}}</p>
                                </div>
                                <div class="weui-cell__ft">左划更多操作</div>
                            </div>
                        </div>
                        <div class="weui-cell__ft">
                            <a class="weui-swiped-btn weui-swiped-btn_default close-swipeout" href="javascript:" @click="$router.push('/trace/form/'+item.RowGuid)">编辑</a>
                            <a class="weui-swiped-btn weui-swiped-btn_warn delete-swipeout" href="javascript:" @click="delTrace(item.RowGuid)">取消追踪</a>
                        </div>
                    </div>
                </template>

            </div>
        </scroll-loader>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData:[]
        }
    },
    watch: {
        tableData: {
            handler: function(n, o){
                this.$nextTick(function(){
                    $('.weui-cell_swiped').swipeout();
                })
            },
            deep: true
        }
    },
    methods:{
        delTrace: function(id){
            var that = this;
            this.$get('/Api/DingYue/DeleteDingYue', {
                id: id
            }, function(data){
                that.$refs.loader.reload();
            })
        },
        openTrace: function(item){
            var that = this;
            this.$store.commit('setState', {traceItem: item});
            this.$nextTick(function(){
                that.$router.push('/trace/detail/' + item.RowGuid + '/' + item.CityCode + '/' + item.DateRange + '/' + item.KeyName);
            })
        }
    },
    mounted:function(){
        $('.weui-cell_swiped').swipeout();
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
        this.collect = undefined;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-cells{margin-top:0;}
    a{color:inherit;}

    .trace--list__item__icon{display:inline-block; font-size:1em; margin-right:5px; color:#905DD9;}
</style>
