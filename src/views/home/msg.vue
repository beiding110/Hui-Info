<template>
    <div class="weui-msg">
        <div class="weui-msg__icon-area"><i :class="iconType"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">{{title}}</h2>
            <p class="weui-msg__desc">{{text}}</p>
        </div>
        <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
                <btn type="primary" @click="$router.go(-1)">返 回</btn>
                <btn type="success" @click="gotoVip">购买会员</btn>
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
    props: ['type', 'title', 'text'],
    data () {
        return {

        }
    },
    computed: {
        iconType: function(){
            var typeObj={
                success: 'weui-icon-success weui-icon_msg',
                warning: 'weui-icon-warn weui-icon_msg-primary',
                error: 'weui-icon-warn weui-icon_msg',
                info: 'weui-icon-info weui-icon_msg',
                waiting: 'weui-icon-waiting weui-icon_msg'
            };
            return typeObj[this.type]
        }
    },
    methods:{
        gotoVip() {
            this.goto('/user/vippay')
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-btn-area{display:flex;}
.weui-btn-area .weui-btn{flex:1; margin-bottom:0;}
</style>
