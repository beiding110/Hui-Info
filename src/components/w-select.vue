<template>
    <input class="weui-input w-select" ref="wSelect" type="text" :placeholder="placeholder" v-model="modelName">
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        },
        multi: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        props: {
            type: Object,
            default: () => ({
                label: 'label',
                value: 'value'
            })
        }
    },
    data () {
        return {
            inputValue: ''
        }
    },
    watch: {
        data() {
            this.init();
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
        },
        modelName: {
            get() {
                if(this.name) return this.name;
                else {
                    if(this.data.length) {
                        var val = this.value + '',
                            that = this,
                            res = [];

                        val = val.split(',');

                        val.forEach(key => {
                            var arr = that.data.filter(item => item[that.props.value] === key);
                            if(arr.length) {
                                res.push(arr[0]);
                            };
                        });
                        return res.map(item => item[that.props.label]).join(',');
                    }
                }
            },
            set(n, o) {
                this.$emit('update:name', n)
            }
        }
    },
    methods: {
        init() {
            if(!this.data.length || !this.data) return;

            var that = this;

            $(this.$refs.wSelect).select({
                title: this.title,
                multi: this.multi,
                items: this.data.map((item) => ({
                    title: item[this.props.label],
                    value: item[this.props.value]
                })),
                onChange(e) {
                    that.model = e.values;
                    that.modelName = e.titles;
                    that.$emit('select', e.origins);
                }
            });
        }
    },
    mounted: function(){
        this.init();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
