<template>
    <div class="w-search-top">
        <div class="w-search-con" :class="searchConFocus" @click="gotoSearch">
            <template v-if="readonly">
                <span class="w-search-input">{{model || placeholder}}</span>
            </template>
            <template v-else>
                <input class="w-search-input" type="search"
                ref="input"
                v-model="model"
                :placeholder="placeholder"
                @focus="focusHandler" @blur="blurHandler" @keydown="search"/>
                <i class="weui-icon-search search-icon" v-if="isFocus" @click="searchHandler"></i>
            </template>
        </div>
        <span class="search-btn" v-if="!isFocus && !noBtn" @click="screenHandler">筛选</span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '搜索'
        },
        screen: {
            type: Boolean,
            default: true
        },
        readonly: {
            type: Boolean,
            default: false
        },
        noBtn: {
            type: Boolean,
            default: false
        },
        queryKey: {
            type: String,
            default: 'KeyName'
        }
    },
    data () {
        return {
            searchKey: '',

            isFocus: false
        }
    },
    computed: {
        model: {
            get: function(){
                return this.value;
            },
            set: function(val){
                this.$emit('input', val);
            }
        },
        searchConFocus() {
            return this.isFocus ? 'search-con-focus' : '';
        }
    },
    methods:{
        search(e) {
            var code = e.code || e.Code;
            if(e.keycode == 13 || e.keycode == '13' || e.keyCode == 13 || e.keyCode == '13' || code.toLowerCase()=='enter'){
                this.$emit('search', this.model);
                e.preventDefault();
            }
        },
        searchHandler() {
            this.$emit('search', this.model);
        },
        focusHandler() {
            this.isFocus = true;
        },
        blurHandler() {
            this.isFocus = false;
        },
        getQueryKey() {
            if(!!this.queryKey) {
                var keyword = this.getQuery(this.queryKey);
                // !!keyword && (this.model = keyword);
                this.model = keyword;
            };
        },
        screenHandler() {
            var query = this.getQuery();
            this.goto({
                path: '/home/bidding/search/advanced',
                query
            });
        },
        gotoSearch(event) {
            if(this.readonly) {
                event.preventDefault();
                event.stopPropagation();

                var query = this.getQuery();
                this.goto({
                    path: '/home/bidding/search',
                    query
                });
            };
        },
        focus() {
            this.$refs.input.focus();
        }
    },
    mounted() {
        this.getQueryKey();
    },
    activated() {
        this.getQueryKey();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .w-search-top{height:28px; padding:8px 10px; background:white; display:flex;}
    .w-search-con{width:100%; height:100%; position:relative; border-radius:3px; overflow:hidden; flex:1;}
        .w-search-input{position:absolute; height:100%; width:100%; border:none; background:#ededed; padding:0 14px; color:#353535; box-sizing:border-box; font-size:14px; line-height:28px;}
        .search-icon{position:absolute; color:#37B7CF; font-size:20px; right:6px; line-height:28px;}
    .search-btn{color:#1f80e6; line-height:28px; padding-left:1em; font-weight:bold;}
</style>
