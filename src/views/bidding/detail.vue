<template>
    <div>
        <template v-if="detailType=='GongShi'">
            <w-card class="info--card">
                <div class="weui-form-preview">

                	<div class="weui-form-preview__hd">
                        <div class="text-title" v-html="fontReplacer(this.searchKey, detail.publicity_name)"></div>

                        <div class="text-sub-title">
                            <w-tag class="info-card footer-tags" type="info">{{detail.cityname}}</w-tag>
                            <w-tag class="info-card footer-tags" type="danger">{{detail.TypeName}}</w-tag>
                            <w-tag class="info-card footer-tags" type="warn">{{detail.hyname}}</w-tag>
                            <span class="addtime">
                                <i class="iconfont">&#xe63b;</i>
                                {{timeBeforeCalc(timeFormatter(detail.bulletin_issue_time))}}
                            </span>
                        </div>
                    </div>
                	<div class="weui-form-preview__bd">
                        <table-con :data="detail">
                            <table-row label="所属行业" prop="hyname" :label-width="labelWidth"></table-row>
                            <table-row label="所属地区" prop="cityname" :label-width="labelWidth"></table-row>
                        </table-con>
                    </div>

                </div>
            </w-card>
            <w-card class="info--card">
                <div class="weui-panel">
                	<div class="weui-panel__bd">
                		<div class="weui-media-box weui-media-box_text">
                			<h4 class="weui-media-box__title">招标内容</h4>
                			<p class="weui-media-box__desc rich-text__con" v-html="detail.bdcontent"></p>
                		</div>
                	</div>
                </div>
            </w-card>
            <w-card class="info--card">
                <div class="weui-panel">
                	<div class="weui-panel__bd">
                		<div class="weui-media-box weui-media-box_text">
                			<h4 class="weui-media-box__title">公示内容</h4>
                			<p class="weui-media-box__desc rich-text__con"
                            v-html="fontReplacer(this.searchKey, richTableToLongTable(detail.publicity_content))"></p>
                		</div>
                	</div>
                </div>
            </w-card>
            <w-card class="info--card">

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
            </w-card>
        </template>

        <template v-else>
            <w-card class="info--card">
                <div class="weui-form-preview">

                	<div class="weui-form-preview__hd">
                		<div class="text-title">
                            {{detail.Title}}
                        </div>

                        <div class="text-sub-title">
                            <w-tag class="info-card footer-tags" type="info">{{detail.cityname}}</w-tag>
                            <w-tag class="info-card footer-tags" type="danger">{{detail.TypeName}}</w-tag>
                            <w-tag class="info-card footer-tags" type="warn">{{detail.hyname}}</w-tag>
                            <font class="addtime">
                                <i class="iconfont">&#xe63b;</i>
                                {{timeBeforeCalc(timeFormatter(detail.PubInWebDate))}}
                            </font>

                            <collect-star v-model="detail.Collection" :guid="detail.RowGuid" class="btn-collect"></collect-star>
                        </div>
                    </div>
                </div>
            </w-card>
            <w-card class="info--card">
                <div class="weui-panel">
                	<div class="weui-panel__bd">
                		<div class="weui-media-box weui-media-box_text">
                			<p class="weui-media-box__desc rich-text__con" :class="'rich-text_' + detailType"
                            v-html="fontReplacer(this.searchKey, contentTableToMobileGg(detail.Content))"></p>
                		</div>
                	</div>
                </div>
            </w-card>
        </template>
    </div>
</template>

