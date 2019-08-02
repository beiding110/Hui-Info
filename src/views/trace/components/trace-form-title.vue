<template>
    <div class="weui-cells weui-cells_form trace-form-title">
        <div class="weui-cell">
            <div class="weui-cell__hd">
                <label class="weui-label">
                    <slot></slot>
                </label>
            </div>
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
.trace-form-title {margin-top:1.17647059em;}
.trace-form-title .weui-label{color:#333333; font-weight:bold;}
</style>
