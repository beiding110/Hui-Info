<template>
    <keep-alive>
        <router-view/>
    </keep-alive>
</template>

<script>

export default {
    components:{},
    data () {
        return {

        }
    },
    methods:{

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
