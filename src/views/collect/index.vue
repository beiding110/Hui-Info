<template>
    <list-gg ref="listgg" url="/Api/Collection/GetCollectList?type=ZhaoBiao"></list-gg>
</template>

<script>
import listGg from './sub/list-gg'
export default {
    components: {
        listGg
    },
    data () {
        return {
            model: 'project'
        }
    },
    methods:{
        inPageHandler: function(){
            if(this.$store.state.collectSign){
                this.$refs.listgg.reload();

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
