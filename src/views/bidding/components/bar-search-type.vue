<template>
    <div class="bar-search_type">
        <template v-for="item in data">
            <div class="bar-search_type-item" :class="{'is-active': model === item.value}" @click="clickHandler(item)">
                {{item.label}}
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            data: [
                {
                    label: '标题搜索',
                    value: 'KeyName'
                }, {
                    label: '全文搜索',
                    value: 'Content'
                }
            ]
        }
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    methods:{
        clickHandler(item) {
            this.$emit('select', item);
            this.model = item.value;
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar-search_type{font-size:13px; overflow:hidden; height:40px; background:white; line-height:40px; padding:0 10px;}
    .bar-search_type-item{color:#818181; float:left; padding:0 .5em;}
    .bar-search_type-item.is-active{color:#1f80e6; position:relative;}
    .bar-search_type-item.is-active::after{content:''; display:block; width:100%; height:2px; background:#1f80e6; position:absolute; bottom:0; left:0;}
</style>
