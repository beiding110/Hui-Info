<template>
    <div>
        <scroll-loader :action="url" :extra.sync="extraObj" v-model="tableData" ref="loader" :lazy="lazy">

            <template v-for="(item, index) in tableData">
                <list-card-item
                :item="item"
                :index="index + 1"
                @click.native="toDetail(item, index)"
                :key="index"
                v-touch:hold="itemHold"
                v-ncmenu
                :bold="bold || item.searchkey"
                >
                    <slot name='hyname' :row="item" slot="hyname">

                    </slot>
                </list-card-item>
            </template>

        </scroll-loader>
    </div>
</template>

<script>
import listMixins from '@/mixins/list-mixins'
import listCardItem from '@/views/bidding/components/list-card-item'

export default {
    mixins: [listMixins],
    components: {listCardItem},
    props: {
        url: {
            type: String,
            default: '/Api/Biding/GetZhaoBiaoList'
        },
        bold: {
            type: String,
            default: ''
        }
    },
    methods:{
        toDetail(item, index) {
            item.IsRead = 1;
            this.tableData.splice(index, 1, item);
            this.goto({
                path: '/detail/bidding',
                query: {
                    RowGuid: item.RowGuid,
                    Category: item.Category,
                    searchKey: item.searchkey
                }
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
