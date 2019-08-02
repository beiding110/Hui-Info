<template>
    <div class="page">
        <div class="weui-search-bar weui-search-bar_focusing ">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <input v-model="search" type="search" placeholder="示例：税务局" class="weui-search-bar__input">
                </div>
            </form>
            <a href="javascript:" class="submit-btn" @click="searchHandler">筛选</a>
        </div>

        <ul class="search-history">
            <li class="search-history_item" @click="clearHistoryHandler" v-if="history.length">
                <i class="iconfont">&#xe603;</i>
                清空搜索历史
            </li>
            <li class="search-history_item" v-for="item in history" @click="clickHistoryHandler(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            search: '',

            history: [
                '税务局',
                '软件'
            ]
        }
    },
    methods:{
        searchHandler() {
            var history = this.getLocal('$searchHistory') || [];

            if (history.indexOf(this.search) > -1) {
                var index = history.indexOf(this.search);
                history.splice(index, 1);
            };

            history.unshift(this.search);

            if(history.length === 11) {
                history.pop();
            };

            this.history = history;
            this.setLocal('$searchHistory', history);

            this.goto({
                path: '/home/bidding',
                query: {
                    keyname: this.search
                }
            });
        },
        clearHistoryHandler() {
            this.history = [];
            this.setLocal('$searchHistory', []);
        },
        clickHistoryHandler(key) {
            this.search = key;
            this.searchHandler();
        },
        getHistory() {
            this.history = this.getLocal('$searchHistory') || [];
        }
    },
    mounted:function(){
        this.getHistory();
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
