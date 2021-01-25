<template>
    <div class="page">
        <search-bar placeholder="业主单位 / 招标代理名称 / 项目名称" v-model="Value" @search="quertData"></search-bar>
        <div class="weui-flex w-sel-search">
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="地区" v-model="CityCode" @select="quertData" :data="CityData"></btn-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
                <btn-picker placeholder="行业" v-model="HyCode" @select="quertData" :data="HyData"></btn-picker>
            </div>
            <div class="weui-flex__item sel-btn__flex">
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
import getDictionary from '@/js/GetDictionary'

export default {
    components: {
        list
    },
    data () {
        return {
            Value: '',
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
                KeyName: '',
                Value: this.Value,
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
        getDictionary.call(this);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-flex{background:white;}
</style>
