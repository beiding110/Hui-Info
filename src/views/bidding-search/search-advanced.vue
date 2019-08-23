<template>
    <div class="page">
        <div class="weui-search-bar weui-search-bar_focusing ">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <input v-model="form.KeyName" type="search" placeholder="示例：税务局" class="weui-search-bar__input">
                </div>
            </form>
            <a href="javascript:" class="submit-btn" @click="searchHandler">筛选</a>
        </div>

        <div class="weui-flex w-sel-search">
            <div class="weui-flex__item sel-btn__flex">
                <btn-pop-picker placeholder="行业" v-model="form.HyCode" :data="HyData" top="89px"></btn-pop-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-pop-picker placeholder="时间段" v-model="form.DateRange" :data="DateRangeData" top="89px"></btn-pop-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-pop-picker placeholder="地区" v-model="form.CityCode" :data="CityData" top="89px"></btn-pop-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-pop-picker placeholder="类型" v-model="form.TypeCode" :data="TypeData" top="89px"></btn-pop-picker>
            </div>
            <!-- <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="来源" v-model="form.Source" :data="SourceData"></btn-picker>
            </div> -->
        </div>

        <search-tip v-model="form.KeyName" ref="searchTip" @select="goListHandler"></search-tip>
    </div>
</template>

<script>
import searchTip from '@/views/bidding-search/components/search-tip'
import getDictionary from '@/js/GetDictionary'

export default {
    components: {searchTip},
    data () {
        return {
            form: {
                KeyName: '',

                TypeCode: '',
                CityCode: '',
                HyCode: '',
                DateRange: '',

                Source: ''
            },

            HyData: [],
            CityData: [],
            TypeData: [],
            DateRangeData: [],
            SourceData: [],
        }
    },
    methods:{
        searchHandler() {
            this.$refs.searchTip.searchHandler();
        },
        goListHandler() {
            this.$router.replace({
                path: '/home/bidding/search/res',
                query: this.form
            });
        }
    },
    mounted:function(){
        getDictionary.call(this);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{overflow:hidden;}
.page, .weui-search-bar{background:white;}
.weui-search-bar__box{padding-left:1em; padding-right:1em;}
.weui-search-bar:before, .weui-search-bar:after{content:none}

.submit-btn{margin-left:10px; line-height:28px; color:#409EFF; white-space:nowrap; display:block;}

.w-sel-search{border-bottom:1px solid #dddddd;}
</style>
