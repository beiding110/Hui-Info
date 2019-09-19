<template>
    <div class="wv-dialog-cover" @click.prev.stop="close" v-if="dialogShow">
        <div class="wv-dialog" @click.prev.stop>
            <div class="btn-close" @click="close"></div>
            <div class="text">
                升级VIP，享受特权服务。
            </div>
            <div class="btn" @click="goVip">
                立即升级
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogShow: false,
            closeCb: null
        }
    },
    methods:{
        show(obj) {
            obj = obj || {};
            this.dialogShow = true;

            this.closeCb = obj.callback;
        },
        close() {
            this.dialogShow = false;
            document.body.removeChild(this.$el);
        },
        goVip() {
            this.closeCb && this.closeCb();
            this.close();
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wv-dialog-cover{position:fixed; left:0; top:0; right:0; bottom:0; background:rgba(0,0,0,.1); z-index:100;}

    .wv-dialog{position:fixed; width:90%; left:50%; top:50%; transform:translate(-50%, -50%); background:#1f80e6; color:white; padding:1em 0; text-align: center;}

    .text{font-size:16px; margin:1em;}

    .btn{border:1px solid white; padding:.5em 1em; display:inline-block; font-size:12px; border-radius:1.5em;}
    .btn:active{background:white; color:#1f80e6;}

    .btn-close{position:absolute; right:1em; top:1em; width:1em; height:1em; border:1px solid white; border-radius:50%;}
    .btn-close::before, .btn-close::after{content:''; display:block; width:80%; height:1px; background:white; position:absolute; left:50%; top:50%;}
    .btn-close::before{transform:translate(-50%,-50%) rotate(-45deg);}
    .btn-close::after{transform:translate(-50%,-50%) rotate(45deg);}
</style>
