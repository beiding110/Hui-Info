<template>
    <div class="page page_search">
        <search-top v-model="search" @search="searchHandler" placeholder="示例：税务局" ref="searchTop"></search-top>

        <search-tip v-model="search" ref="searchTip" @select="goListHandler"></search-tip>
    </div>
</template>

<script>
import searchTip from '@/views/bidding-search/components/search-tip'

import '@/views/bidding/css/search.css'

export default {
    components: {searchTip},
    data () {
        return {
            search: '',
        }
    },
    methods:{
        searchHandler() {
            this.$refs.searchTip.searchHandler();
        },
        goListHandler() {
            this.goto({
                path: '/home/bidding/search/res',
                query: {
                    KeyName: this.search
                }
            });
        },
        getQueryInfo() {
            this.search = this.getQuery('KeyName');
        }
    },
    mounted:function(){
        this.getQueryInfo();
        this.$refs.searchTop.focus();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
