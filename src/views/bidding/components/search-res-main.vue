<template>
    <div class="page">
        <slot></slot>
        <div class="trace-tip" v-if="show">
            如果您对以上结果满意可
            <span class="btn-to-trace" @click="goTraceHandler">直接订阅→</span>

            <span class="btn-close-tip" @click="closeHandler">x</span>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        tfUrl: {
            type: String,
            default: '/trace/form'
        }
    },
    data () {
        return {
            show: true
        }
    },
    methods: {
        goTraceHandler() {
            this.vipTest(() => {
                this.goto({
                    path: this.tfUrl,
                    query: this.getQuery()
                });
            });
        },
        closeHandler() {
            this.show = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .trace-tip{position:fixed; bottom:0; width:100%; background:#67BEA5; color:white; line-height:3em; text-indent:1em;}
    .btn-to-trace{border:1px solid white; border-radius:12px; padding:0.1em 1em;}
    .btn-close-tip{position:absolute; right:1em; top:1em; line-height:1em;}
</style>
