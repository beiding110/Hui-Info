<template>
    <div class="page">
        <search-bar v-model="extraForm.KeyName" @search="quertData"></search-bar>
        <div class="weui-flex w-sel-search">
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="地区" v-model="extraForm.CityCode" @select="quertData" :data="CityData"></btn-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="行业" v-model="extraForm.HyCode" @select="quertData" :data="HyData"></btn-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="阶段" v-model="extraForm.JdCode" @select="quertData" :data="JdData"></btn-picker>
            </div>
        </div>
        <div class="page-content" style="top:88px;">
            <list :extra="extraForm" ref="list"></list>
        </div>
    </div>
</template>

<script>
import list from './list'
import mainMixins from '@/mixins/main-mixins'

export default {
    mixins: [mainMixins],
    components: {
        list
    },
    data () {
        return {

        }
    },
    computed: {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}
</style>