<script>
import collectStar from '@/views/components/collect-star'
import './style/kaibiaojilu.css'

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
        },
        detailType () {
            return this.getQuery('Category');
        },
        searchKey() {
            return this.getQuery('searchKey');
        }
    },
    methods:{
        queryData: function(){
            var that = this;
            var guid = this.getQuery('RowGuid');
            var type = this.detailType;

            this.$get('/Api/Biding/GetDetail', {
                id: guid,
                type: type
            }, data => {
                that.detail = data || {};
                that.collect = that.detail.Collection;
            })
        },
        timeFormatter: function(time){
            if(/-/.test(time)) {
                return time.split(' ')[0];
            };

            try{
                var yyyy = time.substring(0,4);
                var MM = time.substring(4,6);
                var dd = time.substring(6,8);
                return yyyy + '-' + MM + '-' + dd;
            }catch(e){}
        },
        contentTableToMobileGg (str) {
            if(this.detailType !== 'GongGao') return str;

            function DtableBuilder(obj) {
                this.init(obj);
            };
            DtableBuilder.prototype = {
                init (obj) {
                    this.$str = '<div class="table-rebuild"><div class="table-title">' + obj.title + '</div>';
                },
                add (item) {
                    this.$str += ('<div class="table-row">' +
                        '<div class="table-label">' + item.label + '</div>' +
                        '<div class="table-value">' + item.value + '</div>' +
                    '</div>');
                },
                print () {
                    this.$str += '</div>';
                    return this.$str;
                }
            };

            var patt_table = new RegExp("<table.*?>((?:.|\n)+?)<\/table>","g"),
        		patt_td = new RegExp("<td.*?>((?:.|\n)+?)<\/td>","g");

        	var res_teble, res_td;

        	while ((res_teble = patt_table.exec(str)) != null)  {

        		var res_arr = [], counter = 1;
        		var tablebody = res_teble[1];

        		while ((res_td = patt_td.exec(tablebody)) != null)  {
        			// console.log(res_td)

        			if(counter % 2) {
        				res_arr.push({});
        				res_arr[res_arr.length - 1].label = res_td[1];
        			} else {
        				res_arr[res_arr.length - 1].value = res_td[1];
        			}

        			counter ++;
        		};

        		var rebuild_str = '';
                var rebuild_str_zbr = new DtableBuilder({title: '招标人'}),
                    rebuild_str_dl = new DtableBuilder({title: '招标代理机构'});
        		res_arr.forEach(function(item, index) {
        			if(!(index % 2)) {
                        rebuild_str_zbr.add(item);
                    } else {
                        rebuild_str_dl.add(item);
                    }
        		});

        		rebuild_str = rebuild_str_zbr.print() + rebuild_str_dl.print();

        		str = str.replace(res_teble[0], rebuild_str);
        	};

            return str
        },
        richTableToLongTable(str) {
            var patt_table = new RegExp("<table.*?>((?:.|\n)+?)<\/table>","g");

        	var res_teble, res_td;

        	while ((res_teble = patt_table.exec(str)) != null)  {

        		var tablebody = res_teble[0],
                    rebuild_str = '';

        		rebuild_str = '<div class="long-table-scroll-con">' + tablebody + '</div>';

        		str = str.replace(tablebody, rebuild_str);
        	};

            return str
        }
    },
    mounted: function(){
        this.queryData();
    },
    activated: function(){
        // this.queryData();
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

.info--card.zh-card{padding:0;}

.text-sub-title{overflow:hidden;}
.btn-collect{float:right;}
</style>

<style>
.text-title{color:#3F3F3F; line-height:2em; font-size:16px; font-weight:bold;}

.rich-text__con{display: block !important; color:#3F3F3F !important;}
.rich-text__con *{font-size:14px !important; line-height:1.5em !important; text-align:justify;}
.rich-text__con table{width: 100% !important; border-collapse:collapse; border:none; table-layout:fixed; display:block;}
.rich-text__con table td{max-width: 100% !important; border: 1px solid #DBDBDB;}
.rich-text__con table tr td:first-child{ }

.rich-text__con .table-title{padding:.5em 0; font-weight:bold;}
.rich-text__con .table-rebuild{border-bottom:1px solid #666;}
.rich-text__con .table-row{overflow:hidden; border:1px solid #666; border-bottom:0;}
.rich-text__con .table-label, .rich-text__con .table-value{float:left; padding:.2em .4em; box-sizing:border-box;}
.rich-text__con .table-label{width:8em;}
.rich-text__con .table-value{width:calc(100% - 8em); border-left:1px solid #666;}

.long-table-scroll-con{width:100%; overflow:auto;}
.long-table-scroll-con table{min-width:1000px;}
.long-table-scroll-con table td{padding:.2em;}
</style>
