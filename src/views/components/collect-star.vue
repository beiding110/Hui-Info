<template>
    <span @click="tapHandler" :class="value ? 'collected' : 'collect'">
        <i class="iconfont" v-html="iconText"></i>
        {{collectText}}
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        guid: {
            type: String,
            default: ''
        }
    },
    data () {
        return {

        }
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(e) {
                this.$emit('input', e)
            }
        },
        iconText() {
            return this.value ? '&#xe606;' : '&#xe607;'
        },
        collectText() {
            return this.value ? '已关注' : '关注项目'
        }
    },
    methods:{
        tapHandler() {
            this.vipTest(() => {
                this.$get('/Api/Collection/SetCollectState', {
                    id: this.guid
                }, (data) => {
                    this.model = !this.model

                    if(this.model) {
                        app.ShowMsg('已关注，可从“我的-关注的项目”查看或设置提醒日期');
                    }

                    this.$store.commit('setState',{
                        collectSign: true
                    });
                });
            });
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collect{color:#F8CE69;}
.collected{color:#F8CE69;}
</style>
