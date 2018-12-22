<template>
    <div class="page">
        <search-bar v-model="KeyName" @search="quertData"></search-bar>
        <div class="weui-flex w-sel-search">
            <div class="weui-flex__item">
                <btn-picker placeholder="地区" v-model="CityCode" @select="quertData" :data="CityData"></btn-picker>
            </div>
            <div class="weui-flex__item">
                <btn-picker placeholder="行业" v-model="HyCode" @select="quertData" :data="HyData"></btn-picker>
            </div>
            <div class="weui-flex__item">
                <btn-picker placeholder="阶段" v-model="JdCode" @select="quertData" :data="JdData"></btn-picker>
            </div>
        </div>
        <div class="page-content" style="top:88px;">
            <list :extra="extraForm" ref="list"></list>
        </div>
    </div>
</template>

<script>
import list from '@/views/project/list'

export default {
    components: {
        list
    },
    data () {
        return {
            KeyName: '',
            CityCode: '',
            HyCode: '',
            JdCode: '',

            CityData: [],
            HyData: [],
            JdData: []
        }
    },
    computed: {
        extraForm: function(){
            return {
                KeyName: this.KeyName,
                CityCode: this.CityCode,
                HyCode: this.HyCode,
                JdCode: this.JdCode
            }
        }
    },
    methods:{
        quertData: function(){
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
            type: 'SsHy'
        }, function(data){
            that.HyData = data;
        });

        this.$get('/Api/Common/GetDictionary', {
            type: 'JzJd'
        }, function(data){
            that.JdData = data;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
