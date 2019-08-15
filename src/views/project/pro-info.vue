<template>
    <div>
        <w-card class="info--card">
            <div class="weui-form-preview">

                <div class="weui-form-preview__hd">
                    <div class="btn-collect">
                        <collect-star v-model="detail.Collection" :guid="detail.RowGuid"></collect-star>
                    </div>
                    <div class="text-title">{{detail.Title}}</div>
                </div>

            </div>
        </w-card>
        <w-card class="info--card">
            <form-item label="开标时间">
                {{kbTimeSlicer(detail.bid_doc_refer_end_time)}}
            </form-item>

            <form-item label="开标提醒">
                <template slot="label">
                    <span class="label-icon">
                        <i class="iconfont color-success">&#xe6c5;</i>
                        开标提醒
                    </span>
                </template>

                <w-switch
                slot="footer"
                v-model="form.Scbj"
                active-value="0"
                inactive-value="1"
                @input="togglePush"></w-switch>
            </form-item>
            <form-item label="提醒时间" arrow>
                <template slot="label">
                    <span class="label-icon">
                        <i class="iconfont color-warn">&#xe6a4;</i>
                        提醒时间
                    </span>
                </template>

                <w-date-picker v-model="form.PushTime"></w-date-picker>
                <!-- <w-select
                v-model="form.PushTime"
                :data="timeData"
                placeholder="请选择提醒时间"></w-select> -->
            </form-item>
        </w-card>

        <w-card class="info--card">
            <template v-for="item in ggList" @click="toDetail(item)">
                <div class="flow-item">
                    <div class="flow-item_left">
                        <div>
                            {{timeToMMdd(item.AddTime)}}
                        </div>
                        <w-tag type="info">{{item.TypeName}}</w-tag>
                    </div>
                    <div class="flow-item_right">
                        {{item.Title}}
                    </div>
                </div>
            </template>
        </w-card>
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

            form: {
                Scbj: '0',
                PushTime: '',
                ProjectID: ''
            },
            timeData: [
                {label: '提前一周', value: 7},
                {label: '提前三天', value: 3},
                {label: '提前一天', value: 1},
            ],

            ggList: []
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
        type () {
            return this.getQuery('Category');
        },
        guid() {
            return this.getQuery('RowGuid')
        }
    },
    methods:{
        queryData: function(){
            var that = this;

            this.$get('/Api/Biding/GetDetail', {
                id: this.guid,
                type: this.type
            }, function(data){
                that.detail = data || {};
                that.collect = that.detail.Collection;
            });

            this.getPushDetail();
            this.queryFlow();
        },
        queryFlow() {
            this.$get('/Api/Biding/GetGgGlList', {
                id: this.guid
            }, data => {
                this.ggList = data;
            });
        },
        togglePush() {
            this.form.ProjectID = this.guid;
            this.$post('/Api/DingYue/PushManager', this.form, data => {
                app.ShowMsg('修改成功')
            });
        },
        getPushDetail() {
            this.$get('/Api/DingYue/GetPushDetail', {
                id: this.guid
            }, data => {
                this.form = data || {};
            });
        },
        toDetail(row) {
            this.goto('/detail/bidding/'+row.RowGuid+'/'+row.Category);
        },
        kbTimeSlicer(time) {
            if(!time) return;
            var date = [],
                hm = [];

            date.push(time.slice(0,4));
            date.push(time.slice(4,6));
            date.push(time.slice(6,8));

            hm.push(time.slice(8,10));
            hm.push(time.slice(10,12));

            return date.join('-') + ' ' + hm.join(':');
        },
        timeToMMdd(str) {
            return new Date(str).Format('MM-dd');
        }
    },
    mounted: function(){
        this.queryData();
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

.text-title{color:#3F3F3F; line-height:2em; font-size:16px; font-weight:bold; margin-right:6em;}
.btn-collect{float:right; width:6em; margin-left:-6em; text-align:center;}

.color-success{color:#67bea5;}
.color-warn{color:#eca355;}
.label-icon .iconfont{font-size:18px;}

.flow-item{padding:1em;}
.flow-item_left{width:6em; text-align:center; margin-right:-6em; float:left; position:relative;}
.flow-item_left:before, .flow-item_left:after{content:''; display:block; background:#DDDDDD; position:absolute;}
.flow-item_left:before{width:1px; right:0; top:-1em; bottom:-1em;}
.flow-item_left:after{width:.8em; height:.8em; top:.5em; right:-5px; border-radius:50%;}
.flow-item_right{margin-left:6em; padding-left:1em;}

.flow-item:first-child .flow-item_left:before{top:.5em;}
.flow-item:last-child .flow-item_left:before{bottom:auto; height:2em;}
</style>
