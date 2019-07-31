<template>
    <span :class="'zh-tag ' + 'zh-tag--' + type">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
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
.zh-tag{font-size: 14px; padding:.1em .8em; border-radius:3px; color:white;}

.zh-tag--primary{background:#1F80E6;}
.zh-tag--info{background:#67BEA5;}
.zh-tag--warn{background:#ECA355;}
.zh-tag--danger{background:#FE7270;}

</style>
