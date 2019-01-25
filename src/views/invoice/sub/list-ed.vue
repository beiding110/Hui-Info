<template>
    <div>
        <scroll-loader action="/Api/FaPiao/FaPiaoList" :extra.sync="extraObj" v-model="tableData" ref="loader">

            <template v-for="item in tableData">
                <w-card class="info--card" @click.native="toDetail(item)">
                    <div class="invoice-to--card__title" slot="header">
                        {{item.FpType}}-{{item.Je}}
                    </div>

                    <div class="invoice-to--card__body">
                        申请时间：{{item.AddTime}}
                    </div>
                </w-card>
            </template>

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
                path: './detail',
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
.invoice-to--card__title{display:flex;}

.invoice-to--card__body{font-size: 13px;}

.state-tip{height:70%;}
</style>
