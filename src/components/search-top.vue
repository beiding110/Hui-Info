<template>
    <div class="w-search-top">
        <div class="w-search-con" :class="searchConFocus">
            <input class="w-search-input" type="search"
            v-model="model"
            :placeholder="placeholder"
            @focus="focusHandler" @blur="blurHandler" @keydown="search"/>
            <i class="weui-icon-search search-icon" v-if="isFocus" @click="searchHandler"></i>
        </div>
        <span class="search-btn" v-if="!isFocus" @click="screenHandler">筛选</span>
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
        screenHandler() {
            this.goto('/home/bidding/search/advanced');
        },
        getQueryKey() {
            var keyword = this.getQuery('KeyName');
            !!keyword && (this.model = keyword);
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
        .w-search-input{position:absolute; height:100%; width:100%; border:none; background:#ededed; padding:0 1em; color:#353535; box-sizing:border-box;}
        .search-icon{position:absolute; color:#37B7CF; font-size:20px; right:6px; line-height:28px;}
    .search-btn{color:#1f80e6; line-height:28px; padding-left:1em; font-weight:bold;}
</style>
