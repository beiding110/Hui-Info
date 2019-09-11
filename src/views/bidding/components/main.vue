<template>
    <div class="page">
        <search-top v-model="searchName" @search="quertData" @input="searchInputHandler" readonly></search-top>
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

        <bar-search-type @select="typeSelHandler" v-model="searchKey"></bar-search-type>

        <div class="page-content" style="top:84px;">
            <list :extra.sync="extraForm" ref="list" :bold="extraForm.KeyName" :lazy="lazy"></list>
        </div>
    </div>
</template>

<script>
import list from '../list'
import barSearchType from './bar-search-type'
import mainMixins from '@/mixins/main-mixins'

export default {
    mixins: [mainMixins],
    components: {
        list,
        barSearchType
    },
    data () {
        return {
            searchKey: 'KeyName',
            searchName: ''
        }
    },
    methods: {
        typeSelHandler(e) {
            var oldName = this.extraForm[this.searchKey];
            this.extraForm.KeyName = '';
            this.extraForm.Content = '';

            this.searchKey = e.value;

            this.extraForm[this.searchKey] = oldName;

            this.$nextTick(() => {
                this.quertData();
            });
        },
        searchInputHandler(e) {
            this.extraForm[this.searchKey] = e;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}
</style>
