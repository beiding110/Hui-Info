<template>
    <div class="page">
        <search-bar v-model="extraForm.KeyName" @search="quertData"></search-bar>

        <div class="page-content" style="top:44px;">
            <list :extra.sync="extraForm" ref="list" :bold="extraForm.KeyName" lazy url="/Api/Biding/GetDingYueZhaoBiaoList"></list>
        </div>

        <w-btn-fixed @click="goSetting">设置</w-btn-fixed>
    </div>
</template>

<script>
import list from '@/views/bidding/list'
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
    methods: {
        goSetting() {
            this.goto('/home/trace')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}
</style>
