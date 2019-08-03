<template>
    <div class="weui-msg">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">购买成功</h2>
            <p class="weui-msg__desc">欢迎成为标信通会员</p>
        </div>
        <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
                <btn type="primary" @click="$router.replace('/home/user')">继续使用</btn>
            </p>
        </div>
        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">标信通</a>
                </p>
                <p class="weui-footer__text">© 2019 中惠科技</p>
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
    computed: {

    },
    methods:{

    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-icon-success{color:#67C23A;}
</style>
