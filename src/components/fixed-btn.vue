<template>
    <div class="fixed-btn" :style="{backgroundColor:bgColor, color:color}" @click="$emit('click')">
        <span v-if="iconfont" class="iconfont" v-html="iconfont"></span>
        <slot></slot>
    </div>

</template>

<script>
export default {
    props: {
        iconfont: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: 'rgba(0,0,0,0)'
        },
        color: {
            type: String,
            default: 'inherit'
        }
    },
    data () {
        return {

        }
    },
    methods:{

    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-btn{position:fixed; right:20px; bottom:40px; background:red; border-radius:1em; line-height:2em; padding:0 .5em; text-align:center;}
.fixed-btn .iconfont{font-size:2em;}
</style>
