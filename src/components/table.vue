<template>
    <table class="table-con" cellspacing="0">
        <slot></slot>
    </table>
</template>

<script>
export default {
    props: ["data"],
    data () {
        return {

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
    .table-con{width:100%; table-layout:fixed; border: #F2F6FC;}
</style>
