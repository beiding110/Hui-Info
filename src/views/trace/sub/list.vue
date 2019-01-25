<template>
    <div>
        <scroll-loader action="/Api/DingYue/GetDingYueList" v-model="tableData" ref="loader">
            <template v-for="(item,index) in tableData">
                <trace-card
                class="info--card"
                :value="item.KeyName"
                :data="item"
                :key="index"></trace-card>
            </template>

            <trace-card class="info--card"></trace-card>
        </scroll-loader>
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
    .weui-cells{margin-top:0;}
    a{color:inherit;}

    .trace--list__item__icon{display:inline-block; font-size:1em; margin-right:5px; color:#905DD9;}

    .fixed-card{position:fixed; height:84px; bottom:0; left:0; width:100%; }
</style>
