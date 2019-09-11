<template>
    <div class="page">
        <div class="top-btn-con">
            <div class="trace-enterprice-tip">
                您在此可以填写关注的代理机构、业主单位、竞争对手企业名称的招标、中标等情况
            </div>
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
import '@/views/trace/css/home.css'
export default {
    components: {listCardItem},
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
.trace-enterprice-tip{background:#f4f4f8;padding:1em; font-size:13px; font-weight:bold;}
</style>
