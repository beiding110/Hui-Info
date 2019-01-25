<template>
    <div class="weui-tab">
        <div class="weui-tab__bd">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <div class="weui-tabbar w-tabbar">
            <span href="#main_view_1" :class="classCalc('/home/bidding')" @click="$router.replace('/home/bidding')">
                <!-- <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span> -->
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe634;</i>
                </div>
                <p class="weui-tabbar__label">招标</p>
            </span>
            <span href="#main_view_2" :class="classCalc('/home/project')" @click="$router.replace('/home/project')">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe618;</i>
                </div>
                <p class="weui-tabbar__label">项目</p>
            </span>
            <span href="#main_view_3" :class="classCalc('trace')" @click="$router.replace('/home/trace')">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe729;</i>
                </div>
                <p class="weui-tabbar__label">追踪</p>
            </span>
            <!-- <span href="#main_view_4" :class="classCalc('collect')" @click="$router.replace('/home/collect/bidding')">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe607;</i>
                </div>
                <p class="weui-tabbar__label">收藏</p>
            </span> -->
            <span href="#main_view_4" :class="classCalc('user')" @click="$router.replace('/home/user')">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe619;</i>
                </div>
                <p class="weui-tabbar__label">我的</p>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    components:{},
    data () {
        return {

        }
    },
    methods:{
        classCalc: function(str){
            var reg = new RegExp(str);
            return reg.test(this.$route.path) ? 'weui-tabbar__item weui-bar__item--on' : 'weui-tabbar__item'
        }
    },
    mounted:function(){
        this.$store.commit('setState',{
            openid: 1
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-tab__bd{padding-bottom:54px; position: relative;}
    .weui-bar__item--on>.weui-tabbar__icon>i{color:#007aff;}

    .w-tabbar.weui-tabbar{background-color:white;}
</style>
