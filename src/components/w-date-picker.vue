<template>
    <input class="weui-input" ref="datePicker" type="text" v-model="model">
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        showWeek: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {

        }
    },
    computed: {
        model: {
            get() {
                if(this.showWeek) {
                    if(!this.value) return;

                    var detailTime = this.value;
                    detailTime = detailTime.replace(/\-/g, '/');

                    var weekDay = new Date(detailTime).getDate(),
                        weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

                    return detailTime + ' ' + weekArr[weekDay]
                }

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
