<template>
    <div class="page">
        <search-top v-model="search" @search="searchHandler" placeholder="示例：税务局"></search-top>

        <search-tip v-model="search" ref="searchTip" @select="goListHandler"></search-tip>
    </div>
</template>

<script>
import searchTip from './components/search-tip'

import './css/search.css'

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
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
