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

                <btn type="success" @click="goto('/user/vippay')">购买会员</btn>
            </p>
        </div>
        
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageFooter from '@/views/components/page-footer'

export default {
    components: { PageFooter },
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

    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-btn-area{display:flex;}
.weui-btn-area .weui-btn{flex:1; margin-bottom:0 !important;}
</style>
