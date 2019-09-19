<template>
    <div class="page page_search">
        <search-top v-model="search" @search="searchHandler" noBtn ref="searchTop"></search-top>

        <search-tip v-model="search" ref="searchTip" @select="goListHandler"
        store-key="$searchEnterpriseHistory" trace-url="/Api/DingYue/GetQiYeList" trace-key="CompanyName"></search-tip>
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
                path: '/home/enterprise/search/res',
                query: {
                    CompanyName: this.search
                }
            });
        }
    },
    mounted:function(){
        this.$refs.searchTop.focus();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
