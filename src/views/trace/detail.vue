<template>
    <w-tab>
        <w-tab-item label="招标" name="bidding">
            <list-bidding ref="listbidding"></list-bidding>
        </w-tab-item>
        <w-tab-item label="项目" name="project">
            <list-project ref="listproject"></list-project>
        </w-tab-item>
    </w-tab>
</template>

<script>
import listBidding from './sub/list-bidding'
import listProject from './sub/list-project'
export default {
    components: {listBidding, listProject},
    data () {
        return {
            extra:{}
        }
    },
    methods:{
        
    },
    mounted:function(){

    },
    computed:{

    },
    activated: function(){
        var that = this;
        // this.$refs.lists.reload();
    },
    deactivated: function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
