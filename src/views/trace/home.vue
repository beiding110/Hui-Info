<template>
    <div class="page">
        <div class="top-btn-con">
            <btn type="primary" @click="toKeyWord">添加订阅</btn>
        </div>
        <div class="page-con">
            <trace-list ref="list"></trace-list>
        </div>
    </div>
        <!-- <div class="trace-top_con">
            <span class="trace-top_text">
                <i class="iconfont" style="color:#905DD9;">&#xe636;</i>
                追踪列表
            </span>
            <router-link to="/trace/form/new">
                <btn type="primary" size="mini" icon="&#xe703;">新建</btn>
            </router-link>
        </div>
        <div class="page-content" style="">
            <trace-list></trace-list>
        </div> -->
</template>

<script>
import traceList from './sub/list.vue'
export default {
    components:{
        traceList
    },
    data () {
        return {

        }
    },
    methods:{
        toKeyWord(row) {
            this.$refs.list.toKeyWord('new');
        },
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .trace-top_con{height:44px; vertical-align: middle; width:100%; border-bottom: 1px solid #e5e5e5; position: relative; z-index:500; background: white;}
    .trace-top_con .weui-btn{position: absolute; right:1em; top:50%; transform: translate(0, -50%);}
    .trace-top_text{margin:1em; line-height: 44px;}

    .weui-btn.weui-btn_mini .iconfont{margin-right:0.3em; font-size:12px;}

    .top-btn-con{padding:10px; background:white; overflow:hidden;}
    .page-con{position:absolute; top:70px; left:0; right:0; bottom:0; overflow:hidden;}
</style>
