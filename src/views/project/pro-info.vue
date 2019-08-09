<template>
    <div>
        <w-card class="info--card">
            <div class="weui-form-preview">

                <div class="weui-form-preview__hd">
                    <h1 class="weui-form-preview__value">{{detail.Title}}</h1>
                </div>

            </div>
        </w-card>
        <w-card class="info--card">
            <form-item label="开标时间">
                {{kbTimeSlicer(detail.bid_doc_refer_end_time)}}
            </form-item>

            <form-item label="开标提醒">
                <w-switch
                slot="footer"
                v-model="form.Scbj"
                active-value="0"
                inactive-value="1"
                @input="togglePush"></w-switch>
            </form-item>
            <form-item label="提醒时间" arrow>
                <w-date-picker v-model="form.PushTime"></w-date-picker>
                <!-- <w-select
                v-model="form.PushTime"
                :data="timeData"
                placeholder="请选择提醒时间"></w-select> -->
            </form-item>
        </w-card>

        <w-card class="info--card">
            <div class="weui-media-box weui-media-box_appmsg" v-for="item in ggList" @click="toDetail(item)">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" src="~@/assets/icon/icon-flow-dot.png">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.TypeName}}</h4>
                    <p class="weui-media-box__desc">{{item.AddTime}}</p>
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
</style>
<style>
.rich-text__con{display: block !important;}
.rich-text__con table{width: 100% !important; border-collapse:collapse; border:none; table-layout: fixed; display: block;}
.rich-text__con table td{max-width: 100% !important; border: 1px solid #F2F6FC;}
.rich-text__con table tr td:first-child{ }
</style>
