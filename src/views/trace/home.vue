<template>
    <div class="page">
        <div class="top-btn-con">
            <btn-to-setting></btn-to-setting>
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
import btnToSetting from './components/btn-to-setting.vue'
import './css/home.css'

export default {
    components:{
        traceList,
        btnToSetting
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

</style>
