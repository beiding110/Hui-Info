<template>
    <div class="zh-card">
        <div class="zh-card__header">
            <slot name="header"></slot>
        </div>
        <div class="zh-card__body">
            <slot></slot>
        </div>
        <div class="zh-card__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
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
.zh-card{background:rgba(255,255,255,1); border-radius:3px; padding:1em;}

.zh-card__header{color:#353535; font-size:1.14em; font-weight:bold; display:block; }
.zh-card__header, .zh-card__body, .zh-card__footer{line-height:1.8em;}

</style>
