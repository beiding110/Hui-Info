<template>
    <div class="page">
        <search-top v-model="search" @search="searchHandler" placeholder="示例：税务局"></search-top>

        <search-tip v-model="search" ref="searchTip" @select="goListHandler"></search-tip>
    </div>
</template>

<script>
import searchTip from './components/search-tip'
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
.page{overflow:hidden;}
.page, .weui-search-bar{background:white;}
.weui-search-bar__box{padding-left:1em; padding-right:1em;}
.weui-search-bar:before, .weui-search-bar:after{content:none}

.submit-btn{margin-left:10px; line-height:28px; color:#409EFF; white-space:nowrap; display:block;}

.search-history{text-align:center;}
.search-history_item{color:#a1a1a1; margin:1em; list-style:none;}
</style>
