<template>
    <div class="weui-search-bar w-search">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="search" class="weui-search-bar__input" placeholder="搜索" v-model="model">
                <a href="javascript:" class="weui-icon-clear" @click="clearSearchKey"></a>
            </div>
            <label class="weui-search-bar__label">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" @click="clearSearchKey">取消</a>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data () {
        return {
            searchKey: ''
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
        }
    },
    methods:{
        clearSearchKey: function(){
            this.searchKey = '';
            this.model = ''
            this.$nextTick(function(){
                this.$emit('search', this.model);
            })
        }
    },
    mounted:function(){
        var that = this;
        document.addEventListener('keydown', function(e){
            var code = e.code || e.Code
            if(e.keycode == 13 || e.keycode == '13' || e.keyCode == 13 || e.keyCode == '13' || code.toLowerCase()=='enter'){
                that.$emit('search', that.model);
                e.preventDefault();
            }
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-search-bar__form{border-radius:14px; overflow:hidden;}
    .weui-search-bar{z-index:10; background-color: #409EFF;}
    .weui-search-bar__cancel-btn{color:white;}
</style>
