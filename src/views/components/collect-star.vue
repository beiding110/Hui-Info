<template>
    <fixed-btn
    :iconfont="value ? '&#xe606;' : '&#xe607;'"
    :class="value ? 'collected' : 'collect'"
    @click="tapHandler"></fixed-btn>
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
        }
    },
    methods:{
        tapHandler() {
            this.$get('/Api/Collection/SetCollectState', {
                id: this.guid
            }, (data) => {
                this.model = !this.model

                this.$store.commit('setState',{
                    collectSign: true
                });
            })
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collect{color:#353535;}
.collected{color:#353535;}
</style>
