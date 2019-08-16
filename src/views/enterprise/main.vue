<template>
    <div class="page">
        <search-bar v-model="extraForm.CompanyName" @search="quertData" placeholder="企业名称"></search-bar>
        <div class="page-content" style="top:44px;">
            <list :extra.sync="extraForm" ref="list" :bold="extraForm.CompanyName" lazy></list>
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

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}
</style>
