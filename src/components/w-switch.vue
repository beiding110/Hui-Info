<template>
    <span class="w-switch-con">
        <span v-if="inactiveText" class="w-switch-text" :class="{'w-switch-text_active': model}" :style="activeTextStyle">{{inactiveText}}</span>
        <input class="weui-switch w-switch" :class="sizeClass" type="checkbox" v-model="model">
        <span v-if="activeText" class="w-switch-text" :class="{'w-switch-text_active': model}" :style="activeTextStyle">{{activeText}}</span>
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: [Boolean, String, Number],
            default: false
        },
        size: {
            type: String,
            default: 'large'
        },
        activeText: {
            type: String,
            default: ''
        },
        inactiveText: {
            type: String,
            default: ''
        },
        activeValue: {
            type: [Boolean, String, Number],
            default: true
        },
        inactiveValue: {
            type: [Boolean, String, Number],
            default: false
        },
        activeColor: {
            type: String,
            default: '#409EFF'
        },
        inactiveColor: {
            type: String,
            default: '#DFDFDF'
        },
        beforeChange: {
            type: Function,
            default: null
        }
    },
    data () {
        return {

        }
    },
    computed: {
        model: {
            get() {
                if(this.value === this.activeValue) {
                    return true;
                } else if (this.value === this.inactiveValue) {
                    return false;
                };
            },
            set(n, o) {
                var map = n ? this.activeValue : this.inactiveValue;

                if(this.beforeChange) {
                    this.beforeChange(n, o, function() {
                        this.$emit('input', map);
                    });
                } else {
                    this.$emit('input', map);
                };
            }
        },
        sizeClass() {
            return ('w-switch_' + this.size)
        },
        activeTextStyle() {
            return this.model ? {
                color: this.activeColor
            } : {
                color: 'inherit'
            };
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
.w-switch-con{}
.w-switch{display:inline-block; line-height:100%; vertical-align:middle;}

.w-switch_small{height:14px; line-height:14px;}
.w-switch_small::before, .w-switch_small::after{height:12px;}

.w-switch_small{width:34px;}
.w-switch_small::before{width:32px;}
.w-switch_small::after{width:12px;}

.w-switch_large{}
</style>
