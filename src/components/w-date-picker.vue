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
        },
        showTime: {
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

                    var weekDay = new Date(detailTime).getDay(),
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
                if(that.showTime) {
                    return [  // 自定义的时间
                        {
                            values: (function () {
                                var hours = [];
                                for (var i=0; i<24; i++) hours.push(i > 9 ? i : '0'+i);
                                return hours;
                            })()
                        }, {
                            divider: true,  // 这是一个分隔符
                            content: ':'
                        }, {
                            values: (function () {
                                var minutes = [];
                                for (var i=0; i<59; i++) minutes.push(i > 9 ? i : '0'+i);
                                return minutes;
                            })()
                        }
                    ];
                };
                return [];
            },
            onChange: function (picker, values, displayValues) {
                var date = values.slice(0, 3),
                    time = values.slice(3, 5);

                that.model = date.join('-') + (time.length ? ' ' + time.join(':') : '');
            },
            onClose() {
                this.$emit('close');
            }
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
