<template>
    <list-bidding ref="listbidding" url="/Api/Collection/GetCollectList?type=ZhaoBiao"></list-bidding>
</template>

<script>
import listBidding from '@/views/bidding/list'
export default {
    components: {
        listBidding
    },
    data () {
        return {
            model: 'project'
        }
    },
    methods:{
        inPageHandler: function(){
            if(this.$store.state.collectSign){
                this.$refs.listbidding.reload();

                this.$store.commit('setState',{
                    collectSign: false
                });
            }
        }
    },
    mounted:function(){

    },
    activated: function(){
        this.inPageHandler();
    },
    deactivated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
