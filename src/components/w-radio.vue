<template>
    <div class="weui-cells weui-cells_radio">
        <template v-for="item in data">
            <label class="weui-cell weui-check__label" :for="item.value">

                <div class="weui-cell__bd">
                    <p>{{item.label}}</p>
                </div>
                <div class="weui-cell__ft">
                    <input type="radio" class="weui-check" :id="item.value" v-model="model" :value="item.value">
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data () {
        return {
            innerData: []
        }
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(e) {
                this.$emit('input', e);
            }
        }
    },
    methods:{

    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
