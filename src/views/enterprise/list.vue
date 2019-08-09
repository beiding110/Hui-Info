<template>
    <div>
        <scroll-loader :action="url" :extra.sync="extraObj" v-model="tableData" ref="loader" :lazy="lazy">

            <template v-for="(item, index) in tableData">
                <list-card-item
                :item="item"
                @click.native="toDetail(item, index)"
                :key="index"
                v-touch:hold="itemHold"
                v-ncmenu
                ></list-card-item>
            </template>

        </scroll-loader>
    </div>
</template>

<script>
import listMixins from '@/views/mixins/list-mixins'
import listCardItem from '@/views/bidding/components/list-card-item'

export default {
    mixins: [listMixins],
    components: {listCardItem},
    props: {
        url: {
            type: String,
            default: '/Api/Biding/GetZhaoBiaoList'
        },
    },
    methods:{
        toDetail(item, index) {
            item.IsRead = 1;
            this.tableData.splice(index, 1, item);
            this.$router.push('/detail/bidding/'+item.RowGuid+'/'+item.Category);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
