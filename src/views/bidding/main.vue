<template>
    <div class="page">
        <search-bar v-model="KeyName" @search="quertData"></search-bar>
        <div class="weui-flex w-sel-search">
            <div class="weui-flex__item">
                <btn-picker placeholder="地区" v-model="CityCode" @select="quertData" :data="CityData"></btn-picker>
            </div>
            <div class="weui-flex__item">
                <btn-picker placeholder="类型" v-model="TypeCode" @select="quertData" :data="TypeData"></btn-picker>
            </div>
            <div class="weui-flex__item">
                <btn-picker placeholder="时间段" v-model="DateRange" @select="quertData" :data="DateRangeData"></btn-picker>
            </div>
        </div>
        <div class="page-content" style="top:88px;">
            <list :extra.sync="extraForm" ref="list"></list>
        </div>
    </div>
</template>

<script>
import list from '@/views/bidding/list'

export default {
    components: {
        list
    },
    data () {
        return {
            KeyName: '',
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
    },
    methods:{
        quertData: function(e){
            this.$refs.list.reload();
        }
    },
    mounted:function(){
        var that = this;

        this.$get('/Api/Common/GetDictionary', {
            type: 'City'
        }, function(data){
            that.CityData = data;
        });

        this.$get('/Api/Common/GetDictionary', {
            type: 'GgLx'
        }, function(data){
            that.TypeData = data;
        });

        this.DateRangeData = [
            {
                label: '近三天',
                value: '3'
            },{
                label: '近一周',
                value: '7'
            },{
                label: '近一月',
                value: '30'
            }
        ]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
