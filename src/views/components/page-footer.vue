<template>
    <div class="weui-msg__extra-area">
        <div class="weui-footer">
            <p class="weui-footer__links">
                <a href="javascript:void(0);" class="weui-footer__link">惠信息</a>
            </p>
            <p class="weui-footer__text">© {{year}} 中惠科技</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data () {
        return {

        }
    },
    computed: {
        year() {
            return new Date().getFullYear();
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
.collect{color:#353535;}
.collected{color:#353535;}
</style>
