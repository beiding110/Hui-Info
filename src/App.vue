<template>
    <div id="app">
        <!-- <transition name="fade-in-linear"> -->
            <!-- <keep-alive exclude="trace_detail">
                <router-view/>
            </keep-alive> -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <!-- <router-view v-if="!$route.meta.alive"></router-view> -->
        <!-- </transition> -->
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app { font-family: '微软雅黑', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50; }

.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active,.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}
.fade-in-linear-enter-active,.fade-in-linear-leave-active{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}
</style>
