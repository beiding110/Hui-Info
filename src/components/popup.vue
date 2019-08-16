<template>
    <div ref="popup" class="weui-popup__container w-pupup">
        <div class="weui-popup__overlay"></div>
        <div class="weui-popup__modal" :style="{top: top}">
            你的内容放在这里...
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        top: {
            type: [String, Number],
            default: 0
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
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    watch: {
        value(n, o) {
            if(n) {
                this.show();
            } else {
                this.hide();
            }
        }
    },
    methods: {
        show() {
            $(this.$refs.popup).popup();
        },
        hide() {
            $.closePopup()
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .w-pupup .weui-popup__overlay{background-color:rgba(0,0,0,0);}
    .w-pupup .weui-popup__modal{background:white;}
</style>
