<template>
    <div>
        <scroll-loader action="/Api/FaPiao/FaPiaoList" :extra.sync="extraObj" v-model="tableData" ref="loader">

            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__bd">

                    <template v-for="item in tableData">
                        <div class="weui-media-box weui-media-box_appmsg" @click="toDetail(item)">
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title">{{item.FpType}}-{{item.Je}}</h4>
                                <p class="weui-media-box__desc">
                                    申请时间：{{timeFormatter(item.AddTime)}}
                                </p>
                            </div>
                        </div>
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
        toDetail(item) {
            this.$store.commit('setState', {
                invoicedInfo: item
            });
            this.$router.push({
                path: '../detail',
                query: {
                    FaPiaoGuid: item.FaPiaoGuid
                }
            })
        }
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
