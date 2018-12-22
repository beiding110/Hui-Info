<template>
    <div>
        <scroll-loader action="/Api/Project/GetProjectList" :extra.sync="extraObj" v-model="tableData" ref="loader">

            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__bd">

                    <template v-for="item in tableData">
                        <router-link :to="'/detail/project/'+item.RowGuid+'/'+item.Category" class="weui-media-box weui-media-box_appmsg">
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title">{{item.Title}}</h4>
                                <p class="weui-media-box__desc">
                                    <div class="item-info-con_left">
                                        <div>
                                            <span class="weui-badge city">{{item.CityName}}</span>
                                            <span class="weui-badge type">{{item.SsHyName}}</span>
                                        </div>
                                    </div>
                                    <div class="item-info-con_right">
                                        {{timeFormatter(item.AddTime)}}
                                    </div>
                                </p>
                            </div>
                        </router-link>
                    </template>

                </div>
            </div>

        </scroll-loader>
    </div>
</template>

<script>
export default {
    props: ['extra'],
    data () {
        return {
            tableData: [],

            extraObj: {}
        }
    },
    computed:{

    },
    watch: {
        extra: {
            handler: function(n){
                if(typeof(n)=='string'){
                    this.extraObj = {openid: n}
                }else{
                    this.extraObj = n
                }
            },deep:true
        }
    },
    methods:{
        reload: function(){
            this.$refs.loader.reload();
        },
        timeFormatter: function(time){
            return / /.test(time) ? time.split(' ')[0] : time;
        },
    },
    created: function () {

    },
    mounted:function(){

    },
    activated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item-info-con_left{width:100%; float:left; margin-right:-80px;}
    .item-info-con_left>div{margin-right:80px;}
    .item-info-con_right{width:80px; float:right; text-align:right; color:#909399}
</style>
