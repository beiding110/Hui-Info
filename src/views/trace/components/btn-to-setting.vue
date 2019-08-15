<template>
    <div class="weui-cell weui-cell_access weui-cell_link btn-to-setting" @click="gotoSetting">
        <div class="weui-cell__bd">信息推送设置</div>
        <span class="weui-cell__ft"></span>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'trace'
        }
    },
    data () {
        return {

        }
    },
    methods:{
        gotoSetting() {
            this.vipTest(() => {
                this.goto({
                    path: '/trace/setting',
                    query: {
                        ProjectID: this.type
                    }
                })
            })
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn-to-setting.weui-cell{color:#333333; font-weight:14px; margin-bottom:1em;}
    .btn-to-setting.weui-cell:before{content:none;}
    .btn-to-setting.weui-cell:after{display:block; content:" "; position:absolute; left:0; bottom:0; right:0; height:1px; border-top:1px solid #e5e5e5; color:#e5e5e5; transform-origin:0 0; transform:scaleY(0.5); left:15px; z-index:2;}
</style>
