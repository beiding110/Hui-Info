<template>
    <div class="page">
        <top-bar></top-bar>
        <div class="page-content">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods:{

    },
    mounted:function(){

    },
    activated: function(){

    },
    deactivated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
