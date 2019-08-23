<template>
    <div class="page">
        <div class="top-btn-con">
            <btn-to-setting type="enterprice"></btn-to-setting>
            <btn type="primary" @click="toKeyWord">添加订阅</btn>
        </div>
        <div class="page-con">
            <trace-list ref="list"></trace-list>
        </div>
    </div>
</template>

<script>
import traceList from './sub/list.vue'
import btnToSetting from '@/views/trace/components/btn-to-setting.vue'

import '@/views/trace/css/home.css'

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
    .page-con{top:123px;}

    .trace-enterprice-tip{background:#f4f4f8;padding:1em; font-size:13px; font-weight:bold;}
</style>
