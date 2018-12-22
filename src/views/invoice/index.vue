<template>
    <w-tab>
        <w-tab-item label="订单" name="to">
            <to-list></to-list>
        </w-tab-item>
        <w-tab-item label="已开票" name="ed">
            <ed-list></ed-list>
        </w-tab-item>
    </w-tab>
</template>

<script>
import toList from './sub/list-to'
import edList from './sub/list-ed'
export default {
    components: {toList, edList},
    data () {
        return {

        }
    },
    methods:{
        classCalc: function(str){
            var reg = new RegExp(str);
            return reg.test(this.$route.path) ? 'weui-bar__item--on' : ''
        }
    },
    mounted:function(){

    },
    activated: function(){

    },
    deactivated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
