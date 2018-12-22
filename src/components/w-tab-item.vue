<template>
    <div :id="name" class="weui-tab__bd-item" :class="!!active ? (active===name ? 'weui-tab__bd-item--active' : '') : (!slotIndex ? 'weui-tab__bd-item--active' : '')">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    data () {
        return {

        }
    },
    computed: {
        active() {
            return this.$parent.active;
        },
        slotIndex() {
            return this.$parent.$children.indexOf(this);
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
