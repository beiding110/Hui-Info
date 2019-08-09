<template>
    <div>
        <ul class="search-history">
            <li class="search-history_item" @click="clearHistoryHandler" v-if="history.length">
                <i class="iconfont">&#xe603;</i>
                清空搜索历史
            </li>
            <li class="search-history_item" v-for="item in history" @click="clickHistoryHandler(item)">
                {{item}}
            </li>
        </ul>

        <ul class="search-history">
            <li class="search-history_item" v-if="trace.length">
                <i class="iconfont">&#xe636;</i>
                订阅关键词
            </li>
            <li class="search-history_item" v-for="item in trace" @click="clickHistoryHandler(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        historyMaxLength: {
            type: Number,
            default: 5
        }
    },
    data () {
        return {
            history: [
                '税务局',
                '软件'
            ],
            trace: []
        }
    },
    computed: {
        search: {
            get() {
                return this.value
            },
            set(n, o) {
                this.$emit('input', n)
            }
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

            if(history.length === (this.historyMaxLength + 1)) {
                history.pop();
            };

            this.history = history;
            this.setLocal('$searchHistory', history);

            this.$emit('select', this.search);
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
        },

        getTraceKeyWord() {
            this.$get('/Api/DingYue/GetDingYueList', {
                PageIndex: 1
            }, data => {
                this.trace = data.map(item => item.KeyName);
            });
        }
    },
    mounted:function(){
        this.getHistory();

        this.getTraceKeyWord();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-history{text-align:center; position:relative; padding:1em 0;}
.search-history_item{color:#a1a1a1; margin:1em; list-style:none;}

.search-history + .search-history::before{content:''; display:block; width:90%; height:1px; background:#EFEFF4; position:absolute; top:0; left:5%;;}
</style>
