<template>
    <scroll-loader>
        <template v-if="$route.params.type=='GongShi'">
            <div class="weui-form-preview">

            	<div class="weui-form-preview__hd">
            		<h1 class="weui-form-preview__value">{{detail.publicity_name}}</h1>
                    <font class="weui-form-preview__value addtime">{{timeFormatter(detail.bulletin_issue_time)}}</font>
                </div>
            	<div class="weui-form-preview__bd">
                    <table-con :data="detail">
                        <table-row label="所属行业" prop="hyname" :label-width="labelWidth"></table-row>
                        <table-row label="所属地区" prop="cityname" :label-width="labelWidth"></table-row>
                    </table-con>
                </div>

            </div>
            <div class="weui-panel">
            	<div class="weui-panel__bd">
            		<div class="weui-media-box weui-media-box_text">
            			<h4 class="weui-media-box__title">招标内容</h4>
            			<p class="weui-media-box__desc rich-text__con" v-html="detail.bdcontent"></p>
            		</div>
            	</div>
            </div>
            <div class="weui-panel">
            	<div class="weui-panel__bd">
            		<div class="weui-media-box weui-media-box_text">
            			<h4 class="weui-media-box__title">公示内容</h4>
            			<p class="weui-media-box__desc rich-text__con" v-html="detail.publicity_content"></p>
            		</div>
            	</div>
            </div>

            <div class="weui-form-preview">
            	<div class="weui-form-preview__bd">
                    <table-con :data="detail">
                        <table-row label="公示时间" prop="publicity_start_time" :label-width="labelWidth"></table-row>
                        <table-row label="公示截止时间" prop="publicity_end_time" :label-width="labelWidth"></table-row>

                        <table-row label="业主单位名称" prop="yezhu" :label-width="labelWidth"></table-row>
                        <table-row label="招标代理机构名称" prop="zbdlname" :label-width="labelWidth"></table-row>
                        <table-row label="联系人" prop="dllxrname" :label-width="labelWidth"></table-row>
                        <table-row label="电话" prop="dltel" :label-width="labelWidth">
                            <template slot-scope="scope">
                                <a :href="'tel:'+scope.row">{{scope.row}}</a>
                            </template>
                        </table-row>
                        <table-row label="手机" prop="dlphone" :label-width="labelWidth">
                            <template slot-scope="scope">
                                <a :href="'tel:'+scope.row">{{scope.row}}</a>
                            </template>
                        </table-row>
                        <table-row label="电子邮件" prop="dlemail" :label-width="labelWidth"></table-row>
                    </table-con>
                </div>
            </div>
        </template>
        <template v-else-if="$route.params.type=='GongGao'">
            <div class="weui-form-preview">

            	<div class="weui-form-preview__hd">
            		<h1 class="weui-form-preview__value">{{detail.bulletin_name}}</h1>
                    <font class="weui-form-preview__value addtime">{{timeFormatter(detail.bulletin_issue_time)}}</font>
                </div>

            </div>
            <div class="weui-panel">
            	<div class="weui-panel__bd">
            		<div class="weui-media-box weui-media-box_text">
            			<h4 class="weui-media-box__title">公告内容</h4>
            			<p class="weui-media-box__desc rich-text__con" v-html="detail.bulletin_content"></p>
            		</div>
            	</div>
            </div>
        </template>
    </scroll-loader>
</template>

<script>
export default {
    props: ['value'],
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

            this.$get('/Api/Biding/GetDetail', {
                id: guid,
                type: type
            }, function(data){
                that.detail = data || {};
                that.collect = that.detail.Collection;
            })
        },
        timeFormatter: function(time){
            try{
                var yyyy = time.substring(0,4);
                var MM = time.substring(4,6);
                var dd = time.substring(6,8);
                return yyyy + '-' + MM + '-' + dd;
            }catch(e){}
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

.weui-media-box__desc>table{max-width:100%; border:1px solid #F2F6FC;}
.weui-media-box__desc>table tr{border:1px solid #F2F6FC;}
.weui-media-box__desc>table tr td{border:1px solid #F2F6FC;}
</style>
<style>
.rich-text__con{display: block !important;}
.rich-text__con table{width: 100% !important; border-collapse:collapse; border:none; table-layout: fixed; display: block;}
.rich-text__con table td{max-width: 100% !important; border: 1px solid #F2F6FC;}
.rich-text__con table tr td:first-child{ }
</style>
