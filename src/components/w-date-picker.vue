<template>
    <input class="weui-input" ref="datePicker" type="text" v-model="model">
</template>

<script>
export default {
    props: {
        value: {
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
                return this.value;
            },
            set(n, o) {
                this.$emit('input', n);
            }
        }
    },
    methods:{

    },
    mounted:function(){
        var that = this;
        $(this.$refs.datePicker).datetimePicker({
            times: function () {
                return [];
            },
            onChange: function (picker, values, displayValues) {
                that.model = values.join('-');
            },
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
