<template>
    <search-res-main>
        <main-page lazy></main-page>
    </search-res-main>
</template>

<script>
import searchResMain from '@/views/bidding/components/search-res-main'
import mainPage from './components/main'

export default {
    components: {
        searchResMain,
        mainPage
    },
    data () {
        return {
        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .trace-tip{position:fixed; bottom:0; width:100%; background:#67BEA5; color:white; line-height:3em; text-indent:1em;}
    .btn-to-trace{border:1px solid white; border-radius:12px; padding:0.1em 1em;}
    .btn-close-tip{position:absolute; right:1em; top:1em; line-height:1em;}
</style>
