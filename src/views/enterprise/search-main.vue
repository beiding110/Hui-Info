<template>
    <search-res-main tf-url="/trace/enterprise/form">
        <main-page lazy ref="mainPage"></main-page>
    </search-res-main>
</template>

<script>
import searchResMain from '@/views/bidding-search/components/search-res-main'
import mainPage from './main'

import searchResMainMixins from '@/mixins/search-res-main-mixins'

export default {
    mixins: [searchResMainMixins('enterpriseSearchCache')],
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
