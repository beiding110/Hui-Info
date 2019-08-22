<template>
    <div class="page">
        <scroll-loader action="/Api/DingYue/GetDingYueQiYeList" v-model="tableData" ref="loader" lazy>

            <template v-for="(item, index) in tableData">
                <div>
                    {{index}}
                </div>
            </template>

        </scroll-loader>

        <w-btn-fixed @click="goSetting">设置</w-btn-fixed>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData: []
        }
    },
    methods: {
        goSetting() {
            this.goto('/home/trace/enterprise')
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
</style>
