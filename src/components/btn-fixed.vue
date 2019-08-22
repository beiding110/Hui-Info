<template>
    <div class="w-btn-fixed" :class="typeClass" @click="clickHandler">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        icon: {

        }
    },
    data () {
        return {

        }
    },
    computed: {
        typeClass() {
            return 'btn-fixed_' + this.type
        }
    },
    methods:{
        clickHandler(e) {
            this.$emit('click', e);
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w-btn-fixed{font-size:50px; width:1em; height:1em; line-height:1em; color:white; border-radius:50%; position:fixed; right:.5em; bottom:1em; overflow:hidden; box-shadow: 5px 5px 5px rgba(0,0,0,.1);}
.w-btn-fixed span{font-size:14px; text-align:center; line-height:50px; display:block; width:100%; height:100%;}

.btn-fixed_primary{background:#68BFA6;}
.btn-fixed_primary:active{background:#93D7C3;}
</style>
