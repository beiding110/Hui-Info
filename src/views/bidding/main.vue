<template>
    <div class="page">
        <search-bar v-model="KeyName" @search="quertData"></search-bar>
        <!-- <div class="weui-flex w-sel-search">
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="地区" v-model="CityCode" @select="quertData" :data="CityData"></btn-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="类型" v-model="TypeCode" @select="quertData" :data="TypeData"></btn-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="时间段" v-model="DateRange" @select="quertData" :data="DateRangeData"></btn-picker>
            </div>
        </div> -->
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
            CityCode: '',
            TypeCode: '',
            DateRange: '',

            CityData: [],
            TypeData: [],
            DateRangeData: []
        }
    },
    computed: {
        extraForm: function(){
            return {
                KeyName: this.KeyName,
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
