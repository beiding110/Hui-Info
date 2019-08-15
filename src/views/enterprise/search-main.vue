<template>
    <search-res-main tf-url="/trace/enterprise/form">
        <main-page></main-page>
    </search-res-main>
</template>

<script>
import searchResMain from '@/views/bidding/components/search-res-main'
import mainPage from './main'

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

</style>
