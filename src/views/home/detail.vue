<template>
    <div class="page">
        <!-- <top-bar>
            <i slot="right" class="iconfont right" @click="collectHandler" v-html="collectIcon" v-if="collect!=undefined"></i>
        </top-bar>
        <div class="page-content">
            <router-view v-model="collect"/>
        </div> -->
        <router-view v-model="collect"/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            collect: undefined,
        }
    },
    computed: {
        collectIcon: function(){
            return this.collect ? '&#xe606;' :'&#xe607;'
        }
    },
    methods: {
        collectHandler: function(){
            var that = this;
            this.$get('/Api/Collection/SetCollectState', {
                id: that.$route.params.guid
            }, function(data){
                that.collect = !that.collect;

                that.$store.commit('setState',{
                    collectSign: true
                });
            })
        }
    },
    mounted:function(){

    },
    activated: function(){
        var that = this;

        if(!this.$store.state.IsVip && !this.$store.state.IsTry){
            this.$router.replace('/msg/error/抱歉/您是非会员，无权限查看此内容');
        }
    },
    deactivated: function(){
        this.collect = undefined;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
