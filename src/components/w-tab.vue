<template>
    <div class="weui-tab w-tab w-tab_primary">
        <div class="weui-navbar">
            <template v-for="(item,index) in itemArr">
                <span
                :key="item.componentOptions.propsData.name"
                class="weui-navbar__item"
                :class="!!active ? (active===item.componentOptions.propsData.name ? 'weui-bar__item--on':'') : (!index ? 'weui-bar__item--on' : '')"
                :href="'#'+item.componentOptions.propsData.name"
                @click="navItemClick(item.componentOptions.propsData.name)">
                    {{item.componentOptions.propsData.label}}
                </span>
            </template>
        </div>

        <div class="weui-tab__bd page">
            <div class="page-content">
                <slot></slot>
            </div>
        </div>
    </div>
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
        itemArr() {
            var slots = this.$slots.default,
                arr = [];
            slots.forEach(function(item) {
                if(item.componentOptions && item.componentOptions.tag === 'w-tab-item') {
                    arr.push(item);
                }
            }.bind(this));

            return arr;
        },
        active: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    methods:{
        navItemClick(name) {
            this.active = name;
        }
    },
    mounted:function(){

    },
    disactive() {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
