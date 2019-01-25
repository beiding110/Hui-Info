<template>
    <w-tab>
        <w-tab-item label="招标" name="bidding">
            <list-bidding ref="listbidding" url="/Api/Collection/GetCollectList?type=ZhaoBiao"></list-bidding>
        </w-tab-item>
        <w-tab-item label="项目" name="project">
            <list-project ref="listproject" url="/Api/Collection/GetCollectList?type=Project"></list-project>
        </w-tab-item>
    </w-tab>
</template>

<script>
import listBidding from '@/views/bidding/list'
import listProject from '@/views/project/list'
export default {
    components: {
        listBidding, listProject
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
                this.$refs.listproject.reload();

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
