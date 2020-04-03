<template>
    <div class="page-con" key="bh-page">

        <div class="text-con">
            <div class="nav-bar">
                <span @click="backHandler">返回</span>
            </div>
            <p class="first-line">
                温馨提示：
            </p>
            <p>
                此项服务暂不支持手机端操作，请您通过电脑登录办理。
            </p>

            <p>
                E网智融： www.ewzr.com.cn
            </p>
            <p>
                咨询电话：0311-85040970
            </p>
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
    methods: {
        backHandler() {
            window.history.back();
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page-con{width:100%; height:100%; position:relative;}
    .nav-bar{text-align:right; padding-right:1em;}
    .first-line{text-indent:0;}
    .page-con .text-con{position:absolute; left:50%; top:40%; transform:translate(-50%,-50%); width:16em; text-indent:2em; border:1px solid red; padding:1em; border-radius:1em;}
</style>
