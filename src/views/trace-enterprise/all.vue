<template>
    <div class="page">
        <div class="top-btn-con">
            <top-tip></top-tip>
        </div>

        <div class="page-con">
            <scroll-loader action="/Api/DingYue/GetDingYueQiYeList" v-model="tableData" ref="loader" lazy>

                <template v-for="(item, index) in tableData">
                    <list-card-item
                    :item="item"
                    @click.native="toDetail(item, index)"
                    :key="index"
                    >
                    </list-card-item>
                </template>

            </scroll-loader>

        </div>
        <w-btn-fixed @click="goSetting">设置</w-btn-fixed>
    </div>
</template>

<script>
import listCardItem from '@/views/trace-enterprise/components/list-card-item'
import topTip from '@/views/trace-enterprise/components/top-tip'
import '@/views/trace/css/home.css'
export default {
    components: {listCardItem, topTip},
    data () {
        return {
            tableData: []
        }
    },
    methods: {
        goSetting() {
            this.goto('/home/trace/enterprise')
        },
        toDetail (row) {
            this.goto({
                path: '/trace/enterprise/detail',
                query: {
                    companyname: row.DWCNNAME
                }
            })
        }
    },
    mounted() {
        this.$refs.loader.reload();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}

.page-con{top:87px;}
</style>
