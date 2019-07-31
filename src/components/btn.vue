<template>
    <span :class="classCalc" @click="$emit('click', $event)">
        <slot name="icon">
            <i class="iconfont" v-if="!!icon" v-html="icon"></i>
        </slot>
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: ['size', 'icon', 'type'],
    data () {
        return {

        }
    },
    computed: {
        classCalc: function(){
            var classStr = 'weui-btn';
            if(this.size == 'mini') classStr += ' weui-btn_mini';
            if(!!this.type) classStr += ' we-btn_'+this.type;
            return classStr
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
    .weui-btn:last-child{margin-right: 0;}
    .weui-btn{background: white; color:black; float: left; margin-right: 5px;}
    .weui-btn:not(.weui-btn_mini){width:100%;}
    .weui-btn+.weui-btn{margin-top:0; margin-bottom:5px;}

    .weui-btn[class*="we-btn_"]{color:white;}
    .weui-btn.we-btn_primary{background: #1F80E6; border-color: #1F80E6;}
    .weui-btn.we-btn_success{background: #67C23A; border-color: #67C23A;}
    .weui-btn.we-btn_info{background: #909399; border-color: #909399;}
    .weui-btn.we-btn_warning{background: #E6A23C; border-color: #E6A23C;}
    .weui-btn.we-btn_danger{background: #F56C6C; border-color: #F56C6C;}

    .weui-btn .iconfont{font-size:10px;}
</style>
<style>
    .weui-btn-area{overflow: hidden;}
</style>
