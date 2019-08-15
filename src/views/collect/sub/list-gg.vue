<template>
    <div>
        <scroll-loader action="/Api/Collection/GetCollectList?type=ZhaoBiao" v-model="tableData" ref="loader">

            <template v-for="(item, index) in tableData">
                <list-card-item
                :item="item"
                :key="index"
                @click.native="toDetail(item, index)">
                    <span slot="typename"></span>
                </list-card-item>
            </template>

        </scroll-loader>
    </div>
</template>

<script>
import listCardItem from '@/views/bidding/components/list-card-item'

export default {
    props: ['extra'],
    components: {listCardItem},
    data () {
        return {
            tableData: [],
        }
    },
    computed:{

    },
    watch: {

    },
    methods:{
        reload: function(){
            this.$refs.loader.reload();
        },
        toDetail(row, index) {
            this.goto({
                path: '/detail/project/info',
                query: {
                    RowGuid: row.RowGuid,
                    Category: row.Category
                }
            })
        }
    },
    created: function () {

    },
    mounted:function(){

    },
    activated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item-info-con_left{width:100%; float:left; margin-right:-80px;}
    .item-info-con_left>div{margin-right:80px;}
    .item-info-con_right{width:80px; float:right; text-align:right; color:#909399}
</style>
