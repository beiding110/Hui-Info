<template>
    <div class="page">
        <search-bar v-model="CompanyName" @search="quertData" placeholder="企业名称"></search-bar>
        <div class="page-content" style="top:44px;">
            <list :extra.sync="extraForm" ref="list"></list>
        </div>
    </div>
</template>

<script>
import list from './list'
import mainMixins from '@/views/mixins/main-mixins'

export default {
    mixins: [mainMixins],
    components: {
        list
    },
    data () {
        return {
            CompanyName: '',
            CityCode: '',
            TypeCode: '2',
            DateRange: '',

            CityData: [],
            TypeData: [],
            DateRangeData: []
        }
    },
    computed: {
        extraForm: function(){
            return {
                CompanyName: this.CompanyName,
                CityCode: this.CityCode,
                TypeCode: this.TypeCode,
                DateRange: this.DateRange
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}
</style>
