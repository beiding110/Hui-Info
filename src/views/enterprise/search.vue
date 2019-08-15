<template>
    <div class="page">
        <div class="weui-search-bar weui-search-bar_focusing ">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <input v-model="search" type="search" placeholder="示例：税务局" class="weui-search-bar__input">
                </div>
            </form>
            <a href="javascript:" class="submit-btn" @click="searchHandler" :style="{color:search?'#409EFF' : '#aaa'}">筛选</a>
        </div>

        <search-tip v-model="search" ref="searchTip" @select="goListHandler"
        store-key="$searchEnterpriseHistory" trace-url="/Api/DingYue/GetQiYeList" trace-key="CompanyName"></search-tip>
    </div>
</template>

<script>
import searchTip from '@/views/bidding/components/search-tip'
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
