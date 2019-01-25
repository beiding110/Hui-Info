<template>
    <div>
        <w-card class="info--card">
            <div class="weui-form-preview">

            	<div class="weui-form-preview__hd">
            		<h1 class="weui-form-preview__value">{{detail.Title}}</h1>
                    <font class="weui-form-preview__value addtime">{{timeFormatter(detail.AddTime)}}</font>
                </div>
            	<div class="weui-form-preview__bd">
                    <table-con :data="detail">
                        <table-row label="项目编号" prop="ProCode" :label-width="labelWidth"></table-row>
                        <table-row label="项目名称" prop="ProName" :label-width="labelWidth"></table-row>
                        <table-row label="进展阶段" prop="JdName" :label-width="labelWidth"></table-row>
                        <table-row label="建设性质" prop="JsXzName" :label-width="labelWidth"></table-row>
                        <table-row label="所属行业" prop="SsHyName" :label-width="labelWidth"></table-row>
                        <table-row label="所属地区" prop="CityName" :label-width="labelWidth"></table-row>
                        <table-row label="建设周期" prop="E_JsZq" :label-width="labelWidth"></table-row>
                        <table-row label="投资总额" prop="TzZe" :label-width="labelWidth"></table-row>
                        <table-row label="资金来源" prop="ZjLy" :label-width="labelWidth"></table-row>
                        <table-row label="主要设备" prop="ZySb" :label-width="labelWidth"></table-row>
                    </table-con>
                </div>

            </div>
        </w-card>
        <w-card class="info--card">
            <div class="weui-panel">
            	<div class="weui-panel__bd">
            		<div class="weui-media-box weui-media-box_text">
            			<h4 class="weui-media-box__title">项目内容</h4>
            			<p class="" v-html="detail.Content"></p>
            		</div>
            	</div>
            </div>
        </w-card>
        <w-card class="info--card">
            <div class="weui-form-preview">
            	<div class="weui-form-preview__bd">
                    <table-con :data="detail">
                        <table-row label="建设单位" prop="JsDw" :label-width="labelWidth"></table-row>
                        <table-row label="审批文号" prop="HzWh" :label-width="labelWidth"></table-row>
                        <table-row label="审批机关" prop="HzBm" :label-width="labelWidth"></table-row>
                        <table-row label="建设地址" prop="JsAddress" :label-width="labelWidth"></table-row>
                        <table-row label="项目负责人" prop="XmFzr" :label-width="labelWidth"></table-row>
                        <table-row label="咨询电话" prop="ZxDh" :label-width="labelWidth">
                            <template slot-scope="scope">
                                <a :href="'tel:'+scope.row">{{scope.row}}</a>
                            </template>
                        </table-row>
                        <table-row label="移动电话" prop="Phone" :label-width="labelWidth">
                            <template slot-scope="scope">
                                <a :href="'tel:'+scope.row">{{scope.row}}</a>
                            </template>
                        </table-row>
                        <table-row label="电子邮件" prop="Email" :label-width="labelWidth"></table-row>
                        <table-row label="传真" prop="CzHm" :label-width="labelWidth"></table-row>
                    </table-con>
                </div>
            </div>
        </w-card>

        <collect-star v-model="detail.Collection" :guid="detail.RowGuid"></collect-star>
    </div>
</template>

<script>
import collectStar from '@/views/components/collect-star'
export default {
    props: ['value'],
    components: {collectStar},
    data () {
        return {
            detail: {},
            labelWidth: '80px'
        }
    },
    computed: {
        collect: {
            get: function(){
                return this.value;
            },
            set: function(val){
                this.$emit('input', val);
            }
        }
    },
    methods:{
        queryData: function(){
            var that = this;
            var guid = this.$route.params.guid;
            var type = this.$route.params.type;

            this.$get('/Api/Project/GetDetail', {
                id: guid,
                type: type
            }, function(data){
                that.detail = data || {};
                that.collect = that.detail.Collection;
            })
        },
        timeFormatter: function(time){
            return / /.test(time) ? time.split(' ')[0] : time;
        }
    },
    mounted: function(){
        this.queryData();
    },
    activated: function(){
        this.queryData();
    },
    deactivated: function(){
        this.detail = {};
        this.$emit('input', undefined);
    },
    beforeDestroy: function(){
        this.detail = {};
        this.$emit('input', undefined);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-form-preview+.weui-form-preview{margin-top:10px;}

    .weui-form-preview__hd{text-align: left;}
    .weui-form-preview__hd .weui-form-preview__value.addtime{text-align: center; color:#909399; font-size:1.2em;}

    .info--card.zh-card{padding:0;}
</style>
