<template>
    <div class="weui-search-bar w-search">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="search" class="weui-search-bar__input" :placeholder="placeholder" v-model="model" @keydown="search">
                <a href="javascript:" class="weui-icon-clear" @click="clearSearchKey"></a>
            </div>
            <label class="weui-search-bar__label">
                <i class="weui-icon-search"></i>
                <span>{{model || placeholder}}</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" @click="clearSearchKey">取消</a>
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
        }
    },
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
        },
        search(e) {
            var code = e.code || e.Code;
            if(e.keycode == 13 || e.keycode == '13' || e.keyCode == 13 || e.keyCode == '13' || code.toLowerCase()=='enter'){
                this.$emit('search', this.model);
                e.preventDefault();
            }
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-icon-search{color:#68BFA6;}

    .weui-search-bar__form{border-radius:5px; overflow:hidden;}
    .weui-search-bar{z-index:10; background-color: #fff;}
    .weui-search-bar__cancel-btn{color:#85D5BC;}

    .weui-search-bar.w-search:after{content:none;}
</style>
